import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availability in month from provider', async () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 8; i <= 17; i++) {
      // eslint-disable-next-line no-await-in-loop
      await fakeAppointmentsRepository.create({
        provider_id: 'user',
        user_id: 'user',
        date: new Date(2020, 8, 14, i, 0, 0),
      });
    }
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 8, 15, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 9,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 13, available: true },
        { day: 14, available: false },
        { day: 15, available: true },
        { day: 16, available: true },
      ]),
    );
  });
});
