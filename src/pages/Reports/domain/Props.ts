import { ReportDto } from '../../../types/ReportDto';

import { ReportItem } from './Types';

export type DayReportProps = ReportsLayoutProps;

export type ReportsLayoutProps = {
    report: ReportItem;
    onSelect: (item?: ReportDto) => void;
    onEdit: (item?: ReportDto) => void;
};

export type ReportDetailProps = {
    report: ReportDto;
    onDetail: (id: number) => void;
};

export type MonthReportProps = {
    topReport: ReportItem | null;
};
