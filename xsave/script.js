document.querySelector('#share').addEventListener('click', async () => {
  const url = 'https://emanuele.click/xsave/';
  const status = document.querySelector('#share-status');
  try {
    if (navigator.share) {
      await navigator.share({ title: 'xSave — Save videos from X. In one click.', text: 'Save X videos right from your feed. Free for Chrome.', url });
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      status.textContent = 'Link copied. Ready to share.';
    } else {
      status.textContent = 'Share this link: ' + url;
    }
  } catch (error) {
    if (error.name !== 'AbortError') status.textContent = 'Share this link: ' + url;
  }
});
