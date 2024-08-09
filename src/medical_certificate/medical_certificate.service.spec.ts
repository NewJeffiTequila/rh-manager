import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCertificateService } from './medical_certificate.service';

describe('MedicalCertificateService', () => {
  let service: MedicalCertificateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalCertificateService],
    }).compile();

    service = module.get<MedicalCertificateService>(MedicalCertificateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
