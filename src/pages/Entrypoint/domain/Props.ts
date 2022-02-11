import { UserDto } from '../../../types/UserDto';

export type AppToolbarProps = {
    user: UserDto;
    avatar: string;
    onOpen: () => void;
};

export type SidebarProps = {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
};
