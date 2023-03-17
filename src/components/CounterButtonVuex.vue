<template>
  <h4>{{ count }}</h4>
  <button class="btn btn-primary" @click="inc">
    Increment (vuex)
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  by: {
    type: Number,
    default: 1,
  },
});

const store = useStore();

const count = computed(() => store.state.count);
const inc = () => store.commit('INC', props.by);
</script>
