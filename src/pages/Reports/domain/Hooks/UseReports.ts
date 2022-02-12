import React from 'react';
import { useQuery } from 'react-query';
import { DateTime } from 'luxon';

import { useUser } from '../../../../hooks/UseUser';
import { ReportsCalendarDto } from '../../../../types/ReportDto';
import { createReportsItems } from '../CreateReportsItems';
import { getReports } from '../Requests';
import { ReportItem, ReportsOffset } from '../Types';

const now = DateTime.now();
const nowOffset = now;

const initialOffset: ReportsOffset = {
    startDate: nowOffset.set({ month: nowOffset.month - 1 }).toISODate(),
    endDate: nowOffset.toISODate(),
};

const useReports = () => {
    const { user } = useUser();

    const [reports, setReports] = React.useState<ReportItem[]>([]);

    const [offset, setOffset] = React.useState<ReportsOffset>(initialOffset);

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

    const refFetching = React.useRef<boolean>(false);

    React.useEffect(() => {
        refFetching.current = isFetching;
    }, [isFetching]);

    const loadMore = () => {
        if (refFetching.current) {
            return;
        }

        if (document.body.scrollHeight - (window.innerHeight + window.scrollY) === 0) {
            setOffset((prev) => {
                const start = DateTime.fromISO(prev.startDate);

                return {
                    endDate: prev.startDate,
                    startDate: start.set({ month: start.month - 1 }).toISODate(),
                };
            });
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', loadMore, false);

        return () => window.removeEventListener('scroll', loadMore, false);
    }, []);

    return {
        isFetching,
        reports,
    };
};

export default useReports;
