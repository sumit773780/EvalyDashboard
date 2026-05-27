import React from 'react';
import { Card, Table, Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getResolvedRecentOrders } from '../../data/orders';
import './../../assets/css/RecentOrders.css';

const RecentOrders = () => {

  const orders = getResolvedRecentOrders();

  return (
    <Card className="recent-orders-card border-0 shadow-sm">
      <Card.Body>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="recent-orders-title">
            Recent Orders
          </h4>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              className="recent-order-dropdown border-0"
            >
              <BsThreeDotsVertical />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>View</Dropdown.Item>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* Table */}
        <div className="table-responsive">
          <Table borderless className="align-middle recent-orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>CUSTOMER</th>
                <th>STATUS</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="order-id">
                    #{order.id}
                  </td>
                  <td>{order.customer}</td>
                  <td>
                    <span
                      className={
                        order.status === 'Completed'
                          ? 'status-completed'
                          : 'status-pending'
                      }
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="order-total">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecentOrders;