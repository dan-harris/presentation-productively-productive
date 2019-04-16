import React from 'react';
import { Heading, Image, Layout } from 'spectacle';
import { images } from '../images';

export const TitleSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Layout fit style={{ margin: '2.25rem 2.25rem 0 0' }}>
      <Image src={images.questSwords} width={150} height={150} />
    </Layout>
    <Layout style={{ flexDirection: 'column' }}>
      <Heading size={1} textAlign="left">
        danharris.io
      </Heading>
      <Heading size={2} textAlign="left">
        presentation template
      </Heading>
    </Layout>
  </Layout>
);
