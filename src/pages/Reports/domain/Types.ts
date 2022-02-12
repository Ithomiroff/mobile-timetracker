import { CalendarDay, ReportDto } from '../../../types/ReportDto';

export type ReportItem = CalendarDay & {
    reports: ReportDto[];
    hoursFilledCount: number;
    dayFuture: boolean;
};

export type ReportsOffset = {
    startDate: string;
    endDate: string;
};
