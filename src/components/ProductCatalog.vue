<template>
  <section
    :class="[
      'product',
      currentSection === `men's clothing`
        ? 'product--men'
        : currentSection === `women's clothing`
        ? 'product--women'
        : `product--unavailable`,
      loading && `product--unavailable`,
    ]">
    <ProductCardBase v-if="loading" />
    <ProductCard
      @next="incrementIndex"
      v-if="!loading && !error"
      :product="currentProduct" />
    <ProductCardError @next="incrementIndex" v-if="!loading && error" />
  </section>
</template>

<script>
  import ProductCard from "@/components/ProductCard.vue";
  import ProductCardBase from "./ProductCardBase.vue";
  import ProductCardError from "./ProductCardError.vue";

  export default {
    components: { ProductCard, ProductCardBase, ProductCardError },
    data() {
      return {
        productIndex: 1,
        maxProduct: 20,
        loading: false,
        // error: false,
        error: true,
        currentProduct: null,
        currentSection: null,
        category: ["men's clothing", "women's clothing"],
      };
    },
    methods: {
      incrementIndex() {
        this.productIndex < this.maxProduct
          ? this.productIndex++
          : (this.productIndex = 1);
      },
      decrementIndex() {
        this.prodcutIndex > 1 && this.productIndex--;
      },
      async getData() {
        this.loading = true;
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${this.productIndex}`
          );
          this.currentProduct = await response.json();
          if (!this.category.includes(this.currentProduct.category)) {
            this.error = true;
          } else {
            this.error = false;
          }
          this.currentSection = this.currentProduct.category;
        } catch (err) {
          this.error = true;
        } finally {
          this.loading = false;
        }
      },
    },
    watch: {
      productIndex() {
        this.getData();
      },
    },
    created() {
      this.getData();
    },
  };
</script>

<style></style>
