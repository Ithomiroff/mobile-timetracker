export type UserDto = {
    id: number;
    userToken: TokenDto;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    phoneNumber: string;
};

export type TokenDto = {
    tokenInfo: string;
};
