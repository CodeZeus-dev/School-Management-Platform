import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  public lessonId: string;
  @IsUUID('4', { each: true }) // '4' corresponds to the UUID version, and each: true validates each array element
  @Field((type) => [ID])
  public studentIds: string[];
}
