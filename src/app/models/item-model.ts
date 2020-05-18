import { GENRE } from './genre';

export interface ItemModel{
    id:number;
    name:string;
    genre:GENRE;
    author:string;
    code:string;
    description:string;
    
}