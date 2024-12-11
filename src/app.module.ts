import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from "path";

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
		  }),
		MongooseModule.forRoot('mongodb+srv://Bakytbek05:Bakytbek05@spotyfi.xgfkg.mongodb.net/?retryWrites=true&w=majority&appName=spotyfi'),
		TrackModule,
		FileModule
	]
})
export class AppModule { }
