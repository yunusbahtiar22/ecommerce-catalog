<template>
  <article class="product-card">
    <section class="product-card__image">
      <img width="301px" height="383px" :src="product.image" alt="" />
    </section>
    <section class="product-card__content">
      <div class="title-wrapper">
        <h2
          :class="[
            `content__title`,
            product.category === `men's clothing`
              ? `content__title--men`
              : `content__title--women`,
          ]">
          {{ product.title }}
        </h2>
      </div>
      <div class="content__rating">
        <span>{{ product.category }}</span>
        <div class="rating-wrapper">
          <span>{{ product.rating.rate }}/5</span>
          <CardRating
            :value="product.rating.rate"
            :category="product.category" />
        </div>
      </div>
      <div class="content__desc">
        <p>{{ product.description }}</p>
      </div>
      <p
        :class="[
          `price`,
          product.category === `men's clothing` ? `price--men` : `price--women`,
        ]">
        $ {{ product.price }}
      </p>
      <div class="actions-wrapper">
        <button
          :class="[
            `btn`,
            product.category === `men's clothing`
              ? `btn-primary--men`
              : product.category === `women's clothing`
              ? `btn-primary--women`
              : ``,
          ]">
          Buy Now
        </button>
        <button
          :class="[
            `btn`,
            product.category === `men's clothing`
              ? `btn-outline--men`
              : product.category === `women's clothing`
              ? `btn-outline--women`
              : ``,
          ]"
          @click="$emit('next')">
          Next Product
        </button>
      </div>
    </section>
  </article>
</template>

<script>
  import CardRating from "./CardRating.vue";

  export default {
    name: "ProductCard",
    components: { CardRating },
    props: {
      product: Object,
    },
  };
</script>
