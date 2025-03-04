<script>
	import FacebookIcon from '$lib/components/Icons/Facebook.svelte';
	let { hashtag = '', quote = '', url } = $props();

	const FACEBOOK_BLUE = '#3b5998';

	const baseUrl = 'https://www.facebook.com/sharer/sharer.php';
	const parametersObject = $derived({
		u: url,
		...(quote !== '' ? { quote } : {}),
		...(hashtag !== '' ? { hashtag } : {}),
	});

	const params = $derived(
		Object.entries(parametersObject)
			.filter(([, value]) => value ?? false)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
			.join('&'),
	);

	const urlWithParameters = $derived(params === '' ? baseUrl : `${baseUrl}?${params}`);

	function handleClick() {
		const config = {
			height: 550,
			width: 400,
			location: 'no',
			toolbar: 'no',
			status: 'no',
			directories: 'no',
			menubar: 'no',
			scrollbars: 'yes',
			resizable: 'no',
			centerscreen: 'yes',
			chrome: 'yes',
		};
		return window.open(
			urlWithParameters,
			'',
			Object.keys(config)
				.map((key) => `${key}=${config[key]}`)
				.join(','),
		);
	}
</script>

<button onclick={handleClick}
	><span class="screen-reader-text">Share on Facebook</span><FacebookIcon
		colour={FACEBOOK_BLUE}
		width={48}
	/></button
>

<style lang="scss">
	button {
		background: transparent;
		border-style: none;
		transition: all 0.2s ease-in-out;
	}

	@media (prefers-reduced-motion: reduce) {
		button {
			transition: all 2s ease-in-out;
		}
	}

	button:focus,
	button:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: variables.$desktop-breakpoint) {
		button {
			padding-left: variables.$spacing-2;
			padding-right: variables.$spacing-2;
		}
	}
</style>
