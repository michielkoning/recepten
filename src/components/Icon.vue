<template>
  <svg :aria-label="title" :width="width" :height="height" role="presentation">
    <title v-if="title" :lang="lang">{{ title }}</title>

    <g :fill="color">
      <use
        v-bind="{ 'xlink:href': '#' + icon }"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
  data() {
    return {
      lang: process.env.VUE_APP_I18N_LOCALE,
    };
  },
};
</script>

<style lang="postcss" scoped>
svg {
  display: inline-block;
  fill: currentColor;
  position: relative;
}
</style>
