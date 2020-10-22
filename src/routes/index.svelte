<script>
	console.log('home');
	
</script>

<style>
	h1, p{
		text-align:center;
		margin: 0 auto;

	}
	h1{
		font-size: 2rem;
		text-transform: uppercase;
		font-weight:500;
		margin: 0 0 0.5rem 0;
	}
	img{
		width:400px;
		margin:20px auto;
		display: block;
	}
	a{
		margin-top: 40px;;
	}
	div{
		margin-top:60px;
		text-align: center;

	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Job Creation</title>
</svelte:head>

<div>
	<img src='headimg.jpg' alt='workingimage'>
	<h1>
		Jobs for Everyone
	</h1>
	<p>Find your next job right here</p>
	<a href='jobs' class='btn'> View Jobs </a>
</div>
