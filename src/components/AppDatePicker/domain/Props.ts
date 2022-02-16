import * as React from 'react';
import { TextFieldProps as MuiTextFieldPropsType } from '@mui/material/TextField/TextField';
import { DateTime } from 'luxon';

export type AppDatePickerProps = {
    value: DateTime | null;
    onChange: (value: DateTime | null) => void;
    renderInput: (props: MuiTextFieldPropsType) => React.ReactElement;
};
