export type ReportSearchDto = {
    clientId: number;
    comment: string | null;
    employeeId: number;
    startDate: string;
    endDate: string;
    orderIndex: number | null;
    orderName: number | null;
    pageIndex: number;
    projectId: number;
    recordsOnPage: number;
};

export type ReportDto = {
    workRecordId: number;
    comment: string;
    time: number;
    date: string;
};
