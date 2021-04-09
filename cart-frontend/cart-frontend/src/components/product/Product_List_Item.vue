<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="require('../../assets/' + productItem.image_tag)"
          width="1280"
          height="960"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <router-link :to="'/products/' + productItem.id" >
          <h3>{{ productItem.title }}</h3>
        </router-link>
        <a class="button is-info is-pulled-right" @click="addCartItem(productItem)">
          <strong>Add to Cart</strong>
        </a>
        <br/>
        <p class="mt-4">{{ productItem.description }}</p>
      </div>

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="require('../../assets/' + productItem.owner_photo)"
              alt="Placeholder image"
              width="96"
              height="96"/>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">{{ productItem.owner }}</p>
        </div>
        <div class="media-right">
          <a class="button is-info">
            <strong>${{ productItem.price }}</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>

<style>
.mt-4 {
  padding: 5px;
}
</style>
