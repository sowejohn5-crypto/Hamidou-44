const routes = {
  home: '<h2>Home</h2><p>Welcome to Janneh PWA</p>',
  quran: '<h2>Qur'an</h2><p>Sample Surahs with Arabic, transliteration, and translation.</p>',
  prayer: '<h2>Prayer Times</h2><p>Sample daily prayer schedule.</p>',
  reciters: '<h2>Reciters</h2><p>10+ sample reciters audio placeholders.</p>',
  hadith: '<h2>Hadith</h2><p>Sample Hadith library entries.</p>',
  nasheed: '<h2>Nasheed</h2><p>Sample Nasheed audio placeholders.</p>',
  tracker: '<h2>Trackers</h2><p>Prayer tracker, Tasbeeh counter, and progress tracker placeholders.</p>',
  books: '<h2>Books</h2><p>Sample Islamic books with translation + transliteration.</p>',
  comparative: '<h2>Comparative Religion</h2><p>Sample Qur'an + Bible comparisons.</p>'
};

function renderPage() {
  const hash = location.hash.replace('#', '') || 'home';
  const content = routes[hash] || '<h2>404</h2><p>Page not found</p>';
  document.getElementById('page-content').innerHTML = content;
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', () => {
  renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registered'))
      .catch(err => console.error('SW registration failed', err));
  }
});
