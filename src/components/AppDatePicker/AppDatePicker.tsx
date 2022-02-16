import React from 'react';
import { MobileDatePicker } from '@mui/lab';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DialogProps } from '@mui/material';

import { AppDatePickerProps } from './domain/Props';

const dialogStyles: Partial<DialogProps> = {
    sx: {
        '& .PrivateDatePickerToolbar-penIcon': {
            display: 'none',
        },
    },
};

const AppDatePicker: React.FC<AppDatePickerProps> = ({
    value,
    onChange,
    renderInput,
}) => (
    <LocalizationProvider dateAdapter={ AdapterLuxon } locale="ru">
        <MobileDatePicker
            showToolbar={ true }
            disableFuture={ true }
            cancelText="Отмена"
            okText="Выбрать"
            DialogProps={ dialogStyles }
            label="Дата"
            views={ ['day'] }
            value={ value }
            onChange={ onChange }
            renderInput={ renderInput }
        />
    </LocalizationProvider>
);

export default AppDatePicker;
