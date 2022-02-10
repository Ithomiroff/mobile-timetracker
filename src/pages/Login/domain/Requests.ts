import { postAuthorization } from '../../../config/api';

import { AuthDto } from './Types';

const loginAction = async (body: AuthDto) => postAuthorization('/SingleSignOn/authorization', body);

export { loginAction };
