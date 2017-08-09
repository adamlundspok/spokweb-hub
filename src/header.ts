import { CurrentUser } from './current.user';

export class Header {

    header(user: CurrentUser) {
        console.log('user is', user);
    }
}

