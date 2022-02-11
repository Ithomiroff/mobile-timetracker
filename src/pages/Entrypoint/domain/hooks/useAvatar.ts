import React from 'react';

import { getImage } from '../../../../config/api';

const useAvatar = (userId?: number) => {
    const [avatar, setAvatar] = React.useState<string>('');

    const getAvatar = async (id: number) => {
        const url = await getImage(`/avatar/employeePhoto/false/${id}.jpg`);

        setAvatar(url);
    };

    React.useEffect(() => {
        if (userId) {
            getAvatar(userId);
        }
    }, [userId]);

    return avatar;
};

export default useAvatar;
