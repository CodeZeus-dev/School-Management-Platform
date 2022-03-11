import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { RegisterStudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable({})
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  public async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  public async callStudent(id: string): Promise<Student> {
    const student: Student = await this.studentRepository.findOne({ id });
    if (!student) {
      throw new NotFoundException('Student not found...');
    }
    return student;
  }

  public async registerStudent(
    registerStudentInput: RegisterStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = registerStudentInput;
    const newStudent = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(newStudent);
  }

  public async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
