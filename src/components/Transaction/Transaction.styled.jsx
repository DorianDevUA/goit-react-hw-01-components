import styled from "styled-components";

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
  }
`;

export const TableCell = styled.td`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.grey};

  &::first-letter {
    text-transform: uppercase;
  }
  &:first-child {
    text-align: left;
    padding-left: 50px;
  }
`;
