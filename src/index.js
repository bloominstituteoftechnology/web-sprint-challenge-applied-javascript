// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
import { cardAppender } from './components/card'
import { tabsAppender } from './components/tabs'
import { headerAppender } from './components/header'

headerAppender('.header-container')
tabsAppender('.tabs-container')
cardAppender('.cards-container')

console.log('Lambda Times loaded!')
axios.get('http://localhost:5000/api/topics')
  .then((resp)=>{
    console.log(resp['topics']);
  })
  .catch(err =>{console.log(err)});