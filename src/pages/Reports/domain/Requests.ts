import { getReq } from '../../../config/api';
import { ReportsCalendarDto } from '../../../types/ReportDto';

const getReports = async (userId: number, startDate: string, endDate: string) => {
    const url = `/userRecords/getUserReportsWithProductionCalendarByDates/${userId}/${startDate}/${endDate}`;

    const response = await getReq<ReportsCalendarDto>(url);

    return response;
};

const removeReport = async (id: number) => {
    const response = await getReq<boolean>(`work_record/delete/${id}/`);

    return response ? id : null;
};

export {
    getReports,
    removeReport,
};
