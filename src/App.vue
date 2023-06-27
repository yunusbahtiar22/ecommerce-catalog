<template>
  <div id="app">
    <main>
      <ProductCatalog />
    </main>
  </div>
</template>

<script>
  import ProductCatalog from "@/components/ProductCatalog.vue";

  export default {
    name: "App",
    components: {
      ProductCatalog,
    },
  };
</script>

<style></style>
