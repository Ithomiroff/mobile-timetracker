import React from 'react';

import { UserContext } from './UserContext';

const useUser = () => React.useContext(UserContext);

export default useUser;
