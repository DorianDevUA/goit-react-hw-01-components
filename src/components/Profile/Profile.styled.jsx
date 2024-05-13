import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid lightslategrey;
  border-radius: 4px;
  overflow: hidden;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(10)};
`;

export const Avatar = styled.img`
  max-width: 150px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: ${({ theme }) => theme.spacing(7)};
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid lightslategrey;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  &:not(:last-child) {
    border-right: 1px solid lightslategrey;
  }
`;

export const StatCounter = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;
