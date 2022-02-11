import React from 'react';
import { useMutation } from 'react-query';

import { ReportDto } from '../../../types/ReportDto';

import { reportsSearchBody } from './ReportsSearch';
import { getReports } from './Requests';

const requestBody = reportsSearchBody({
    clientId: 0,
    comment: null,
    employeeId: 259,
    endDate: '2100-01-01',
    orderIndex: null,
    orderName: null,
    projectId: 0,
    startDate: '2000-01-01',
});

const useReports = () => {
    const [reports, setReports] = React.useState<ReportDto[]>([]);

    const [page, setPage] = React.useState<number>(0);

    const { mutate, isLoading } = useMutation(getReports, {
        onSuccess: (data) => setReports(data.reverse()),
    });

    React.useEffect(() => {
        mutate(requestBody(page));
    }, [page]);

    return {
        isLoading,
        reports,
        onChangePage: setPage,
    };
};

export default useReports;
