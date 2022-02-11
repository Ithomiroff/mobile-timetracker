import { postReq } from '../../../config/api';
import { ReportDto, ReportSearchDto } from '../../../types/ReportDto';

const getReports = (body: ReportSearchDto) => postReq<ReportDto[]>('/userRecords/getUserReports', body);

export {
    getReports,
};
