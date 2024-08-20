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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rh_manager',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
