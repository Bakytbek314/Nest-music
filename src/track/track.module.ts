import { Module } from "@nestjs/common";
import { TrackCotroller } from "./track.controller";
import { TrackService } from "./track.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Track, TrackSchema } from "./schemas/track.schema";
import { Comment, CommentSchema } from "./schemas/comments.schema";
import { FileService } from "src/file/file.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema}]),
    ],
    controllers: [TrackCotroller],
    providers: [TrackService, FileService]
})
export class TrackModule {}