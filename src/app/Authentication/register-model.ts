export interface Isignup {
    FirstName: string,
    LastName: string,
    EmployeeId: string,
    EmailId: string,
    PhoneNumber: string,
    Gender: string,
    SelectEntity: string,
    DateOfBirth: string,
}
export interface Iemail {
    EmailId: string,
}
export interface ILogin {
    userName: string,
    password: string,
    SelectEntity: string,
}