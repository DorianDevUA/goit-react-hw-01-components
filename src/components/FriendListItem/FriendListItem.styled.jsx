import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 280px;
  gap: 10px;
  background-color: #fff;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.black};
`;

export const Online = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${({ theme, $isOnline }) =>
    $isOnline ? theme.colors.green : theme.colors.red};
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
