<script setup>

</script>

<template>
        <nav class="container">
            <ul class="nav-routes">
                <RouterLink to="#">Leaderboard</RouterLink>
                <RouterLink to="#">Schedule</RouterLink>
                <RouterLink to="#">Results</RouterLink>
                <RouterLink to="#">Gallery</RouterLink>
            </ul>
            <button class="nav-btn">
                <i class="fa-solid fa-bars"></i>
            </button>
            <button class="nav-btn nav-close-btn">
                <i class="fa-solid fa-x"></i>
            </button>
        </nav>
</template>



<style lang="scss" scoped>


    nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 15px 10px;
        // border-radius: .25em .25em 0 0;
        border-radius: 10px 10px 0 0;
        background-color: #f1f1f1;
        margin-top: 0;

        ul {
            display: none;

            a {
                text-decoration: none;
                color: inherit;
            }
            
           
        }

       

        i {
                font-size: 1.4em;
                cursor: pointer;
            }

    }

    @media only screen and (min-width: 600px) {
            
        ul {
                display: flex;    
                justify-content: space-evenly;
                list-style: none;
                gap: 12px;
                font-size: 1em;
                width: 100%;
            }
        i {
            display: none;
        }
    }
</style>