<template>
  <transition
    mode="out-in"
    :name="transitionName"
    @beforeLeave="animationStart"
    @afterEnter="animationEnd"
  >
    <slot />
  </transition>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const transitionName = computed(() => `slide-${props.direction}`);
    const animationStart = () => {
      document.body.classList.add('is-animating');
    };
    const animationEnd = () => {
      document.body.classList.remove('is-animating');
    };
    return {
      transitionName,
      animationStart,
      animationEnd,
    };
  },
};
</script>

<style lang="postcss">
.is-animating {
  overflow-x: hidden;
}
</style>

<style lang="postcss">
:root {
  --router-animation-duration: 0.2s;
  --router-animation-distance: 2em;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-property: transform, opacity;
  transition-duration: var(--router-animation-duration);
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-right-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(calc(-1 * var(--router-animation-distance)));
}

.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(var(--router-animation-distance));
}
</style>
