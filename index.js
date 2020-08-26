const weatherData = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/'
let city = []
let woeids = []
let temps = []


document.querySelector('._search').addEventListener('click', function () {
     let state = document.querySelector('._data').value;
     fetch(`https://www.metaweather.com/api/location/search/?query=${state}`)
    .then(result => {
        console.log(result)
        return result.json();
    })
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
        console.log(data[i].title)
        console.log(data[i].woeid)
        city.push(data[i].title)
        woeids.push(data[i].woeid)
        document.querySelector('._citys').insertAdjacentHTML('beforeend', '<li>' + data[i].title + '</li>')
     
    }
    
    })
    console.log(woeids)
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/`+ woeids[0] + '/')
    .then(datas => {
      console.log(datas);
      return datas.json();
    }) 
    .then(extract => {
        console.log(extract.consolidated_weather)
        for (let i = 0; i < extract.consolidated_weather.length; i++) {
            console.log(extract.consolidated_weather[i])
            temps.push(extract.consolidated_weather[i].the_temp);
            console.log(temps)
        
        }
document.querySelector('._temp').innerHTML = Math.floor(temps[0])
document.querySelector('._weather').innerHTML = city[0]

   temps = []
   woeids = []
   city = []
    })
    .catch(err => {
        console.log(err)
        document.querySelector('._weather').innerHTML = err;
    });



}); 



//Animations.


document.querySelector('._search').addEventListener('mouseover', function () {
    console.log('clicked')
    anime({
        targets: '._search',
        translateX: 5,
        scale: 3,
        rotate: '1turn'
      });
  });


  document.querySelector('._search').addEventListener('mouseleave', function () {
    console.log('clicked')
    anime({
        targets: '._search',
        translateX: 5,
        scale: 1,
        rotate: '1turn'
      });
  });


