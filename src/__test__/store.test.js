import store from '../redux/store';

it('should render the store', () => {
  expect(store.getState().countries).toEqual([]);
});
