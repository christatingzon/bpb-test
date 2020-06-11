<template>
  <div class="home">
  	<div class="trending-products">
			<div class="container">
  			<h2>Top Trending Products</h2>
  			<div class="product-items">
					<ul class="nostyle-list">
						<li v-for="(item, index) in products" :key="item.id">
							<ProductItem :itemIndex="index" />
						</li>
					</ul>
  			</div>
			</div>
  	</div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  name: "Home",
  components: {
  	ProductItem
  },

  computed: {
  	products () {
  		return this.$store.state.products //name of state
  	}
  },

  created() {
  	this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scope>
	.home {
		min-height: 400px;
	}
</style>
