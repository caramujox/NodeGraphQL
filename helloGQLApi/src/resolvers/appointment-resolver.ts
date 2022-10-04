import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreatAppointmentInput } from '../../dtos/inputs/create-appointment-input'
import { AppointmentModel } from '../../dtos/models/AppointmentModel'

@Resolver()
export class AppointmentResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World'
  }

  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg('data') data: CreatAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt
    }

    return appointment
  }
}
