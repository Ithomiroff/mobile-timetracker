import { UserDto } from '../../../types/UserDto';

export type AuthDto = {
    login: string;
    password: string;
};

export type AuthResponseDto = {
    isSuccess: boolean;
    message: string;
    object: UserDto;
};

export type LoginForm = AuthDto;
