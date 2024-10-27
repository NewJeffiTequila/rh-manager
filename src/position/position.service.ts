import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';
import { Department } from 'src/department/entities/department.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private positionsRepository: Repository<Position>,
    @InjectRepository(Department)
    private departamentsRepository: Repository<Department>,
  ) {}
  async create(createPositionDto: CreatePositionDto) {
    const departmentId = createPositionDto.departmentId;
    const department = await this.departamentsRepository.findOne({
      where: { id: departmentId },
    });

    if (!department) {
      throw new NotFoundException(
        `Department with ID ${departmentId} not found or inactive`,
      );
    }

    return await this.positionsRepository.save(createPositionDto);
  }

  async findAll() {
    const positions = await this.positionsRepository.find({
      withDeleted: true,
    });

    return positions.map((position) => ({
      ...position,
      status: position.deletedAt ? 'inactive' : 'active',
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  async update(id: number, updatePositionDto: UpdatePositionDto) {
    const position = await this.positionsRepository.findOne({
      where: { id },
    });
    if (!position) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }

    await this.positionsRepository.update(id, updatePositionDto);

    return await this.positionsRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const position = await this.positionsRepository.findOne({
      where: { id },
    });

    if (!position) {
      throw new NotFoundException(`Position with ID ${id} not found`);
    }
    await this.positionsRepository.softDelete(id);
  }
}
