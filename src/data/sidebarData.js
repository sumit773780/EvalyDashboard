import { 
  MdOutlineDashboard, 
  MdOutlineShoppingCart, 
  MdOutlinePeople, 
  MdOutlineLocalOffer, 
  MdOutlineCategory, 
  MdOutlineReceiptLong, 
  MdOutlineStorefront,
  MdOutlineAddCircleOutline,
  MdOutlineFormatListBulleted,
  MdOutlineAdminPanelSettings,
  MdOutlineManageAccounts,
  MdOutlinePersonOutline
} from 'react-icons/md';

export const sidebarData = [
  {
    section: 'MAIN MENU',
    items: [
      {
        title: 'Dashboard',
        path: '/',
        icon: MdOutlineDashboard
      },
      {
        title: 'Order Management',
        path: '/orders',
        icon: MdOutlineShoppingCart
      },
      {
        title: 'Customers',
        path: '/customers',
        icon: MdOutlinePeople
      },
      {
        title: 'Coupon Code',
        path: '/coupons',
        icon: MdOutlineLocalOffer
      },
      {
        title: 'Categories',
        path: '/categories',
        icon: MdOutlineCategory
      },
      {
        title: 'Transaction',
        path: '/transactions',
        icon: MdOutlineReceiptLong
      },
      {
        title: 'Brand',
        path: '/brands',
        icon: MdOutlineStorefront
      }
    ]
  },
  {
    section: 'PRODUCTS',
    items: [
      {
        title: 'Add Products',
        path: '/products/add',
        icon: MdOutlineAddCircleOutline
      },
      {
        title: 'Product List',
        path: '/products/list',
        icon: MdOutlineFormatListBulleted
      }
    ]
  },
  {
    section: 'ADMIN',
    items: [
      {
        title: 'Manage Admins',
        path: '/admins/manage',
        icon: MdOutlineAdminPanelSettings
      },
      {
        title: 'Admin Roles',
        path: '/admins/roles',
        icon: MdOutlineManageAccounts
      },
      {
        title: 'Admin Profile',
        path: '/admins/profile',
        icon: MdOutlinePersonOutline
      }
    ]
  }
];
