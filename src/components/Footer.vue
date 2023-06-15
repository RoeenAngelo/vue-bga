<script setup>

</script>
<template>
    <footer id="footer">
        <!-- <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul class="actions">
                <li><a href="generic.html" class="button">Learn More</a></li>
            </ul>
        </section> -->
        <section>
            <!-- <h2>Contacts</h2>
            <dl class="alt">
                <dt>Address</dt>
                <dd>1234 Somewhere Road &bull; , CA 00000 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>000-000-0000</dd>
                <dt>Email</dt>
                <dd><a href="#">information@web.com</a></dd>
            </dl> -->
            <ul class="icons">
                <!-- <li><a href="#" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a></li> -->
                <li><a href="https://www.instagram.com/bgatourgolf/?next=%2Fbgatourgolf%2F" target="_blank"><span class="label"><i class="fa-brands fa-instagram"></i></span></a></li>
                <!-- <li><a href="#" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li> -->
                <!-- <li><a href="#" class="icon brands fa-dribbble alt"><span class="label">Dribbble</span></a></li> -->
            </ul>
        </section>
        <p class="copyright">&copy; Roeen Angelo</p>
    </footer>
</template>


<style lang="scss" scoped>
#footer {
    flex-wrap: wrap;
    padding: 5em 5em 3em 5em ;
    width: calc(100% + 2em);
    margin: 0 0 3em -2em;


    > * {
        width: calc(50% - 2em);
        margin-left: 2em;
    }

    .copyright {
        width: 100%;
        margin: 2.5em 0 2em 0;
        font-size: 0.8em;
        text-align: center;
    }
}

.icons, i {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li {
			display: inline-block;
			padding: 0 0.65em 0 0;
		}

			ul.icons li:last-child {
				padding-right: 0 !important;
			}
</style>