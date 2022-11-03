import {home, universe, exploration, body} from "./selectors.js"

export function homePage() {
  home.classList.add('active')
   
  universe.classList.remove('active')
  exploration.classList.remove('active')
  body.classList.remove('universe')
  body.classList.remove('exploration')
}

export function universePage() {
  universe.classList.add('active')
  body.classList.add('universe')
  
  home.classList.remove('active')
  exploration.classList.remove('active')
  body.classList.remove('exploration')
}

export function explorationPage() {
  exploration.classList.add('active')
  body.classList.add('exploration')

  home.classList.remove('active')
  universe.classList.remove('active')
  body.classList.remove('universe')
}

 
