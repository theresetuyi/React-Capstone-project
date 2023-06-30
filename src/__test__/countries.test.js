import countries from '../redux/countries/countriesSlice';

it('should return the initial state', () => {
  expect(countries(undefined, {})).toEqual([]);
});
