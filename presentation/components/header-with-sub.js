/* eslint-disable react/prop-types */
import React from 'react';
import { Heading, Layout } from 'spectacle';
import { SubHeading } from './sub-heading';

export const HeaderWithSub = props => (
  <Layout style={{ justifyContent: 'center', flexDirection: 'column', marginBottom: '5rem' }}>
    <Heading size={2}>{props.children}</Heading>
    {props.subheading ? <SubHeading size={3}>{props.subheading}</SubHeading> : <SubHeading />}
  </Layout>
);
