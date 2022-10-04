import { Field, InputType, Mutation } from 'type-graphql'

@InputType()
export class CreatAppointmentInput {
  @Field()
  startsAt: Date

  @Field()
  endsAt: Date

  @Field()
  customerId: string
}
