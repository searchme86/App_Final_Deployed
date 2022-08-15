import styled from 'styled-components';

export const AlignComponents = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ mb }) => mb}px;
  background: ${({ bg }) => bg};
`;
