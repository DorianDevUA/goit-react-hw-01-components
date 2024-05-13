import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ label, theme }) => {
    switch (label) {
      case '.docx':
        return theme.colors.blue;
      case '.pdf':
        return theme.colors.violet;
      case '.mp3':
        return theme.colors.red;
      case '.psd':
        return theme.colors.turquoise;
      default:
        return theme.colors.sandy;
    }
  }};
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
