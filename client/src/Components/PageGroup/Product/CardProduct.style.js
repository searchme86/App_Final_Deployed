import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PCardItem = styled.li`
  width: calc((100% - 90px) / 3);
  min-height: 460px;
  margin: 0 30px 40px 0px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const PCardIspace = styled.span`
  display: inline-block;
  padding: 0;
  padding-top: 56.25%;
`;

export const PCardCategory = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  background: #f4976c;
  border-radius: 10px;
  padding: 7px 16px;
  margin: 0 0 5px 0;
  font-size: 15px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  word-break: keep-all;
`;

export const PCardPrice = styled.strong`
  display: block;
  margin: 0 0 0 auto;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  text-align: right;
  white-space: nowrap;
  word-break: keep-all;
`;

export const PCardTags = styled.ul`
  height: 75px;
  overflow-y: auto;
  margin: 10px 0 0 0;
  padding: 5px;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const PCardTag = styled.li`
  display: inline-block;
  border: 1px solid #3072ab;
  border-radius: 15px;
  margin: 0 5px 10px 0;
`;

export const PCardTagText = styled.span`
  font-size: 15px;
  padding: 10px;
  box-sizing: border-box;
`;

export const PCardTitlePriceWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
  margin: 15px 0 15px 0;
  box-sizing: border-box;
`;

export const PCardTitle = styled.strong`
  display: block;
`;

export const PCardTitleLink = styled(Link)`
  display: block;
  width: 200px;
  font-size: 23px;
  line-height: 1;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PCardDes = styled.p`
  color: #222;
  font-size: 15px;
  margin: 0 0 5px 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PcardIconBox = styled.div`
  position: absolute;
  top: 18px;
  right: 5px;
  display: flex;
  margin: 0 0 0 auto;
`;

export const PcardIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
`;

export const PCardDgree = styled.strong`
  font-size: 15px;
`;

export const PCardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0 0;
`;

export const PUserImage = styled.div`
  width: 65px;
`;

export const PUserInfo = styled.div`
  width: calc(100% - 88px);
`;

export const PUserNickname = styled.strong`
  display: block;
  font-size: 18px;
`;
export const PUserAddress = styled.p`
  font-size: 15px;
`;

export const RelatedImage = styled.div``;

export const RelatedHref = styled(Link)``;

export const RelatedInfo = styled.div`
  position: relative;
  padding: 15px 0 0 0;
  box-sizing: border-box;
`;
