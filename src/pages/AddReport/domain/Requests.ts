import { getReq, postReq } from '../../../config/api';
import { CommonDto } from '../../../types/CommonDto';
import { ReportDto } from '../../../types/ReportDto';

import {
    ClientDto, ProjectDto, ReportCreateDto, WorkTypeDto,
} from './Types';

const getClients = (userId: number) => getReq<ClientDto[]>(`/client/getEmployeeClients/${userId}`);

const getProjects = (userId: number) => getReq<ProjectDto[]>(`/employee/projects/${userId}`);

const getLastReport = (userId: number) => getReq<ReportDto[]>(`/work_record/getLastEmployeeReport/${userId}`);

const getWorkTypes = (id: number) => getReq<WorkTypeDto[]>(`/project/getProjectWorkTypesForEmployee/${id}`);

const createReport = async (body: ReportCreateDto) => {
    const response = await postReq<CommonDto<any>>('/work_record/add', body);

    if (response.isSuccess) {
        return response;
    }

    throw new Error(response.message || '');
};

export {
    getClients,
    getProjects,
    createReport,
    getWorkTypes,
    getLastReport,
};
