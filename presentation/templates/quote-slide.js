import React from 'react';
import { BlockQuote, Cite, Quote, Slide } from 'spectacle';

export const QuoteSlide = () => (
  <Slide transition={['fade']} bgColor="backgroundDefault" textColor="textDefault">
    <BlockQuote>
      <Quote>quote lorem ipsum dolem sum do whatsy kung fu gangnam style. Twinkies blue warehouse fund chocobos.</Quote>
      <Cite>author</Cite>
    </BlockQuote>
  </Slide>
);
