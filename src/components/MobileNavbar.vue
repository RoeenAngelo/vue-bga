<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { id: 1, text: 'Home', link: '#' },
        { id: 2, text: 'About', link: '#' },
        { id: 3, text: 'Services', link: '#' },
        { id: 4, text: 'Contact', link: '#' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>


<template>
  <div class="navbar">
    <div class="navbar-menu" :class="{ 'active': isMenuOpen }">
      <ul class="navbar-nav">
        <li v-for="item in menuItems" :key="item.id" class="navbar-item">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </div>
    <div class="navbar-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>


<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
}


.navbar-menu {
  display: flex;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 15px;
}

.navbar-item {
  margin-left: 20px;
}

.navbar-item a {
  color: #fff;
  text-decoration: none;
}

.navbar-toggle {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
}

.navbar-toggle span {
  background-color: #fff;
  display: block;
  height: 3px;
  transition: background-color 0.3s ease;
}

.active .navbar-toggle span:first-child {
  transform: rotate(45deg) translate(2px, 2px);
}

.active .navbar-toggle span:nth-child(2) {
  opacity: 0;
}

.active .navbar-toggle span:last-child {
  transform: rotate(-45deg) translate(2px, -2px);
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .navbar-toggle {
    display: flex;
  }

  .active .navbar-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    padding: 10px;
    width: 100%;
  }

  .active .navbar-item {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>
