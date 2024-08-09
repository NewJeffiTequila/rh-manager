import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCertificateController } from './medical_certificate.controller';
import { MedicalCertificateService } from './medical_certificate.service';

describe('MedicalCertificateController', () => {
  let controller: MedicalCertificateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalCertificateController],
      providers: [MedicalCertificateService],
    }).compile();

    controller = module.get<MedicalCertificateController>(MedicalCertificateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
