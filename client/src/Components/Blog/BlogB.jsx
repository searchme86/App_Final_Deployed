import React from 'react';

import {
  PamphletList,
  PamphletItem,
  PamphletImageHolder,
  PamphletImage,
  PamphletTag,
  PamphletTitle,
  PamphletDes,
  PamphletCreatedAt,
  TypeBPamphlet,
  TypeBPamphletInfo,
  TypeBPamphletContent,
} from './Blog.style';

import defaultImg from '../../Assets/Images/blog02.svg';
import Text from '../Text/Text';
import { SectionLayout, SectionUnit } from '../../Config/Layout/Layout.style';
import { OffScreenTitle } from '../../Assets/Styles/Common.style';

function BlogB() {
  return (
    <SectionUnit color="#f2ead7">
      <SectionLayout>
        <OffScreenTitle>블로그 섹션</OffScreenTitle>
        <PamphletList>
          <PamphletItem>
            <Text />
          </PamphletItem>
          <PamphletItem>
            <TypeBPamphlet to={'/'}>
              <TypeBPamphletInfo>
                <PamphletImageHolder>
                  <PamphletImage src={defaultImg} alt="고양이" />
                </PamphletImageHolder>
                <PamphletTag>Press Release</PamphletTag>
              </TypeBPamphletInfo>
            </TypeBPamphlet>
            <TypeBPamphletContent>
              <PamphletTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </PamphletTitle>
              <PamphletDes>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos
                maxime id vero nobis eos, qui necessitatibus excepturi, ad eius.
                Quam, aut!Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odio nostrum laboriosam ducimus quo rem nisi a nemo,
                dignissimos maxime id vero nobis eos, qui necessitatibus
                excepturi, ad eius. Quam, aut!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio nostrum laboriosam ducimus
                quo rem nisi a nemo, dignissimos maxime id vero nobis eos, qui
                necessitatibus excepturi, ad eius. Quam, aut!
              </PamphletDes>
              <PamphletCreatedAt>8.11, 2022</PamphletCreatedAt>
            </TypeBPamphletContent>
          </PamphletItem>
        </PamphletList>
      </SectionLayout>
    </SectionUnit>
  );
}

export default BlogB;
