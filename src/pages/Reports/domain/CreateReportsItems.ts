import { DateTime } from 'luxon';

import { ReportsCalendarDto } from '../../../types/ReportDto';

import { ReportItem } from './Types';

export const createReportsItems = ({ reports, calendar }: ReportsCalendarDto): ReportItem[] => {
    return calendar.map((day) => {
        const item: ReportItem = {
            ...day,
            dayFilled: false,
            dayFuture: DateTime.fromISO(day.wDate) > DateTime.now(),
            reports: reports.filter((rep) => rep.date === day.wDate),
        };

        if (!item.isDAyOff) {
            item.dayFilled = reports
                .filter((rep) => rep.date === day.wDate)
                .reduce((res, value) => res + value.time, 0) === 8;
        }

        return item;
    }) as ReportItem[];
};
