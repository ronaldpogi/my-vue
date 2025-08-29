import type { Menus } from '@/types/menu'

export const menuData: Menus[] = [
  {
    id: '0',
    title: 'Dashboard',
    index: '/dashboard',
    icon: 'Odometer',
  },
  {
    id: '1',
    title: 'Home',
    index: '1',
    icon: 'HomeFilled',
    children: [
      {
        id: '11',
        pid: '1',
        index: '/users',
        title: 'users',
      },
      {
        id: '12',
        pid: '1',
        index: '/system-role',
        title: 'Role',
      },
      {
        id: '13',
        pid: '1',
        index: '/system-menu',
        title: 'System',
      },
    ],
  },
]
