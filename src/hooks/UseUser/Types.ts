import { UserDto } from '../../types/UserDto';

export type UserInfoContext = {
    user: UserDto | null | undefined;
    setUser: (user: UserDto | null) => void;
};
