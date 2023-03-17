import { mount } from '@vue/test-utils';
import CounterButton from '@/components/CounterButton.vue';

describe('CounterButton', () => {
  test('initial state is zero', () => {
    // Arrange
    const wrapper = mount(CounterButton);
    // Assert
    expect(wrapper.html()).toContain('0');
  });

  test('increment counter by 1 qith no props', async () => {
    // Arrange
    const wrapper = mount(CounterButton);
    const button = wrapper.find('button');
    // Act
    await button.trigger('click');
    // Assert
    expect(wrapper.html()).toContain('1');
  });

  test('increment counter by prop value', async () => {
    // Arrange
    const wrapper = mount(CounterButton, { props: { by: 5 } });
    const button = wrapper.find('button');
    // Act
    await button.trigger('click');
    // Assert
    expect(wrapper.html()).toContain('5');
  });
});
