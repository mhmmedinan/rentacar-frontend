export interface UserRental{
    id:number;
    carId:number;
    userId?:number;
    description:string;
    brandName:string;
    companyName:string;
    firstName:string;
    lastName:string;
    modelYear:number;
    rentDate:Date;
    returnDate:Date;

}