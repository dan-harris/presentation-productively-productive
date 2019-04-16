import styled from '@emotion/styled';
import React from 'react';
import { Heading, Image, Layout } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';
import { images } from '../images';


const TaptuBrandImage = styled(Image)`
  width: 400px;
  margin-top: 3rem !important; 
`;

export const ProfileWorkHereSlideContent = () => (
  <Layout style={{ justifyContent: 'center', flexDirection: 'column' }}>
    <Heading size={1} textAlign="center">
      <HeadingImage src={icons.pointDown} />
        I work here
    </Heading>
    <Layout style={{ justifyContent: 'center', flexDirection: 'row' }}>
      <TaptuBrandImage src={images.taptuBrand} />
    </Layout>
  </Layout>
);
