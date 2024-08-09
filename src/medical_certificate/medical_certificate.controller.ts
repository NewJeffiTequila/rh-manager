import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalCertificateService } from './medical_certificate.service';
import { CreateMedicalCertificateDto } from './dto/create-medical_certificate.dto';
import { UpdateMedicalCertificateDto } from './dto/update-medical_certificate.dto';

@Controller('medical-certificate')
export class MedicalCertificateController {
  constructor(private readonly medicalCertificateService: MedicalCertificateService) {}

  @Post()
  create(@Body() createMedicalCertificateDto: CreateMedicalCertificateDto) {
    return this.medicalCertificateService.create(createMedicalCertificateDto);
  }

  @Get()
  findAll() {
    return this.medicalCertificateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalCertificateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalCertificateDto: UpdateMedicalCertificateDto) {
    return this.medicalCertificateService.update(+id, updateMedicalCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalCertificateService.remove(+id);
  }
}
