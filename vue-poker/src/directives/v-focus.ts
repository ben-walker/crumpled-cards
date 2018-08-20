import { DirectiveOptions } from 'vue'

const vFocus: DirectiveOptions = {
  inserted(el) {
    if (el.tagName === 'INPUT') {
      el.focus()
    } else {
      const input = el.querySelector('input')
      if (input) input.focus()
    }
  }
}

export default vFocus
