import { isElementNode } from './utils.js'

export class Compile {
  constructor(el, vm) {
    this.$el = isElementNode(el) ? el : document.querySelector(el)
    this.$vm = vm

    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.init()
      this.$el.appendChild(this.$fragment)
    }
  }

  node2Fragment(el) {
    let fragment = document.createDocumentFragment(),
        child

    // 将原生节点拷贝到fragment
    while (child = el.firstChild) {
      fragment.appendChild(child)
    }

    return fragment
  }

  init() {
    this.compile(this.$fragment)
  }

  compile(el) {
    let str = el.textContent.replace(/\{\{(.*)\}\}/, '$1')
    el.textContent = this.$vm[str]
  }
}