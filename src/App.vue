<template>
  <div class="container">
    <h1>Carrito</h1>
    <div class="row">
      {{ cart }}
      <Card 
        v-for="product of products" :key="product.id"
        :product="product" 
      />
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed, onMounted} from 'vue'
import Card from "./components/Card.vue"

export default {
  name: "App",
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });

    const products = computed(() => store.state.products)
    const cart = computed(() => store.state.cart)

    return {products, cart}
  },
};
</script>

<style>
</style>
