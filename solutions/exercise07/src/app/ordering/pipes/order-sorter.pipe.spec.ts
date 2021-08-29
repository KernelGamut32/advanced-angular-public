import { OrderSorterPipe } from './order-sorter.pipe';

describe('OrderSorterPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderSorterPipe();
    expect(pipe).toBeTruthy();
  });
});
