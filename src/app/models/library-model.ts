import { LIB_ITEM_TYPE } from './LIB_ITEM_TYPE';

export interface LibraryModel{
    name:string;
    type:LIB_ITEM_TYPE;
    description?:string;
    libraryId:number;
}