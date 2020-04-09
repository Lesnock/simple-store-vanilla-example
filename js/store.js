import createStore from '@lesnock/simple-store'

// localStorage
const store = createStore({
    persist: true,
})

// Add initial data
!store.has('inputValue') && store.add('inputValue', '123')
!store.has('inputColor') && store.add('inputColor', '#FFF')

export default store