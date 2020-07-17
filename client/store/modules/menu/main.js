import lazyLoading from './lazyLoading'
const base = '/cwcc-tsa-prod/main'

export default {
  name: 'Main',
  meta: {
    icon: 'folder',
    iconExpanded: 'folder-open',
    expanded: true
  },
  children: [
    {
      name: 'Home',
      path: base + '/home',
      meta: {
        icon: 'home',
        description: 'Home'
      },
      component: lazyLoading('main/home')
    }
  ]
}
