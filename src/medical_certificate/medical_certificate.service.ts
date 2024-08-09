import { Injectable } from '@nestjs/common';
import { CreateMedicalCertificateDto } from './dto/create-medical_certificate.dto';
import { UpdateMedicalCertificateDto } from './dto/update-medical_certificate.dto';

@Injectable()
export class MedicalCertificateService {
  create(createMedicalCertificateDto: CreateMedicalCertificateDto) {
    return 'This action adds a new medicalCertificate';
  }

  findAll() {
    return `This action returns all medicalCertificate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalCertificate`;
  }

  update(id: number, updateMedicalCertificateDto: UpdateMedicalCertificateDto) {
    return `This action updates a #${id} medicalCertificate`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalCertificate`;
  }
}
