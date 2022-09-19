type UserType = {
    nom: string,
    prenom: string,
    email: string,
    password: string,
    isadmin: boolean,
    img: string,
    // id?: number
}
type UserTypeEmployes = {
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    description: string,
    pic: string,
}


type UserTypeNoti = {
    email: string,
    idclient: string,
    message: string,

}
type CameraOptions = {
    label: string,
    value: string

}