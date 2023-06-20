<template>
  <article>
    <section>
      <img src="" alt="">
    </section>
    <section>
      <h2></h2>
      <p></p>
    </section>
  </article>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: String,
    imgUrl: String,
    rating: Number,
    desc: Number,
    price: Number
  }  
}
</script>
