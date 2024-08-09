import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PositionModule } from './position/position.module';
import { DepartmentModule } from './department/department.module';
import { PayrollModule } from './payroll/payroll.module';
import { AttendanceModule } from './attendance/attendance.module';
import { VacationModule } from './vacation/vacation.module';
import { MedicalCertificateModule } from './medical_certificate/medical_certificate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rh_manager',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    PositionModule,
    DepartmentModule,
    PayrollModule,
    AttendanceModule,
    VacationModule,
    MedicalCertificateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
