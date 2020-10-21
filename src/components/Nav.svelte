<script>
	export let segment;
</script>

<style>
	nav{
		background:#e3dfde;
	}
	nav > div {
		max-width: 960px;
		padding:0 10px;
		margin: 0 auto;
		display:grid;
		grid-template-columns:  1fr 1fr;
		align-items: center;;
	}
	h1{
		margin-top: 10px;
		font-size:22px;
		font-weight: 600;
		letter-spacing: 4px;;
	}
	ul{
		padding: 0;
		margin: 0;
		text-align:right;
	}
	li{
		display:inline-block;
		margin-left: 10px;;
	}
	a{
		text-decoration: none;
		padding:1em 0 0.5em;
		display:block;
	}

	a.current {
		border-bottom:3px solid #000000;
	}
	
</style>

<nav>
	<div>
		<h1>Create Job</h1>
		<ul>
			<li><a class:current={segment === undefined} href=".">home</a></li>
			<li><a class:current={segment === 'about'} href="about">about</a></li>
			<li><a class:current={segment === 'contact'} href="contact">contact</a></li>
			<li><a rel=prefetch class:current={segment === 'jobs'} href="jobs">jobs</a></li>
		</ul>
	</div>
</nav>
