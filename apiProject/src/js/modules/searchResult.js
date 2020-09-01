import axios from "axios"
import {vars} from './base'

export default class Search {
 constructor(query) {
     this.query = query
 }
 async getSearch () {
     try {
         const res = await axios(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.query}`)
         this.result = res
         console.log(res)
        } catch (err) {
            alert(err);
        } 
 }
}

const searchRender = (weatherData) => {
    const markup = `<div class = 'border'> <li>${weatherData.title}</li> </div>`
   document.querySelector('._citys').insertAdjacentHTML('beforeend', markup)
  console.log('pass')
}

export const renderResults = recipe => {
    for (let i = 0; i < recipe.data.length; i++) {
           searchRender(recipe.data[i])
    }
}

export const getInput = () => {
 vars.searchDisplay.value;
}