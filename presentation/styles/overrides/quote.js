/**
 * overrides for spectacle quote, blockquote & cite default theme
 */
export function createQuote(colors = {}, fonts = {}) {
  return {
    blockquote: {
      textAlign: "left",
      position: "relative",
      display: "inline-block",
      margin: 20
    },
    quote: {
      borderLeft: "0.25rem solid rgba(255,255,255,0.5)",
      paddingLeft: 40,
      display: "block",
      color: colors.textDefault,
      fontSize: "3rem",
      lineHeight: 1,
      fontWeight: "bold",
      marginBottom: "2rem"
    },
    cite: {
      color: colors.textDefault,
      opacity: 0.7,
      display: "block",
      clear: "left",
      fontSize: "2rem",
      marginTop: "1rem",
      paddingLeft: "3rem"
    }
  };
}
