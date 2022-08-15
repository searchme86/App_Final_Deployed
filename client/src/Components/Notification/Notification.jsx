import React from 'react';

import { OffScreenStrong } from '../../Assets/Styles/Common.style';
import { NotiTitle, NotiContainer, NotiContent } from './Notification.style';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

function Notification({ content }) {
  return (
    <NotiContainer>
      <NotiTitle>[상품등록 유의사항]</NotiTitle>
      <NotiContent>
        <TableContainer>
          <OffScreenStrong>폼 입력 유의사항 테이블</OffScreenStrong>
          <Table size="sm">
            <colgroup>
              <col width="15%" />
              <col width="35%" />
              <col width="15%" />
              <col width="35%" />
            </colgroup>
            <Thead>
              <Tr>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 타이틀
                </Th>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 설명
                </Th>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 타이틀
                </Th>
                <Th scope="col" textAlign="left" fontSize="15px">
                  폼 설명
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {content.map(({ id, catA, cntA, catB, cntB }) => (
                <Tr key={id}>
                  <Th scope="row" textAlign="left" fontSize="13px">
                    {catA}
                  </Th>
                  <Td>{cntA}</Td>
                  <Th scope="row" textAlign="left" fontSize="13px">
                    {catB}
                  </Th>
                  <Td>{cntB}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </NotiContent>
    </NotiContainer>
  );
}

export default Notification;
