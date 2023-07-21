<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

/*
	Mobile Nav
*/
	const showMobileNav = ref(false)

/*
	Click Outside to close
*/
	const navbarMenuRef = ref(null)
	const navbarBurgerRef = ref(null)

	onClickOutside(navbarMenuRef, () => {
			showMobileNav.value = false
		}, {
			ignore: [navbarBurgerRef]
		})

	
</script>

<template>
  <header id="nav-header">
    <nav
      class="navbar"
      aria-label="main navigation"
      role="navigation"
    >
			<div class="container is-max-desktop px-2">
				<div class="navbar-brand">
						<a
							@click.prevent="showMobileNav = !showMobileNav"
							:class="{ 'is-active' : showMobileNav}"
						  class="navbar-burger"
						  aria-expanded="false"
						  aria-label="menu"
						  data-target="navbarBasicExample"
						  role="button"
							ref="navbarBurgerRef"
						>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						</a>
				</div>
				<div
				  id="navbarBasicExample"
				  class="navbar-menu"
					:class="{ 'is-active' : showMobileNav}"
					ref="navbarMenuRef"
				>
					<div class="navbar-menu">
            <li><RouterLink @click="showMobileNav" class="navbar-item" active-class="is-active" :to="{name:'home'}">Leaderboard</RouterLink></li>
            <li><RouterLink @click="showMobileNav" class="navbar-item" active-class="is-active" :to="{name:'schedule'}">Schedule</RouterLink></li>
            <li><RouterLink @click="showMobileNav" class="navbar-item" active-class="is-active" :to="{name:'results'}">Results</RouterLink></li>
            <li><RouterLink @click="showMobileNav" class="navbar-item" active-class="is-active" :to="{name:'gallery'}">Gallery</RouterLink></li>
					</div>
				</div>
			</div>
    </nav>
  </header>
</template>


<style lang="scss" scoped>

#nav-header {
  position: sticky;
  top: 0;
}

.navbar {
  border-radius: 5px 5px 0 0;
  background-color: rgb(121, 210, 90) ;
}

.navbar-menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media (max-width: 1023px) {
	.navbar-menu {
	position: absolute;
	left: 0;
	width: 100%;
}
}
</style>