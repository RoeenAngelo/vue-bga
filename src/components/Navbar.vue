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
            
            <i class="fa-solid fa-bars"></i>

        </nav>
</template>



<style lang="scss" scoped>


    nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 25px 16px;
        border-top-left-radius: 0.25em;
		border-top-right-radius: 0.25em;
        background-color: #f1f1f1;
        border-top-left-radius: 0.25em;
        border-top-right-radius: 0.25em;

        

        ul {
            display: none;


            
            a {
                text-decoration: none;
                color: inherit;
            }
            
           
        }

       

        i {
                font-size: 2em;
                cursor: pointer;
            }

        // background-color: #ffffff;
		// color: #636363;
		// position: absolute;
		// background-color: #f7f7f7;
		// border-top-left-radius: 0.25em;
		// border-top-right-radius: 0.25em;
		// cursor: default;
		// text-align: center;
		// margin: 0;
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
    }
</style>