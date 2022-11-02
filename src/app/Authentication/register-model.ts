export interface Isignup {
    firstName: string,
    lastName: string,
    idnumber: string,
    email: string,
    phoneNumber: string,
    gender: string,
    entity: string,
    dateofBirth: string,
}

export interface Iemail
{
    email:string,
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
export interface IPassword{
    newpassword:string;
    confirmpassword:string;
}

