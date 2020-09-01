const anime = require('animejs');
import axios from 'axios';
import Search from './modules/searchResult'
import * as searchResult from './modules/searchResult';
import {vars} from './modules/base';

const state = {}

const getResults = async () => {
 const data = vars.searchDisplay.value;
    console.log('test')

     state.search = new Search(data);
      
     await state.search.getSearch()
         console.log(state) 
      
     document.querySelector('._citys').innerHTML = '';
    searchResult.renderResults(state.search.result)

}



vars.searchSubmit.addEventListener('click', e => {
    e.preventDefault();
     getResults();
})


document.querySelector('._search').addEventListener('mouseover', function () {
        anime({
          targets: 'button',
          translateX: 250
        });
});
