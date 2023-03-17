import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import CounterButtonVuex from '@/components/CounterButtonVuex.vue';

describe('CounterButtonVuex', () => {
  const initCounter = 200;
  let mockedIncFn;
  let store;

  beforeEach(() => {
    mockedIncFn = jest.fn();
    store = createStore({
      state: { count: initCounter },
      mutations: { INC: mockedIncFn },
    });
  });

  test('uses vuex conter state', async () => {
    const wrapper = mount(CounterButtonVuex, {
      global: { plugins: [store] },
    });
    expect(wrapper.html()).toContain(initCounter.toString());
  });

  test('calls INC mutation function', async () => {
    const wrapper = mount(CounterButtonVuex, {
      global: { plugins: [store] },
    });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(mockedIncFn).toHaveBeenCalled();
  });
});
