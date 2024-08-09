import { Module } from '@nestjs/common';
import { MedicalCertificateService } from './medical_certificate.service';
import { MedicalCertificateController } from './medical_certificate.controller';

@Module({
  controllers: [MedicalCertificateController],
  providers: [MedicalCertificateService],
})
export class MedicalCertificateModule {}
