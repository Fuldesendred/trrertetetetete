import initSlider from './modules/_slider.js'
import A11yDialog from 'a11y-dialog'

const init = () => {
    initSlider()
}

init()

const container = document.querySelector('#dialog-window')
const dialog = new A11yDialog(container)