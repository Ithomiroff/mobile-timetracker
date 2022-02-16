import { CommonDto } from '../../../types/CommonDto';
import { UserDto } from '../../../types/UserDto';

export type AuthDto = {
    login: string;
    password: string;
};

export type AuthResponseDto = CommonDto<UserDto>;

export type LoginForm = AuthDto;
