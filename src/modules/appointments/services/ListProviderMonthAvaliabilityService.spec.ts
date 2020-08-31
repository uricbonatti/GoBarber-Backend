import ListProviderMonthAvaliabilityService from './ListProviderMonthAvaliabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderMonthAvaliability: ListProviderMonthAvaliabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvaliability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvaliability = new ListProviderMonthAvaliabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day avaliability in month from provider', async () => {
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

    const avaliability = await listProviderMonthAvaliability.execute({
      provider_id: 'user',
      year: 2020,
      month: 9,
    });

    expect(avaliability).toEqual(
      expect.arrayContaining([
        { day: 13, avaliable: true },
        { day: 14, avaliable: false },
        { day: 15, avaliable: true },
        { day: 16, avaliable: true },
      ]),
    );
  });
});
