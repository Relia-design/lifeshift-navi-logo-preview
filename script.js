(() => {
  'use strict';
  const dates = document.querySelectorAll('#updated-date, .auto-updated-date');
  function updateDate() {
    const parts = new Intl.DateTimeFormat('ja-JP', {
      timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const get = type => parts.find(part => part.type === type).value;
    dates.forEach(date => {
      date.dateTime = `${get('year')}-${get('month')}-${get('day')}`;
      date.textContent = `${get('year')}.${get('month')}.${get('day')}`;
    });
  }
  updateDate();
  setInterval(updateDate, 30000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateDate();
  });


})();
