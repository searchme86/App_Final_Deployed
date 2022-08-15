import styled, { css } from 'styled-components';

export const Page = styled.div`
  position: relative;
`;
export const PageContainer = styled.main``;

export const SectionUnit = styled.section`
  position: relative;
  width: 100%;
  padding: 30px 0 30px 0;
  background: ${({ color }) => (color ? `${color}` : '#fff ')};
`;

export const SectionLayout = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div``;

export const SectionTitle = styled.h1`
  position: relative;
  font-size: 32px;
  font-weight: bold;
  margin: 16px 0 40px 0;
  padding: 0 0 16px 0;
  transition: 0.2s;
  line-height: 1;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 24px;
    height: 3px;
    background: #f7991c;
  }
`;

export const SectionTitleDes = styled.p`
  position: absolute;
  top: 0;
  margin-left: 218px;
  font-size: 16px;
  font-weight: 400;
`;

export const SectionContent = styled.div`
  min-height: 500px;
`;

export const SectionDivier = styled.div`
  margin: 20px 0;
`;

export const AlignComponents = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ mb }) => mb}px;
  background: ${({ bg }) => bg};
`;

export const AlignList = styled.ul`
  display: flex;
`;

export const FlexAlignDiv = styled.div`
  width: calc((100% - 170px) / 2);
  ${({ fixed }) =>
    fixed &&
    css`
      position: sticky;
      top: 20px;
      height: 100%;
    `}
`;
