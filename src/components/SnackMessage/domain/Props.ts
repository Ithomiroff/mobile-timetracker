import { AlertProps } from '@mui/material/Alert/Alert';
import { SnackbarProps } from '@mui/material/Snackbar/Snackbar';

export type SnackMessageProps = SnackbarProps & AlertProps & {message: string | null};
