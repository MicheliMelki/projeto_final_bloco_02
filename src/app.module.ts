import { CategoriaModule } from './categoria/categoria.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Categoria } from './categoria/entities/categoria.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Categoria],
        synchronize: configService.get<string>('NODE_ENV') === 'development',
        logging: true,
      }),
     inject: [ConfigService],
    }),
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
