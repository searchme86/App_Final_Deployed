import React from 'react';
import {
  SectionContent,
  SectionLayout,
  SectionUnit,
} from '../../Config/Layout/Layout.style';
import { OffScreenTitle } from '../../Assets/Styles/Common.style';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import UserEdit from './UserEdit';
import ProductOfUser from '../Product/ProductOfUser';

function UserMain() {
  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>유저 페이지</OffScreenTitle>
        <SectionContent>
          <div className="" style={{ borderRadius: 6, border: '1px solid ' }}>
            <div className="">
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>비밀번호 변경</Tab>
                  <Tab>등록상품</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <UserEdit />
                  </TabPanel>
                  <TabPanel>
                    <ProductOfUser />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default UserMain;
