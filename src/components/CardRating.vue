<template>
  <div style="display: inline-flex; gap: 1px">
    <template v-for="(n, index) in 5">
      <span
        :key="n"
        v-if="index < filled"
        :class="[
          `rating`,
          category === `men's clothing` ? `rating--men` : `rating--women`,
        ]"></span>
      <span
        :key="n"
        v-else
        :class="[
          `rating`,
          category === `men's clothing`
            ? `rating--men rating--outline`
            : `rating--women rating--outline`,
        ]"></span>
    </template>
  </div>
</template>

<script>
  export default {
    name: "CardRating",
    props: {
      value: Number,
      category: String,
    },
    data() {
      return {
        filled: parseInt(Math.round(this.value)),
      };
    },
    mounted() {
      console.log(this.filled, this.notFilled);
    },
  };
</script>
