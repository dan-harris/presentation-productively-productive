import React from 'react';
import { Image, Layout } from 'spectacle';
import { images } from '../images';

export const ProfileSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Image src={images.danharrisLogo} height={500} />
  </Layout>
);
