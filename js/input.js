import store from './store'

const input = document.querySelector('.input')

input.value = store.get('inputValue') || null
input.style.background = store.get('inputColor') || '#FFF'

input.addEventListener('input', event => {
    store.update('inputValue', event.target.value)
})

store.listen('inputColor', color => {
    input.style.background = color
})