import React from 'react';
import { Heading, List, ListItem, Slide } from 'spectacle';

export const ListSlide = () => (
  <Slide transition={['fade']} bgColor="backgroundDefault" textColor="textDefault">
    <Heading size={1}>standard list</Heading>
    <List>
      <ListItem>item 1</ListItem>
      <ListItem>item 2</ListItem>
      <ListItem>item 3</ListItem>
      <ListItem>item 4</ListItem>
    </List>
  </Slide>
);
