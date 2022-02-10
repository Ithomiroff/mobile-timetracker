import React from 'react';

import { UserInfoContext } from './Types';

export const UserContext = React.createContext<UserInfoContext>({} as UserInfoContext);
