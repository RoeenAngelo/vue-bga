<script setup>
import SignIn from './SignIn.vue';


</script>


<template>
	<header id="header-container">
		<SignIn />
		<img src="@/assets/images/BGA-logo.jpg" alt="" /> 
		<!-- <span class="logo"><img src="@/assets/BGA-logo.jpg" alt="" /></span>    -->
	</header>
</template>



<style lang="scss" scoped>
	header {
		display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
		text-align: center;
		background-color: black;
		margin-bottom: 30px;

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