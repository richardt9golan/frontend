
const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Post',
    route: '/post',
    icon: 'cil-paper-plane',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Posts',
        to: '/post',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New',
        to: '/add',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Preview',
        to: '/preview',
      }
    ],
  }
]

export default _nav
