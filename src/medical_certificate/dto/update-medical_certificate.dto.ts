import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalCertificateDto } from './create-medical_certificate.dto';

export class UpdateMedicalCertificateDto extends PartialType(CreateMedicalCertificateDto) {}
