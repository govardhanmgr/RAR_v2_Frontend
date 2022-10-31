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

export interface Iemail
{
    EmailId:string,
}

export interface Isecurityquestions{
    
  Question1:string,
  Question2:string,
  Question3:string,
  Answer1:string,
  Answer2:string,
  Answer3:string,

}
export interface ILogin {
    email: string,
    password: string,
    entity: string,
}

