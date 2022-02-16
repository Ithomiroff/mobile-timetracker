import { DateTime } from 'luxon';

export type ClientDto = {
    catalogName: string;
    clientId: number;
    companyName: string;
    groupName: string | null;
    isDeleted: boolean;
    isNds: boolean;
    overWorkingCoefficient: number;
};

export type ProjectDto = {
    id: number;
    projectName: string;
    projectId: number;
    client: number;
};

export type WorkTypeDto = {
    isDeleted: boolean;
    isUseProhibited: boolean;
    project: number;
    totalTime: number | null;
    workName: string;
    workTypeId: number;
};

export type ReportCreateDto = {
    comment: string;
    date: string;
    employees: number;
    lastModified: string;
    isDutyJourney: boolean;
    isInnerOverWork: boolean;
    overWork: number;
    project: number;
    time: number;
    type: number;
};

export type ReportForm = Omit<ReportCreateDto, 'lastModified' | 'employees' | 'date'>
& Pick<ProjectDto, 'client'>
& {
    date: DateTime | null;
};
