import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useSnackbar from '../../../components/SnackMessage/domain/UseSnackbar';
import { useUser } from '../../../hooks/UseUser';

import {
    createReport, getClients, getLastReport, getProjects, getWorkTypes,
} from './Requests';
import { ReportCreateDto, ReportForm } from './Types';

const defaultValues: ReportForm = {
    comment: '',
    date: null,
    overWork: 0,
    type: 0,
    time: 0,
    project: 0,
    client: 0,
    isDutyJourney: false,
    isInnerOverWork: false,
};

const optionsQueries = {
    refetchOnWindowFocus: false,
};

const useAddReport = () => {
    const { user } = useUser();

    const {
        control,
        setValue,
        watch,
        handleSubmit,
    } = useForm<ReportForm>({
        defaultValues,
        mode: 'onBlur',
    });

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const watchClient = watch('client');
    const watchProject = watch('project');

    const projectsQuery = useQuery(['projects', user?.id as number], () => getProjects(user?.id as number), optionsQueries);
    const clientsQuery = useQuery(['clients', user?.id as number], () => getClients(user?.id as number), optionsQueries);
    const lastProjectQuery = useQuery(['lastProject', user?.id as number], () => getLastReport(user?.id as number), optionsQueries);
    const workTypesQuery = useQuery(['workTypes', watchProject], () => (watchProject > 0 ? getWorkTypes(watchProject) : null), optionsQueries);

    const snackbar = useSnackbar();
    const snackbarSuccess = useSnackbar();

    const saveMutate = useMutation(createReport, {
        onSuccess: () => {
            snackbarSuccess.openSnack('Отчет успешно создан');
            goBack();
        },
        onError: (error: Error) => snackbar.openSnack(error.message),
    });

    React.useEffect(() => {
        const { data = [] } = lastProjectQuery;
        const report = data.length > 0 && data[data.length - 1];

        if (report) {
            setValue('client', report.client);
        }
    }, [lastProjectQuery.data]);

    React.useEffect(() => {
        const response = workTypesQuery.data || [];

        if (response.length > 0) {
            setValue('type', response[0].workTypeId);
        }
    }, [workTypesQuery.data]);

    const onAdd = (form: any) => {
        const {
            date,
            ...over
        } = form;

        if (!date) {
            return;
        }

        const body: ReportCreateDto = {
            ...over,
            date: date.toISODate(),
            lastModified: date.toISODate(),
            employees: user?.id as number,
        };

        saveMutate.mutate(body);
    };

    const projects = React.useMemo(() => {
        if (!projectsQuery.data || watchClient === 0) {
            return [];
        }

        return projectsQuery.data.filter((item) => item.client === watchClient);
    }, [projectsQuery.data, watchClient]);

    React.useEffect(() => {
        if (watchClient && projects.length > 0) {
            setValue('project', projects[0].id);
        }
    }, [watchClient, projects]);

    const initialLoading = projectsQuery.isFetching || clientsQuery.isFetching || workTypesQuery.isFetching || saveMutate.isLoading;

    return {
        initialLoading,
        clients: clientsQuery.data || [],
        types: workTypesQuery.data || [],
        projects,
        control,
        onAdd,
        handleSubmit,
        snackbar,
        snackbarSuccess,
        goBack,
    };
};

export default useAddReport;
