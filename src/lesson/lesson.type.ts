import { ObjectType, Field, ID } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

// In order to refer to the LessonType as purely Lesson,
// we specify that as an ObjectType argument
@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  public id: string;
  @Field()
  public name: string;
  // Date Data represented as ISO strings
  @Field()
  public startDate: string;
  @Field()
  public endDate: string;
  @Field((type) => [StudentType])
  public students: string[];
}
