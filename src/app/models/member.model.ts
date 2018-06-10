export class Member {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    birthDate: string;
    constructor(firstName: string, lastName: string, login: string, password: string, birthDate: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
        this.birthDate = birthDate;
    }
}

export class MemberLogin {
    login: string;
    password: string;
    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }
}