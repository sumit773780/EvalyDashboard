import React from 'react';
import { Table } from 'react-bootstrap';
import { lastTransactions } from '../../data/transactions';

const TransactionsTable = () => {
  return (
    <div className="premium-card">
      <div className="card-header-custom align-items-center mb-3">
        <div>
          <h5 className="card-title-custom">Last Transactions</h5>
        </div>
        <a href="/transactions" className="text-primary text-decoration-none fw-bold text-fs-82">
          View All
        </a>
      </div>

      <div className="table-responsive">
        <Table className="table-custom" hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Issued Date</th>
              <th>Total</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lastTransactions.map((tx, id) => (
              <tr key={id}>
                <td className="text-primary fw-bold">#{tx.id}</td>
                <td className="text-secondary">{tx.date}</td>
                <td className="fw-semibold text-dark">{tx.total}</td>
                <td className="text-end">
                  <a href={`/transactions/detail/${tx.id}`} className="text-primary text-decoration-none fw-semibold">
                    View Detail
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionsTable;
