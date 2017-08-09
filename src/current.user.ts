export class CurrentUser {
    first: string;
    last: string;
    email: string;
    user_id: string;
    account_name: string;
    account_id: string;
    role_level: number;
    constructor(firstName: string, lastName: string, level: number){
        this.first = firstName;
        this.last = lastName;
        this.role_level = level;
    }
}