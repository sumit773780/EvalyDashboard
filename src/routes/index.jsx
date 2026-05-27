import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import Coupons from '../pages/Coupons';
import Categories from '../pages/Categories';
import Transactions from '../pages/Transactions';
import Brands from '../pages/Brands';
import AddProduct from '../pages/AddProduct';
import ProductList from '../pages/ProductList';
import ManageAdmins from '../pages/ManageAdmins';
import AdminRoles from '../pages/AdminRoles';
import AdminProfile from '../pages/AdminProfile';
import NotFound from '../pages/NotFound';
import AuthLayout from '../layouts/AuthLayout';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'customers',
        element: <Customers />
      },
      {
        path: 'coupons',
        element: <Coupons />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'brands',
        element: <Brands />
      },
      {
        path: 'products/add',
        element: <AddProduct />
      },
      {
        path: 'products/list',
        element: <ProductList />
      },
      {
        path: 'admins/manage',
        element: <ManageAdmins />
      },
      {
        path: 'admins/roles',
        element: <AdminRoles />
      },
      {
        path: 'admins/profile',
        element: <AdminProfile />
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: (
      <ProtectedRoute>
        <NotFound />
      </ProtectedRoute>
    )
  }
]);
