import { SnackMessageProps } from './Props';

export type SnackMessageHook = Pick<SnackMessageProps, 'message' | 'open' | 'onClose'>
& {
    openSnack: (msg: string) => void;
};
