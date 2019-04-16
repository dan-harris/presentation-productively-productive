import styled from '@emotion/styled';
import React from 'react';
import { Heading, Image, Layout } from 'spectacle';
import { images } from '../images';

/**
 * gross overrides for heading component
 */
const SubHeadingText = styled(Heading)`
  font-family: Pacifico, cursive !important;
  text-transform: lowercase !important;
  font-weight: 500 !important;
  margin: 0 !important;
`;

/**
 * inline arrow images
 */
const ArrowImage = styled(Image)`
  margin: 1em 1em 0 !important;
`;

export const SubHeading = props => (
  <Layout style={{ justifyContent: 'center' }}>
    {!props.children ? (
      <ArrowImage src={images.arrowUnderline} />
    ) : (
      <>
        <ArrowImage src={images.arrowLeft} />
        <SubHeadingText size={2} {...props}>
          {props.children}
        </SubHeadingText>
        <ArrowImage src={images.arrowRight} />
      </>
    )}
  </Layout>
);
