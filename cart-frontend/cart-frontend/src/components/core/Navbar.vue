
<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/shop" class="button is-info">
               <strong>Shop</strong>
              </router-link>
              <router-link to="/cart" class="button is-light">
                <i class="fa fa-shopping-cart"></i> <span>{{cartQuantity}}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: "Navbar",
    computed: {
    ...mapGetters([
      'cartQuantity'
    ])
  },
  created() {
    this.$store.dispatch("getCartItems");
  }
}
</script>

<style>
.fa-shopping-cart {
  padding: 6px;
}
</style>
