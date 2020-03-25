import store from './store'

const square = document.querySelector('.square')
square.innerHTML = store.get('inputValue') || null

store.listen('inputValue', (value, oldValue) => {
    square.innerHTML = value
})

square.addEventListener('click', event => {
    store.update('inputColor', '#CCC')
})