<script setup>

</script>


<template>
	<header id="header-container">
		<img src="@/assets/BGA-logo.jpg" alt="" /> 
		<!-- <span class="logo"><img src="@/assets/BGA-logo.jpg" alt="" /></span>    -->
	</header>
</template>



<style lang="scss" scoped>
	header {
		padding: 5em 5em 1em 5em ;
		text-align: center;
		background-color: black;

		img {
			margin: 0 auto;
			max-width: 160px;
		};
	}

	@media only screen and (min-width: 500px) {
		header {
			img {
					max-width: 50%;
		};
	}
	
	}

</style>