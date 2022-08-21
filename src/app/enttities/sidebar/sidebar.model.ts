export interface SidebarItem {
  title: string,
  path: string,
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { title: 'Users', path: '/users'},
  { title: 'Tasks', path: '/tasks'}
]
