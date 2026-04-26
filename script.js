// Production companion JavaScript.
// Core guide logic is inline in index.html; this file adds PWA and metadata behavior.
(function () {
  const appMeta = {
    developerName: 'Your Name',
    repoUrl: 'https://github.com/your-username/git-github-hindi-masterclass'
  };

  function hydrateOwnership() {
    const developer = document.getElementById('developerName');
    const repo = document.getElementById('repoLink');

    if (developer) developer.textContent = appMeta.developerName;
    if (repo) {
      repo.href = appMeta.repoUrl;
      repo.textContent = appMeta.repoUrl;
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {
        // Local file previews can block service workers; the app still works normally.
      });
    });
  }

  hydrateOwnership();
  registerServiceWorker();
})();