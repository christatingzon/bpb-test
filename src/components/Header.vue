<template>
	<header class="site-header">
		<div class="top-banner hidden-s">
			<div class="container">
				<p>ESSENTIAL SUPPLIER</p>
				<p>We’re here to service your packaging & hygiene needs at every alert level</p>
			</div>
		</div>
		<div class="welcome-block">
			<div class="container">
				<div class="left">
					Welcome back <span>Abe’s Real Bagels Limited</span> <img src="@/assets/images/chev-right.svg" class="hidden-s" />
				</div>
				<div class="right">
					<ul class="nostyle-list">
						<li>
							<a href="#">Fast Order</a>
						</li>
						<li>
							<a href="#">Contract Prices</a>
						</li>
						<li>
							<a href="#">Order History</a>
						</li>
						<li>
							<a href="#" class="logout">Sign Out <img src="@/assets/images/logout.svg"/></a>
						</li>
						<li>
							<label class="exc">
								<input type="checkbox" checked>
								<span>EXC GST</span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mid-block">
			<div class="container">
				<div class="logo">
					<button class="hamburger-menu">
						<span></span>
						<span></span>
						<span></span>
					</button>
					<router-link to="/"><img src="@/assets/images/matt-pack-logo.png"/></router-link>
					<div class="cart-block">
						<button :class="{active: cartSummaryActive}" @click="cartSummaryActive = !cartSummaryActive"><img src="@/assets/images/cart-icon.svg"/></button>
						<CartSynopsis />
					</div>
				</div>
				<div class="search-bar">
					<input type="text" placeholder="Search Product Name or Code…">
				</div>
				<div class="cart-block hidden-s">
					<button :class="{active: cartSummaryActive}" @click="cartSummaryActive = !cartSummaryActive"><img src="@/assets/images/cart-icon.svg"/>{{ total.items }} <span v-if="total.items > 1">items</span><span v-else>item</span> - {{ total.price | currency }}</button>
					<CartSynopsis />
				</div>
			</div>
		</div>
		<nav class="nav-block hidden-s">
			<div class="container">
				<ul class="nav-list nostyle-list">
					<li>
						<button>Categories <img src="@/assets/images/chev-down.svg"/></button>
					</li>
					<li>
						<a href="#">About Us</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<a href="#" class="download-cat">Download Catalogues Here</a>
			</div>
		</nav>
	</header>
</template>

<script>
	import CartSynopsis from "@/components/CartSynopsis";

	export default {
		data() {
		  return {
		  	cartSummaryActive: false
		  }     
		},

		components: {
			CartSynopsis
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