<template>
  <section>
    <ProductCard />
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"

export default {
  components: {ProductCard},
  data() {
    return {
      productIndex: 1,
      maxProduct: 20,
      currentProduct: null
    }
  },
  methods: {
    incrementIndex() {
      this.productIndex < this.maxProduct && this.productIndex++
    },
    decrementIndex() {
      this.prodcutIndex > 1 && this.productIndex--
    },
    async getData() {}
  },
  mounted() {
    this.getData()    
  }
}
</script>

<style>
</style>