import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { DateTime } from 'luxon';

import { useUser } from '../../../../hooks/UseUser';
import { ReportDto, ReportsCalendarDto } from '../../../../types/ReportDto';
import { createReportsItems } from '../CreateReportsItems';
import { getReports, removeReport } from '../Requests';
import { ReportItem, ReportsOffset } from '../Types';

const now = DateTime.now();
const nowOffset = now;

const initialOffset: ReportsOffset = {
    startDate: nowOffset.set({ month: nowOffset.month - 1 }).toISODate(),
    endDate: nowOffset.toISODate(),
};

const skeletons = new Array(15).fill(undefined).map((item, i) => i);

const useReports = (closeDetail: () => void) => {
    const { user } = useUser();

    const [reports, setReports] = React.useState<ReportItem[]>([]);

    const [offset, setOffset] = React.useState<ReportsOffset>({ ...initialOffset });

    const [preloadSkeletons, setPreloadSkeletons] = React.useState<number[]>(skeletons);

    const {
        isFetching,
    } = useQuery(
        ['reports', offset],
        () => getReports(user?.id as number, offset.startDate, offset.endDate),
        {
            onSuccess: (data: ReportsCalendarDto) => {
                setReports((prev) => [...prev, ...createReportsItems(data)]);
                if (preloadSkeletons.length > 0) {
                    setPreloadSkeletons([]);
                }
            },
        },
    );

    const deleteMutate = useMutation(removeReport, {
        onSuccess: (report: ReportDto | null) => {
            if (report) {
                closeDetail();
                setReports((prev) => {
                    return prev.map((item) => {
                        return {
                            ...item,
                            reports: item.reports.filter((rep) => rep.workRecordId !== report.workRecordId),
                        };
                    });
                });
            }
        },
    });

    const loadMore = () => {
        setOffset((prev) => {
            const start = DateTime.fromISO(prev.startDate);

            return {
                endDate: prev.startDate,
                startDate: start.set({ month: start.month - 1 }).toISODate(),
            };
        });
    };

    const deleteReport = (report: ReportDto) => {
        deleteMutate.mutate(report);
    };

    return {
        isFetching,
        reports,
        loadMore,
        deleteReport,
        preloadSkeletons,
    };
};

export default useReports;
