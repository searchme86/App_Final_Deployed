import styled from 'styled-components';

export const SkeletonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const SkeletonLi = styled.li`
  width: calc((100% - 40px) / 4);
  height: 200px;
  margin: 0 10px 10px 0;
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
