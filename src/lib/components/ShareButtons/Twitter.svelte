<script>
	import TwitterIcon from '$lib/components/Icons/Twitter.svelte';

	let {
		hashtags = [], // array of hashtags exclude '#' e.g. ['svelte', 'askRodney']
		quote = undefined,
		related = [], // array of Twitter users (including '@')
		title, // text in Tweet
		url,
		via = '',
	} = $props(); // include '@' e.g. '@askRodney'

	const TWITTER_BLUE = '#00aced';

	const baseUrl = 'https://twitter.com/share';
	const parametersObject = {
		url,
		...(hashtags.length > 0 ? { hashtags: hashtags.join(',') } : {}),
		quote,
		text: title,
		...(related.length > 0 ? { related: related.join(',') } : {}),
		...(via.length > 0 ? { via: via.slice(1) } : {}),
	};

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
	><span class="screen-reader-text">Share on Twitter</span><TwitterIcon
		colour={TWITTER_BLUE}
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
