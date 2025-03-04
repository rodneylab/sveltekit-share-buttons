<script>
	import { browser } from '$app/environment';
	import ShareIcon from '$lib/components/Icons/Share.svelte';
	import Facebook from '$lib/components/ShareButtons/Facebook.svelte';
	import Telegram from '$lib/components/ShareButtons/Telegram.svelte';
	import Twitter from '$lib/components/ShareButtons/Twitter.svelte';
	import Whatsapp from '$lib/components/ShareButtons/Whatsapp.svelte';
	import website from '$lib/config/website';

	const { siteTitle, siteUrl } = website;

	let { slug, title } = $props();

	let webShareAPISupported = $state(browser && typeof navigator.share !== 'undefined');

	const handleWebShare = async () => {
		try {
			navigator.share({
				title,
				text: `Shared from ${siteTitle}`,
				url,
			});
		} catch {
			webShareAPISupported = false;
		}
	};
	let url = $derived(`${siteUrl}/${slug}`);
</script>

<aside class="container">
	<div class="wrapper">
		Share: <div class="buttons">
			{#if webShareAPISupported}
				<button onclick={handleWebShare}
					><span class="screen-reader-text">Share</span><ShareIcon width={48} /></button
				>
			{:else}
				<Twitter {url} {title} /><Facebook {url} /><Whatsapp {url} {title} />
				<Telegram {url} {title} />{/if}
		</div>
	</div>
</aside>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: row;
		margin-top: variables.$spacing-12;
		width: variables.$max-width-full;
	}
	.wrapper {
		display: flex;
		flex-direction: row;
		margin-left: auto;
		font-weight: variables.$font-weight-bold;
		font-size: variables.$font-size-2;
	}
	.buttons {
		margin-left: variables.$spacing-4;
	}

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
</style>
