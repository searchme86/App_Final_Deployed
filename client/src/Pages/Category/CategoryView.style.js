import styled from 'styled-components';
import { BasicLi } from '../../Assets/Styles/Basic.style';
import { BasicStrong } from '../../Assets/Styles/Text.style';

export const CategoryItem = styled(BasicLi)`
  width: 200px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  border-radius: 14px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

export const CategoryTitle = styled(BasicStrong)`
  text-align: center;
  color: #424242;
  font-size: 19px;
`;

export const FunctionList = styled.li`
  flex: 1;
  cursor: pointer;
`;

export const ListContainer = styled.ul`
  display: ${({ display }) => display};
`;

export const ContentDivider = styled.div`
  padding: 10px;
`;

export const AlignComponents = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ mb }) => mb}px;
  background: ${({ bg }) => bg};
  padding: 0 0 30px 0;
`;

export const AlignList = styled.ul`
  display: flex;
`;
