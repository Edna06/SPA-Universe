import { homePage, explorationPage, universePage} from './navegation.js'
import { home, exploration, universe} from './selectors.js'
import { Router } from './routes.js'

const router = new Router()

router.add('/home', './pages/home.html')
router.add('/theUniverse', './pages/theUniverse.html')
router.add('/exploration', './pages/exploration.html')
router.add('404', './pages/error404.html')


router.handle()

home.addEventListener('click', () => {
  homePage(), 
  router.route()
})
exploration.addEventListener('click', () => {
  explorationPage(), 
  router.route()
})
universe.addEventListener('click', () => {
  universePage(), 
  router.route()
})

window.onpopstate = () => router.handle()

window.route() = () => router.route()

