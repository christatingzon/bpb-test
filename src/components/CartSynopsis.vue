<template>
	<div class="cart-summary">
		<p>You have {{ total.items }} <span v-if="total.items > 1">items</span><span v-else>item</span> in your cart</p>
		<ul class="compute-summary nostyle-list">
			<li>
				<span>Subtotal (ex GST)</span>
				<span>{{ subTotal | currency }}</span>
			</li>
			<li>
				<span>Plus GST</span>
				<span>{{ taxTotal | currency }}</span>
			</li>
			<li>
				<span>Total (incl GST)</span>
				<span>{{ total.price | currency }}</span>
			</li>
		</ul>
		<button>Review Cart</button>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
		  }     
		},

		computed: {
			total() {
				return this.$store.getters.cartTotal
			},

			subTotal() {
				return +(Math.round((this.$store.getters.cartTotal.price - (this.$store.getters.cartTotal.price * .15)) + "e+2")  + "e-2")
			},

			taxTotal() {
				return +(Math.round((this.$store.getters.cartTotal.price * .15) + "e+2")  + "e-2")
			}
		},
	}
</script>