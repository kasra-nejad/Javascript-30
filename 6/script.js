window.onload = function() {

  const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  const cities = [];

  fetch(url)
    .then(response => response.json())
    .then(data => cities.push(...data))

  function places(matchingWord, cities) {
    return cities.filter(place => {
      let regex = new RegExp(matchingWord, "gi")
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function display() {
    const matchArray = places(this.value, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
      return `
    <li>
     <span class="name">${cityName}</span>
     <span class="name">${stateName}</span>
    </li>
     <p class="pop">${place.population}</p>
    </br>
    `;
    }).join(' ');
    results.innerHTML = html;
  }

  const input = document.querySelector('.input');
  const results = document.querySelector('.results');

  input.addEventListener('change', display);
  input.addEventListener('keyup', display);
}
