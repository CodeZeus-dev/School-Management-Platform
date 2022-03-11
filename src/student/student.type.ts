import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((type) => ID)
  public id: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;
}
