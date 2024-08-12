import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm';
import { UsersModule } from './users/users.module';
import { PositionModule } from './position/position.module';
import { DepartmentModule } from './department/department.module';
import { PayrollModule } from './payroll/payroll.module';
import { AttendanceModule } from './attendance/attendance.module';
import { VacationModule } from './vacation/vacation.module';
import { MedicalCertificateModule } from './medical_certificate/medical_certificate.module';

@Module({
  imports: [
    UsersModule,
    PositionModule,
    DepartmentModule,
    PayrollModule,
    AttendanceModule,
    VacationModule,
    MedicalCertificateModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
