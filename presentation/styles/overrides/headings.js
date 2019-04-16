/**
 * default heading values
 */
const defaultHeadingStyles = {
  color: 'inherit',
  fontWeight: 550,
  lineHeight: 1,
  zoom: 1,
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  margin: '0.2em 0'
};

/**
 * overrides for spectacle headings default theme
 */
export const createHeading = (colors = {}, fonts = {}) => ({
  h1: {
    ...defaultHeadingStyles,
    fontSize: '6rem',
    fontFamily: fonts.primary,
    fontWeight: 550
  },
  h2: {
    ...defaultHeadingStyles,
    fontSize: '5.0625rem',
    fontFamily: fonts.primary
  },
  h3: {
    ...defaultHeadingStyles,
    fontSize: '3.75rem',
    fontFamily: fonts.primary
  },
  h4: {
    ...defaultHeadingStyles,
    fontSize: '3rem',
    fontFamily: fonts.primary
  },
  h5: {
    ...defaultHeadingStyles,
    fontSize: '2.625rem',
    fontFamily: fonts.primary
  },
  h6: {
    ...defaultHeadingStyles,
    fontSize: '2.25rem',
    fontFamily: fonts.primary
  }
});
