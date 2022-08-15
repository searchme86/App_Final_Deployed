import styled from 'styled-components';

export const PFormDesWrapper = styled.div`
  margin-bottom: 5px;
  margin-top: -8px;
`;

export const PForm = styled.form`
  display: ${({ display }) => display};
  width: 100%;
  position: relative;
  justify-content: space-between;
`;

export const PFormContent = styled.div`
  position: relative;
  padding: ${({ padding }) => padding};
  margin-right: ${({ mr }) => mr};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const PFormUnit = styled.div`
  margin: 0 0 25px 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PFormList = styled.ul``;

export const PFormDesList = styled.ul``;

export const PFormDesLi = styled.li``;

export const PFormLi = styled.li`
  width: 100%;
  display: flex;
`;

export const PFormDes = styled.p`
  font-size: 12px;
  color: #767676;
`;

export const FormEnclose = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const RegisterInput = styled.div`
  width: 100%;
  margin-bottom: ${({ mb }) => mb};
`;

export const PFormBundle = styled.div`
  width: 60%;
  margin: 0 30px 0 0;
`;

export const PFormBlockTitle = styled.p`
  margin: 12px 0 0 0;
  font-size: 18px;
  font-weight: bold;
`;

export const PFormBlockTitleDes = styled.span`
  display: inline-block;
  margin: 0 0 0 5px;
  font-size: 12px;
  color: #767676;
  line-height: 1;
`;

export const PFormLiItem = styled.div`
  display: flex;
  width: 100%;
`;

export const PFormBlock = styled.div`
  margin-top: 10px;
  border-top: 1px dotted #000;
`;

export const PButtonArea = styled.div`
  display: flex;
`;

export const PButtonList = styled.ul`
  display: flex;
  margin: 0 0 0 auto;
`;

export const PButtonLi = styled.li`
  margin: 0 0 0 20px;
  &:first-child {
    margin-left: 0;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
`;
