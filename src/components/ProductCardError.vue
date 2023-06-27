<template>
  <article class="product-error">
    <div class="card-error__content">
      <p style="margin-bottom: 1rem; text-align: center; font-size: 20px">
        This product is unavailable to show
      </p>
      <button class="btn btn-outline btn--error" @click="$emit('next')">
        Next Product
      </button>
    </div>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        name: "ProductCardError",
      };
    },
  };
</script>

<style lang="scss" scoped></style>
