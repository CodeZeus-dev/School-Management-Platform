import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Student } from './student.entity';
import { RegisterStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentType])
  public students(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => StudentType)
  public callStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.callStudent(id);
  }

  @Mutation((returns) => StudentType)
  public registerStudent(
    @Args('registerStudentInput') registerStudentInput: RegisterStudentInput,
  ): Promise<Student> {
    return this.studentService.registerStudent(registerStudentInput);
  }
}
