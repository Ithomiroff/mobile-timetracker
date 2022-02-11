import { ReportSearchDto } from '../../../types/ReportDto';

export const reportsSearchBody = (base: Partial<ReportSearchDto>) =>
    (pageIndex: ReportSearchDto['pageIndex'], recordsOnPage: ReportSearchDto['recordsOnPage'] = 25): ReportSearchDto => {
        return {
            ...base,
            pageIndex,
            recordsOnPage,
        } as ReportSearchDto;
    };
