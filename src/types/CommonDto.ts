export type CommonDto<T> = {
    isSuccess: boolean;
    message: string | null;
    object: T | null;
};
