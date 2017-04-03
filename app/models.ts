declare module Models{
export class Pin{

  name:string;
  id:number;
  imageUrl:string;
  text:string;
  user?:string;
  min?:string;
  userInfo?:string;
  isPinned?:boolean;
  isLike?:boolean;
}
}