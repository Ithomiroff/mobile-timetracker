import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { FormTextFieldProps } from './domain/Props';

const FormTextField = <F extends object, >(props: FormTextFieldProps<F>) => (
    <Controller
        { ...props }
        render={ ({ field, fieldState }) => (
            <TextField
                { ...props }
                error={ fieldState.invalid }
                helperText={ fieldState?.error?.message }
                value={ field.value }
                onChange={ field.onChange }
                onBlur={ field.onBlur }
            />
        ) }
    />
);

export default FormTextField;
