<script>
  import { browser } from '$app/env';
  import WhatsappIcon from '$lib/components/Icons/Whatsapp.svelte';
  import { isMobileOrTablet } from '$lib/utilities/device';

  const WHATSAPP_GREEN = '#25D366';

  export let url;
  export let title;

  const baseUrl =
    browser && isMobileOrTablet()
      ? 'https://api.whatsapp.com/send'
      : 'https://web.whatsapp.com/send';
  const parametersObject = {
    text: title ? title + ' ' + url : url,
  };

  const params = Object.entries(parametersObject)
    .filter(([, value]) => value ?? false)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');

  const urlWithParameters = params === '' ? baseUrl : `${baseUrl}?${params}`;

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

<button on:click={handleClick}
  ><span class="screen-reader-text">Share on Whatsapp</span><WhatsappIcon
    colour={WHATSAPP_GREEN}
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

  @media screen and (max-width: $desktop-breakpoint) {
    button {
      padding-left: $spacing-2;
      padding-right: $spacing-2;
    }
  }
</style>
