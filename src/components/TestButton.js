import Vue from 'vue'

// 1 way to create a component
const TestButton = Vue.component('Btn_clickMe', {
  render(createElement) {
    return createElement('button', this.$slots.default)
  },
})

// 2 way to create a component
// const TestButton = Vue.component('Btn_clickMe', {
//   template: '<button>Click me</button>',
// })

export default TestButton
