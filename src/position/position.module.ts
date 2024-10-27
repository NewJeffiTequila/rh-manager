import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Department } from 'src/department/entities/department.entity';

@Module({
  controllers: [PositionController],
  providers: [PositionService],
  imports: [TypeOrmModule.forFeature([Position, Department])],
  exports: [TypeOrmModule],
})
export class PositionModule {}
