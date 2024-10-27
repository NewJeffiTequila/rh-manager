import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departamentsRepository: Repository<Department>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.departamentsRepository.save(createDepartmentDto);
  }

  async findAll() {
    const departments = await this.departamentsRepository.find({
      withDeleted: true,
      relations: ['positions'],
    });

    return departments.map((department) => ({
      ...department,
      status: department.deletedAt ? 'inactive' : 'active',
      positions: department.positions,
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.departamentsRepository.findOne({
      where: { id },
    });

    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }

    await this.departamentsRepository.update(id, updateDepartmentDto);

    return await this.departamentsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const department = await this.departamentsRepository.findOne({
      where: { id },
      relations: ['positions'],
    });

    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    if (department.positions && department.positions.length > 0) {
      throw new BadRequestException(
        `Department with ID ${id} cannot be deleted because it has related positions`,
      );
    }
    await this.departamentsRepository.softDelete(id);
  }

  async restore(id: number): Promise<void> {
    const result = await this.departamentsRepository.restore(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Department with ID ${id} not found or not deleted`,
      );
    }
  }
}
