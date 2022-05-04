import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const myVnode1 = h('h1', {key: 1}, '老的DOM，纯文字')

// 新虚拟DOM如果是text值，直接替换老虚拟DOM内容
// const myVnode2 = h('h1', {key: 1}, '新的DOM，纯文字')

// 新虚拟ODM是Children，判断老虚拟DOM的内容
const myVnode2 = h('ul', {key: 1}, [
  h('li', {}, '新的虚拟DOM')
])

const myVnode3 = h('ul', {}, [
  h('li', {}, '苹果'),
  h('li', {}, '香蕉'),
  h('li', {}, [
    h('div', {}, '橘子一号'),
    h('div', {}, '橘子2号')
  ])
])

console.info(myVnode1)
console.info(myVnode2)

const container = document.querySelector('div')
patch(container, myVnode1)
patch(myVnode1, myVnode2)

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  patch(myVnode2, myVnode3)
})
