/* eslint-disable */
import ButtonComponent from './components/ButtonComponent.vue'
import OtherButtonComponent from './components/OtherButtonComponent.vue'

// Exportación de los componentes individualmente
export { ButtonComponent, OtherButtonComponent}

// Instalación de la librería como un plugin
export function install(Vue) {
  Vue.component('ButtonComponent', ButtonComponent)
  Vue.component('OtherButtonComponent', OtherButtonComponent)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install });
}

// Exportación de la librería como plugin
export default { install: install }