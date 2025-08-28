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
  {
    id: '2',
    title: 'Calendar',
    index: '2-1',
    icon: 'Calendar',
    children: [
      {
        id: '21',
        pid: '3',
        index: '/form',
        title: 'form',
      },
      {
        id: '22',
        pid: '3',
        index: '/upload',
        title: 'upload',
      },
      {
        id: '23',
        pid: '2',
        index: '/carousel',
        title: 'carousel',
      },
      {
        id: '24',
        pid: '2',
        index: '/calendar',
        title: 'calendar',
      },
      {
        id: '25',
        pid: '2',
        index: '/watermark',
        title: 'watermark',
      },
      {
        id: '26',
        pid: '2',
        index: '/tour',
        title: 'tour',
      },
      {
        id: '27',
        pid: '2',
        index: '/steps',
        title: 'steps',
      },
      {
        id: '28',
        pid: '2',
        index: '/statistic',
        title: 'statistic',
      },
      {
        id: '29',
        pid: '3',
        index: '29',
        title: 'Menu',
        children: [
          {
            id: '291',
            pid: '29',
            index: '/editor',
            title: 'editor',
          },
          {
            id: '292',
            pid: '29',
            index: '/markdown',
            title: 'markdown',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Calendar',
    index: '3',
    icon: 'Calendar',
    children: [
      {
        id: '31',
        pid: '3',
        index: '/table',
        title: 'table',
      },
      {
        id: '32',
        pid: '3',
        index: '/table-editor',
        title: 'table-editor',
      },
      {
        id: '33',
        pid: '3',
        index: '/import',
        title: 'import',
      },
      {
        id: '34',
        pid: '3',
        index: '/export',
        title: 'export',
      },
    ],
  },
  {
    id: '4',
    icon: 'PieChart',
    index: '4',
    title: 'PieChart',
    children: [
      {
        id: '41',
        pid: '4',
        index: '/s-chart',
        title: 's-chart',
      },
      {
        id: '42',
        pid: '4',
        index: '/e-chart',
        title: 'e-chart',
      },
    ],
  },
  {
    id: '5',
    icon: 'Guide',
    index: '/icon',
    title: 'icon',
  },
  {
    id: '7',
    icon: 'Brush',
    index: '/theme',
    title: 'theme',
  },
  {
    id: '6',
    icon: 'DocumentAdd',
    index: '6',
    title: 'Add',
    children: [
      {
        id: '61',
        pid: '6',
        index: '/ucenter',
        title: 'ucenter',
      },
      {
        id: '62',
        pid: '6',
        index: '/login',
        title: 'login',
      },
      {
        id: '63',
        pid: '6',
        index: '/register',
        title: 'register',
      },
      {
        id: '64',
        pid: '6',
        index: '/reset-pwd',
        title: 'reset-pwd',
      },
      {
        id: '65',
        pid: '6',
        index: '/403',
        title: '403',
      },
      {
        id: '66',
        pid: '6',
        index: '/404',
        title: '404',
      },
    ],
  },
]
