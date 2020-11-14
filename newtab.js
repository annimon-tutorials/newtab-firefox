;(async function() {
  if (typeof(window.time) === 'undefined') return;
  const leadZero = (v) => v < 10 ? `0${v}` : v;
  const updateTime = () => {
    const date = new Date();
    // const strDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    const strTime = leadZero(date.getHours()) + ":" + leadZero(date.getMinutes());
    window.time.textContent = `${strTime}`;
  }
  updateTime();
  setInterval(updateTime, 60*1000);
})()
