import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();

    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '112241456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('112241456');
  });

  it('should be unable to create a appointment w', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();

    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const appointmentDate = new Date(2020, 4, 10, 11, 0, 0);
    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '112241456',
    });
    // await createAppointment.execute({
    //   date: appointmentDate,
    //   provider_id: '112243456',
    // });
    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '112243456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
