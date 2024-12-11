import * as mongoose from 'mongoose';


export class CreatecommentDto {
    readonly username: string;
    readonly text: string;
    readonly trackId: mongoose.Types.ObjectId;
}