<template>
  <div class="recipe">

    <router-link
      :to="{ name: 'list' }"
      class="back">
      <icon
        :width="16"
        :height="16"
        icon="chevron-left"
      />

      Terug</router-link>

    <h1>{{ recipe.title }}</h1>
    <aside>
      <eaters />
      <ingredients
        v-if="recipe.ingredients"
        :ingredients="recipe.ingredients" />

      <dl>
        <template v-if="recipe.source">
          <dt>
            <icon
              :width="24"
              :height="24"
              icon="source"
              title="Bron" />
          </dt>
          <dd>
            <a
              :href="recipe.source"
              target="_blank"
              class="source"
              rel="noopener">
              Bron </a>
          </dd>
        </template>
        <template v-if="recipe.preparation_time">
          <dt>
            <icon
              :width="24"
              :height="24"
              icon="clock"
              title="Bron" />
          </dt>
          <dd>
            {{ recipe.preparation_time }}
            minuten
          </dd>
        </template>
        <dt>
          <icon
            :width="24"
            :height="24"
            icon="category"
            title="Type" />
        </dt>
        <dd>
          {{ recipe.type }}
        </dd>
      </dl>
    </aside>
    <div>
      <h2>Bereiding</h2>
      <div
        class="preperation"
        v-html="recipe.content" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Icon from '@/components/Icon.vue';
import Ingredients from '@/components/Ingredients.vue';
import Eaters from '@/components/Eaters.vue';

export default {
  components: {
    Icon,
    Ingredients,
    Eaters,
  },
  data() {
    return {
      recipe: {},
    };
  },

  computed: {
    ...mapState('recipes', ['recipes']),
  },

  mounted() {
    this.getRecipe();
    document.title = `${this.recipe.title} | Recepten van Maaike & Michiel`;
  },

  methods: {
    getRecipe() {
      const { slug } = this.$route.params;
      this.recipe = this.$store.getters['recipes/getBySlug'](slug);
    },
  },
};
</script>

<style lang="postcss" scoped>
.recipe {
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-md) {
    grid-template-columns: 1fr 3fr;
  }
}

.back {
  position: relative;
  align-self: self-end;
  padding: 0 0 0 1em;
  @media (--print) {
    display: none;
  }

  & svg {
    transition: transform 0.1s ease-out;
    top: 0.45em;
    left: 0;
    position: absolute;
  }

  &:hover svg {
    transform: translateX(-0.25em);
  }
}

h1 {
  margin: 0;
  padding: 0;
}

dl {
  display: grid;
  grid-gap: 0.25em;
  grid-template-columns: 1.25em auto;
}

dt {
  padding-top: 0.25em;
}

.preperation {
  counter-reset: preperation;

  & >>> p {
    position: relative;
    padding-left: 1em;

    &::before {
      font-family: 'header';
      font-size: 1.2em;
      line-height: 1;
      position: absolute;
      top: 0.1em;
      left: 0;
      counter-increment: preperation;
      content: counter(preperation);
    }
  }
}
</style>
