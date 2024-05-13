import styled from 'styled-components';

export const TableHead = styled.tr`
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;

  th {
    width: 200px;
    padding: ${({ theme }) => theme.spacing(2)};
    text-transform: uppercase;
  }

  th:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
