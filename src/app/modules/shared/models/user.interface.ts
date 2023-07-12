export interface userLogin{
    username: string,
    password:string
}
export interface DataUser{
    name:string,
    email:string,
    phone: string,
    direction: string,
    img?:string
}
export const DefaultUser: DataUser={
    name:'',
    email:'',
    phone: '',
    direction: '',
    img:''
}
