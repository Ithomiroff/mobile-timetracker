import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { DateTime } from 'luxon';

import { useUser } from '../../../../hooks/UseUser';
import { ReportsCalendarDto } from '../../../../types/ReportDto';
import { createReportsItems } from '../CreateReportsItems';
import { getReports, removeReport } from '../Requests';
import { ReportItem, ReportsOffset } from '../Types';

const now = DateTime.now();
const nowOffset = now;

const initialOffset: ReportsOffset = {
    startDate: nowOffset.set({ month: nowOffset.month - 1 }).toISODate(),
    endDate: nowOffset.toISODate(),
};

const useReports = (closeDetail: () => void) => {
    const { user } = useUser();

    const [reports, setReports] = React.useState<ReportItem[]>([]);

    const [offset, setOffset] = React.useState<ReportsOffset>({ ...initialOffset });

    const {
        isFetching,
    } = useQuery(
        ['reports', offset],
        () => getReports(user?.id as number, offset.startDate, offset.endDate),
        {
            onSuccess: (data: ReportsCalendarDto) => {
                setReports((prev) => [...prev, ...createReportsItems(data)]);
            },
        },
    );

    const deleteMutate = useMutation(removeReport, {
        onSuccess: (id: number | null) => {
            if (id) {
                closeDetail();
                setReports([]);
                setOffset({ ...initialOffset });
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

    const deleteReport = (id: number) => {
        deleteMutate.mutate(id);
    };

    return {
        isFetching,
        reports,
        loadMore,
        deleteReport,
    };
};

export default useReports;
