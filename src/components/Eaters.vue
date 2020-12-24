<template>
  <div class="eaters">
    <button
      :disabled="modelValue <= 1"
      class="add"
      @click="changeAmountofEaters(modelValue - 1)"
    >
      -
    </button>
    <div class="amount">
      {{ modelValue }} {{ $tc('details.persons', modelValue) }}
    </div>
    <button class="substract" @click="changeAmountofEaters(modelValue + 1)">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const changeAmountofEaters = counter => {
      emit('update:modelValue', counter);
    };

    return {
      changeAmountofEaters,
    };
  },
};
</script>

<style lang="postcss" scoped>
.eaters {
  margin-bottom: 1em;
  display: flex;

  @media (--print) {
    display: none;
  }
}

button {
  border: 2px solid var(--black);
  flex: 0 0 1.5em;
  &:disabled {
    color: var(--gray);
  }
}

.amount {
  border-top: 2px solid var(--black);
  border-bottom: 2px solid var(--black);
  padding: 0 0.5em;
}

.add {
  border-radius: 1em 0 0 1em;
}

.substract {
  border-radius: 0 1em 1em 0;
}
</style>
