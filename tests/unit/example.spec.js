import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // Arrange
    const msg = 'new message';

    // Act
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    // Assert
    expect(wrapper.text()).toMatch(msg);
  });
});
