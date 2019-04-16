import React from 'react';
import { Deck, Heading, Layout, Slide, Text } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { defaultBG, highlightBG } from './components/default-attrs/slide-defaults';
import { HeaderWithSub } from './components/header-with-sub';
import { ListWithEmphasis } from './components/list';
import { ListItemWithEmphasis } from './components/list-item';
import { images } from './images';
import { TitleSlideContent } from './slides/1-title';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ProfileSlideContent } from './templates/profile-slide-content';

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

preloader(images);

/**
 * reset CSS
 */
// @ts-ignore
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>

        {/* SLIDE 1 */}
        <Slide {...defaultBG}>
          <TitleSlideContent />
        </Slide>

        {/* SLIDE 2 */}
        <Slide {...highlightBG}>
          <ProfileSlideContent />
        </Slide>

        {/* SLIDE 3 */}
        <Slide {...defaultBG}>
          <HeaderWithSub subheading="done">get that shite</HeaderWithSub>
        </Slide>

        {/* SLIDE 4 */}
        <Slide  {...defaultBG}>
          <iframe style={{ border: 'solid black 0.5rem' }} width="1000" height="560" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0&autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Slide>

        {/* SLIDE 5 */}
        <Slide {...defaultBG}>
          <>
            <HeaderWithSub>some tooling</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>toggl</Heading>
                  <Text>&#123; time manager &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>sticky notes</Heading>
                  <Text>&#123; quick bits &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>todo</Heading>
                  <Text>&#123; mid-long term &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>calendar</Heading>
                  <Text>&#123; organise yoself &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/* SLIDE 30 */}
        <Slide {...defaultBG}>
          <HeaderWithSub>whaddya think?</HeaderWithSub>
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
