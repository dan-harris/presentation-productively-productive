import createTheme from 'spectacle/lib/themes/default';
import { createCode } from './overrides/code';
import { createCodePane } from './overrides/code-pane';
import { createGlobals } from './overrides/globals';
import { createHeading } from './overrides/headings';
import { createQuote } from './overrides/quote';
import { createText } from './overrides/text';
import { theme } from './theme';

/**
 * create the custom theme with spectacle js + overrides
 */
export const createCustomTheme = () => {
  // spectacle js create custom theme + overrides
  const { colors, fonts } = theme;
  const spectacleTheme = createTheme(colors, fonts);
  const global = createGlobals(colors, fonts);
  // component overrides
  const heading = createHeading(colors, fonts);
  const text = createText(colors, fonts);
  const codePane = createCodePane(colors, fonts);
  const code = createCode(colors, fonts);
  const quote = createQuote(colors, fonts); // quote is actually 3 elements; blockquote, quote & cite

  return {
    ...spectacleTheme,
    screen: {
      ...spectacleTheme.screen,
      components: {
        ...spectacleTheme.screen.components,
        heading,
        text,
        codePane,
        code,
        ...quote
      },
      global
    }
  };
};
