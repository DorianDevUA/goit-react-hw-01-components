import PropTypes from 'prop-types';
import { Transaction } from '../Transaction';
import { TableHead } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <TableHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
