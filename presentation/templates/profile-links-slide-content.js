import React from 'react';
import { Heading, Image, Layout, Text } from 'spectacle';
import { SubHeading } from '../components/sub-heading';
import { images } from '../images';

const CenteredImage = props => (
  <Layout style={{ justifyContent: 'center', flexDirection: 'column' }}>
    <Image style={{ margin: '0 auto 1.3rem' }} {...props} />
    <Text>{props.children}</Text>
  </Layout>
);

export const ProfileLinksSlideContent = () => (
  <>
    <Layout style={{ justifyContent: 'center', flexDirection: 'column', marginBottom: '5rem' }}>
      <Heading size={2}>please heckle me</Heading>
      <SubHeading size={3}>on le socials</SubHeading>
    </Layout>
    <Layout style={{ justifyContent: 'space-evenly', padding: '0 3rem' }}>
      <CenteredImage src={images.logoTwitter} height={65}>
        @danharris_io
      </CenteredImage>
      <CenteredImage src={images.logoMedium} height={65}>
        @danharris_io
      </CenteredImage>
      <CenteredImage src={images.logoGithub} height={65}>
        @dan-harris
      </CenteredImage>
    </Layout>
  </>
);
