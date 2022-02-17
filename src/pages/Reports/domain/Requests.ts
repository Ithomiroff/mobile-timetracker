import { getReq } from '../../../config/api';
import { ReportDto, ReportsCalendarDto } from '../../../types/ReportDto';

const getReports = async (userId: number, startDate: string, endDate: string) => {
    const url = `/userRecords/getUserReportsWithProductionCalendarByDates/${userId}/${startDate}/${endDate}`;

    const response = await getReq<ReportsCalendarDto>(url);

    return response;
};

const removeReport = async (report: ReportDto) => {
    const response = await getReq<boolean>(`work_record/delete/${report.workRecordId}/`);

    return response ? report : null;
};

export {
    getReports,
    removeReport,
};
