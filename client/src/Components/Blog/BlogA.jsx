import React from 'react';

import {
  PamphletList,
  PamphletItem,
  PamphletInfoHref,
  PamphletImageHolder,
  PamphletImage,
  PamphletTag,
  PamphletInfo,
  PamphletContent,
  PamphletTitle,
  PamphletDes,
  PamphletCreatedAt,
} from './Blog.style';

import defaultImg from '../../Assets/Images/blog01.svg';
import Text from '../Text/Text';
import { SectionLayout, SectionUnit } from '../../Config/Layout/Layout.style';
import { OffScreenTitle } from '../../Assets/Styles/Common.style';

function BlogA() {
  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>홍보섹션</OffScreenTitle>
        <PamphletList>
          <PamphletItem>
            <PamphletInfoHref to={'/'}>
              <PamphletInfo>
                <PamphletImageHolder>
                  <PamphletImage src={defaultImg} alt="고양이" />
                </PamphletImageHolder>
                <PamphletTag>Hot ISSUE</PamphletTag>
              </PamphletInfo>
            </PamphletInfoHref>
            <PamphletContent>
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
            </PamphletContent>
          </PamphletItem>
          <PamphletItem>
            <Text />
          </PamphletItem>
        </PamphletList>
      </SectionLayout>
    </SectionUnit>
  );
}

export default BlogA;
