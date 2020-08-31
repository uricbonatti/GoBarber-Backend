import ListProviderDayAvaliabilityService from './ListProviderDayAvaliabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderDayAvaliability: ListProviderDayAvaliabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvaliability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvaliability = new ListProviderDayAvaliabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the hour avaliability in day from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 8, 15, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 8, 15, 14, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 8, 15, 16, 0, 0),
    });
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 8, 15, 11).getTime();
    });
    const avaliability = await listProviderDayAvaliability.execute({
      provider_id: 'user',
      year: 2020,
      month: 9,
      day: 15,
    });

    expect(avaliability).toEqual(
      expect.arrayContaining([
        { hour: 8, avaliable: false },
        { hour: 13, avaliable: true },
        { hour: 14, avaliable: false },
        { hour: 15, avaliable: true },
        { hour: 16, avaliable: false },
      ]),
    );
  });
});
