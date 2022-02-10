import { UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export type FormTextFieldProps<F extends object> = TextFieldProps & UseControllerProps<F>
