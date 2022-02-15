import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackspaceIcon from '@mui/icons-material/Backspace';
import CloseIcon from '@mui/icons-material/Close';
import { MobileDatePicker } from '@mui/lab';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
    Button,
    ButtonGroup,
    Checkbox,
    Container,
    FormControlLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import { FullWidthWindow } from '../../components/FullWidthWindow';

import { StyledFormField, StyledHeadContainer } from './domain/Styled';

const AddReport: React.FC = () => {
    const [value, setValue] = React.useState(null);

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <FullWidthWindow>
            <StyledHeadContainer maxWidth="sm">
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <IconButton size="large" onClick={ goBack }>
                        <CloseIcon />
                    </IconButton>
                    <Button size="small" variant="contained">Сохранить</Button>
                </Stack>
            </StyledHeadContainer>
            <Container maxWidth="sm">
                <Typography variant="h6">Создание отчета</Typography>
            </Container>
            <StyledFormField variant="filled" fullWidth={ true }>
                <InputLabel id="client-label">Клиент</InputLabel>
                <Select
                    labelId="client-label"
                    id="client-select"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={ 10 }>Ten</MenuItem>
                    <MenuItem value={ 20 }>Twenty</MenuItem>
                    <MenuItem value={ 30 }>Thirty</MenuItem>
                </Select>
            </StyledFormField>
            <StyledFormField variant="filled" fullWidth={ true }>
                <InputLabel id="project-label">Проект</InputLabel>
                <Select
                    labelId="project-label"
                    id="project-select"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={ 10 }>Ten</MenuItem>
                    <MenuItem value={ 20 }>Twenty</MenuItem>
                    <MenuItem value={ 30 }>Thirty</MenuItem>
                </Select>
            </StyledFormField>
            <StyledFormField variant="filled" fullWidth={ true }>
                <InputLabel id="type-label">Вид работы</InputLabel>
                <Select
                    labelId="type-label"
                    id="type-select"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={ 10 }>Ten</MenuItem>
                    <MenuItem value={ 20 }>Twenty</MenuItem>
                    <MenuItem value={ 30 }>Thirty</MenuItem>
                </Select>
            </StyledFormField>
            <LocalizationProvider dateAdapter={ AdapterLuxon } locale="ru">
                <MobileDatePicker
                    showToolbar={ true }
                    disableFuture={ true }
                    cancelText="Отмена"
                    okText="Выбрать"
                    DialogProps={ {
                        sx: {
                            '& .PrivateDatePickerToolbar-penIcon': {
                                display: 'none',
                            },
                        },
                    } }
                    label="Дата"
                    views={ ['day'] }
                    value={ value }
                    onChange={ (newValue) => {
                        setValue(newValue);
                    } }
                    renderInput={ (params) => (
                        <StyledFormField variant="filled" fullWidth={ true }>
                            <TextField { ...params } variant="filled" />
                        </StyledFormField>
                    ) }
                />
            </LocalizationProvider>
            <Container maxWidth="sm">
                <StyledFormField variant="filled" fullWidth={ true }>
                    <Stack direction="row" alignItems="end" justifyContent="space-between">
                        <Stack direction="column">
                            <Typography variant="caption">Время</Typography>
                            <Typography variant="body1">7 ч 20 мин.</Typography>
                        </Stack>

                        <ButtonGroup size="small" aria-label="large button group">
                            <Button key="one">15 м.</Button>
                            <Button key="two">30 м.</Button>
                            <Button key="three">45 м.</Button>
                            <Button key="three">1 ч.</Button>
                        </ButtonGroup>
                        <IconButton>
                            <BackspaceIcon />
                        </IconButton>
                    </Stack>
                </StyledFormField>
                <StyledFormField>
                    <Stack direction="row" alignItems="center">
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label={
                                <Typography variant="caption">Командировка</Typography>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label={

                                <Typography variant="caption">Внутренняя переработка </Typography>
                            }
                        />
                    </Stack>
                </StyledFormField>
            </Container>
            <TextField
                label="Что сделано?"
                fullWidth={ true }
                variant="filled"
                multiline={ true }
                rows={ 6 }
                maxRows={ 6 }
            />
            <StyledFormField />
        </FullWidthWindow>
    );
};

export default AddReport;

// client/getEmployeeClients/259
// /employee/projects/259
// /project/getLastReportProject/259
// /project/getProjectWorkTypesForEmployee/3255
