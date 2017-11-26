window.onload = () => {
  const seconds = document.querySelector('.seconds');
  const minutes = document.querySelector('.minutes');
  const hours = document.querySelector('.hours');

  function getDate() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();
    
    const secDeg = ((sec / 60) * 360) + 90;
    seconds.style.transform = `rotate(${secDeg}deg)`

    const minDeg = ((min / 60) * 360) + 90;
    minutes.style.transform = `rotate(${minDeg}deg)`

    const hourDeg = ((hour / 12) * 360) + 90;
    hours.style.transform = `rotate(${hourDeg}deg)`

  }

  setInterval(getDate, 1000);

}
