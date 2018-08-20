<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: '',
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === 'home' && from.name === 'recipe') {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },
  },
};
</script>


<style lang="scss">
@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/LeagueMonoVariable.ttf") format("truetype");
  font-weight: 1 999;
}

:root {
  --primary-color-light: #cde0f1;
  --primary-color: #0b4f89;
  --grey: #ccc;
}

html {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: Avenir, sans-serif;
  font-variation-settings: "wght" 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

h1,
h2 {
  line-height: 1.2;
}

$timer: 0.15s;
$distance: 2em;

.slide-left-enter-active {
  animation: slideInRight $timer;
  animation-delay: $timer;
  opacity: 0;
}

.slide-left-leave-active {
  animation: slideOutRight $timer;
}

.slide-right-enter-active {
  animation: slideInLeft $timer;
  animation-delay: $timer;
  opacity: 0;
}

.slide-right-leave-active {
  animation: slideOutLeft $timer;
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX($distance);
    opacity: 0;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(-1 * $distance);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-1 * $distance);
    opacity: 0;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX($distance);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

::selection {
  background: var(--primary-color);
  color: #fff;
}

#app {
  color: #2c3e50;
  max-width: 60em;
  margin: 2em auto;
  padding: 0 2em;
}

a {
  border-bottom: 1px solid;
  border-bottom-color: var(--primary-color-light);
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    border-bottom-color: currentColor;
  }
}

ul {
  list-style: none outside;
  padding: 0;
}
</style>
