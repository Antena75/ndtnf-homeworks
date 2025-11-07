import mongoose from 'mongoose'

export interface IBook{
    title: string;
    description: string;
    authors: string;
    favorite: boolean;
    fileCover: string;
    fileName: string;
    fileBook: string;
    id?: mongoose.Types.ObjectId;
}
