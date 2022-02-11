import { CalendarDay, ReportDto } from '../../../types/ReportDto';

export type ReportItem = CalendarDay & {
    reports: ReportDto[];
    dayFilled: boolean;
    dayFuture: boolean;
};

export type ReportsOffset = {
    startDate: string;
    endDate: string;
};
