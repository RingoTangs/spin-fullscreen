import type { VNode, Plugin as VuePlugin } from 'vue'
import { defineComponent, render, shallowRef } from 'vue'
import DotSpinner from './DotSpinner'

const domId = 'rt-spin-fullscreen'
const showclass = 'rt-loading-fullscreen-show'
const classnames = {
  container: 'rt-spin-container',
  tips: 'rt-spin-tips',
  indicator: 'rt-spin-indicator',
}

const dom = document.createElement('div')
dom.id = domId

const indicatorSRef = shallowRef<VNode | null>(null)
const tipSRef = shallowRef<VNode | null>(null)
const classnameSRef = shallowRef(classnames)

const SpinFullScreen = defineComponent({
  name: 'SpinFullScreen',
  setup() {
    return () => (
      <div class={classnameSRef.value.container}>
        <div class={classnameSRef.value.indicator}>{indicatorSRef.value}</div>
        <div class={classnameSRef.value.tips}>{tipSRef.value}</div>
      </div>
    )
  },
})

const vuePlugin: VuePlugin<{
  indicator?: VNode
  tip?: VNode
  containerClass?: string
  indicatorClass?: string
  tipClass?: string
}> = (_, options) => {
  const { indicator, tip, containerClass = '', indicatorClass = '', tipClass = '' } = options || {}
  indicatorSRef.value = indicator || <DotSpinner />
  tipSRef.value = tip || <span>Loading...</span>

  classnameSRef.value = {
    container: `${classnames.container} ${containerClass}`,
    indicator: `${classnames.indicator} ${indicatorClass}}`,
    tips: `${classnames.tips} ${tipClass}}`,
  }

  document.body.appendChild(dom)
  render(<SpinFullScreen />, dom)
}
const show = () => {
  if (!dom.classList.contains(showclass)) {
    dom.classList.add(showclass)
  }
}

const hide = () => {
  if (dom.classList.contains(showclass)) {
    dom.classList.remove(showclass)
  }
}

const SpinFullScreenVue = {
  show,
  hide,
  install: vuePlugin,
}

export default SpinFullScreenVue
