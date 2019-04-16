import styled from '@emotion/styled';
import React from 'react';
import { Image, Layout } from 'spectacle';
import { images } from '../images';

const FrontendDevADLBrandImage = styled(Image)`
  padding-left: 3rem;
  padding-bottom: 3rem;
  margin-top: 3rem !important;
`;

export const FrontendDevADLSlideContent = () => (
  <Layout style={{ justifyContent: 'center', flexDirection: 'column' }}>
    <Layout style={{ justifyContent: 'center', flexDirection: 'row' }}>
      <FrontendDevADLBrandImage src={images.frontendDevADL} />
    </Layout>
  </Layout>
);
