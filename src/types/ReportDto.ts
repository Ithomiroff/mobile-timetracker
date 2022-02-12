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
    companyName: string;
    projectName: string;
};

export type CalendarDay = {
    isBlockingDay: boolean;
    isDAyOff: boolean;
    isDeleted: boolean;
    isHoliday: boolean;
    wDate: string;
    wrkCntHrs: number;
};

export type ReportsCalendarDto = {
    reports: ReportDto[];
    calendar: CalendarDay[];
};
