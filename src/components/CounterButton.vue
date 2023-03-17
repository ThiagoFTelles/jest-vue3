<template>
  <h4>{{ count }}</h4>
  <button class="btn btn-primary" @click="inc">
    Increment (local)
  </button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  by: {
    type: Number,
    default: 1,
  },
});

const count = ref(0);
const inc = () => {
  count.value += props.by;
};
</script>
