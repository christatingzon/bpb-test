<template>
	<div class="product-item">
		<img :src="'https://picsum.photos/id/' + product.img + '/192/192'">
		<p class="item-id">{{ product.id }}</p>
		<p class="item-name">{{ product.title }}</p>
		<div v-if="product.isPerBox">
			<p class="item-price"><span>{{ product.price | currency }}</span> Per Box</p>
			<p class="item-piece">{{ product.extraDetails }} Per Box</p>
		</div>
		<div v-else>
			<p class="item-price"><span>{{ product.price }}</span> Per Pack</p>
			<p class="item-piece">{{ product.extraDetails }} Per Pack</p>
		</div>

		<div class="quantity">
			<button @click="minusItem()" :disabled="quantity <= 1">-</button>
			<span>{{ quantity }}</span>
			<button @click="addItem()">+</button>
		</div>

		<div class="action">
			<span>{{ product.price * quantity | currency }}</span>
			<button @click="addProductToCart({ product, quantity })">Add to Cart</button>
		</div>


	</div>
</template>

<script>
	export default {

		props: ['itemIndex'],
		data() {
		  return {
		  	quantity: 1
		  }
		},

		computed: {
			product () {
				return this.$store.state.products[this.itemIndex] //name of state
			}
		},

		methods: {
			addProductToCart(product) {
				this.$store.dispatch("addProductToCart", product)
			},

			addItem() {
				this.quantity++
			},

			minusItem() {
				this.quantity--
			},
		},

		created() {
			this.$store.dispatch("fetchProducts");
		}
	}
</script>