import React from 'react';

import { UserDto } from '../../types/UserDto';

import { UserContext } from './UserContext';

const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = React.useState<UserDto | null | undefined>();

    const updateUser = React.useCallback((value: UserDto | null) => setUser(value), []);

    const providedValue = React.useMemo(() => ({
        user,
        setUser: updateUser,
    }), [user]);

    return (
        <UserContext.Provider value={ providedValue }>{ children }</UserContext.Provider>
    );
};

export default UserProvider;
