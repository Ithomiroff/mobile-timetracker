import React from 'react';
import { Controller } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { SxProps } from '@mui/system';
import { DateTime } from 'luxon';

import AppDatePicker from '../../components/AppDatePicker/AppDatePicker';
import { FullWidthWindow } from '../../components/FullWidthWindow';
import { SnackMessage } from '../../components/SnackMessage';
import { TimeSelectControl } from '../../components/TimeSelectControl';

import { StyledFormControl, StyledFormFieldItem, StyledHeadContainer } from './domain/Styled';
import useAddReport from './domain/UseAddReport';

const titleSx: SxProps = { fontSize: '1.125rem' };

const AddReport: React.FC = () => {
    const {
        projects,
        clients,
        types,
        initialLoading,
        control,
        handleSubmit,
        onAdd,
        snackbar,
        goBack,
    } = useAddReport();

    const onSubmit = handleSubmit(onAdd);

    return (
        <FullWidthWindow>
            <form onSubmit={ onSubmit }>
                <StyledHeadContainer maxWidth="sm">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <IconButton size="large" onClick={ goBack }>
                            <CloseIcon />
                        </IconButton>
                        <Button size="small" variant="contained" type="submit">Сохранить</Button>
                    </Stack>
                </StyledHeadContainer>
                <Container maxWidth="sm">
                    <Typography variant="subtitle1" sx={ titleSx }>Создание отчета</Typography>
                </Container>

                <StyledFormFieldItem>
                    <Controller
                        control={ control }
                        name="client"
                        render={ ({ field, fieldState }) => (
                            <StyledFormControl
                                variant="filled"
                                fullWidth={ true }
                                error={ fieldState.invalid }
                            >
                                <InputLabel id="client-label">Клиент</InputLabel>
                                <Select
                                    disabled={ initialLoading }
                                    labelId="client-label"
                                    id="client-select"
                                    value={ field.value }
                                    onChange={ field.onChange }
                                    onBlur={ field.onBlur }
                                    ref={ field.ref }
                                    error={ fieldState.invalid }
                                >
                                    { clients.map((item) => (
                                        <MenuItem
                                            key={ item.clientId }
                                            value={ item.clientId }
                                        >{ item.companyName }
                                        </MenuItem>
                                    )) }
                                </Select>
                                { fieldState.invalid && (
                                    <FormHelperText>
                                        { fieldState.error?.message }
                                    </FormHelperText>
                                ) }
                            </StyledFormControl>
                        ) }
                    />
                </StyledFormFieldItem>

                <StyledFormFieldItem>
                    <Controller
                        control={ control }
                        name="project"
                        render={ ({ field, fieldState }) => (
                            <StyledFormControl
                                variant="filled"
                                fullWidth={ true }
                                error={ fieldState.invalid }
                            >
                                <InputLabel id="project-label">Проект</InputLabel>
                                <Select
                                    disabled={ initialLoading }
                                    labelId="project-label"
                                    id="project-select"
                                    value={ field.value }
                                    onChange={ field.onChange }
                                    onBlur={ field.onBlur }
                                    ref={ field.ref }
                                    error={ fieldState.invalid }
                                >
                                    { projects.map((item) => (
                                        <MenuItem
                                            key={ item.id }
                                            value={ item.id }
                                        >
                                            { item.projectName }
                                        </MenuItem>
                                    )) }
                                </Select>
                                { fieldState.invalid && (
                                    <FormHelperText>
                                        { fieldState.error?.message }
                                    </FormHelperText>
                                ) }
                            </StyledFormControl>
                        ) }
                    />
                </StyledFormFieldItem>

                <StyledFormFieldItem>
                    <Controller
                        control={ control }
                        name="type"
                        render={ ({ field, fieldState }) => (
                            <StyledFormControl
                                variant="filled"
                                fullWidth={ true }
                                error={ fieldState.invalid }
                            >
                                <InputLabel id="type-label">Вид работы</InputLabel>
                                <Select
                                    disabled={ initialLoading }
                                    labelId="type-label"
                                    id="type-select"
                                    value={ field.value }
                                    onChange={ field.onChange }
                                    onBlur={ field.onBlur }
                                    ref={ field.ref }
                                    error={ fieldState.invalid }
                                >
                                    { types.map((item) => (
                                        <MenuItem
                                            key={ item.workTypeId }
                                            value={ item.workTypeId }
                                        >
                                            { item.workName }
                                        </MenuItem>
                                    )) }
                                </Select>
                                { fieldState.invalid && (
                                    <FormHelperText>
                                        { fieldState.error?.message }
                                    </FormHelperText>
                                ) }
                            </StyledFormControl>
                        ) }
                    />
                </StyledFormFieldItem>

                <StyledFormFieldItem>
                    <Controller
                        name="date"
                        control={ control }
                        rules={ { required: true } }
                        render={ ({ field, fieldState }) => (
                            <AppDatePicker
                                value={ field.value as DateTime }
                                onChange={ (date) => field.onChange(date) }
                                renderInput={ (params) => (
                                    <StyledFormControl variant="filled" fullWidth={ true }>
                                        <TextField { ...params } variant="filled" error={ fieldState.invalid } />
                                    </StyledFormControl>
                                ) }
                            />
                        ) }
                    />
                </StyledFormFieldItem>

                <StyledFormFieldItem>
                    <Controller
                        name="time"
                        control={ control }
                        rules={ { min: 0.15 } }
                        render={ ({ field, fieldState }) => (
                            <StyledFormControl
                                variant="filled"
                                fullWidth={ true }
                                error={ fieldState.invalid }
                            >
                                <TimeSelectControl
                                    error={ fieldState.invalid }
                                    value={ field.value || 0 }
                                    onChange={ field.onChange }
                                />
                            </StyledFormControl>
                        ) }
                    />
                </StyledFormFieldItem>

                <Container maxWidth="sm">
                    <StyledFormFieldItem>
                        <Stack direction="column">
                            <FormControlLabel
                                control={ (
                                    <Controller
                                        name="isDutyJourney"
                                        control={ control }
                                        render={ ({ field }) => (
                                            <Checkbox
                                                checked={ field.value }
                                                onChange={ field.onChange }
                                            />
                                        ) }
                                    />
                                ) }
                                label={
                                    <Typography variant="body2">Командировка</Typography>
                                }
                            />
                            <FormControlLabel
                                control={ (
                                    <Controller
                                        name="isInnerOverWork"
                                        control={ control }
                                        render={ ({ field }) => (
                                            <Checkbox
                                                checked={ field.value }
                                                onChange={ field.onChange }
                                            />
                                        ) }
                                    />
                                ) }
                                label={
                                    <Typography variant="body2">Внутренняя переработка </Typography>
                                }
                            />
                        </Stack>
                    </StyledFormFieldItem>
                </Container>
                <StyledFormFieldItem>
                    <Controller
                        name="comment"
                        control={ control }
                        rules={ { required: true } }
                        render={ ({ field, fieldState }) => (
                            <StyledFormControl fullWidth={ true } error={ fieldState.invalid }>
                                <TextField
                                    label="Что сделано?"
                                    fullWidth={ true }
                                    variant="filled"
                                    multiline={ true }
                                    maxRows={ 4 }
                                    error={ fieldState.invalid }
                                    value={ field.value }
                                    onChange={ field.onChange }
                                />
                            </StyledFormControl>
                        ) }
                    />
                </StyledFormFieldItem>
            </form>

            <SnackMessage
                { ...snackbar }
                severity="error"
                color="error"
            />

        </FullWidthWindow>
    );
};

export default AddReport;
