/**
 * overrides for spectacle code (inline) default theme
 */
export function createCode(colors = {}, fonts = {}) {
  return {
    color: "inherit",
    fontSize: "2rem",
    fontFamily: fonts.code,
    margin: "0.25rem auto",
    backgroundColor: "rgba(0,0,0,0.15)",
    padding: "0 10px",
    borderRadius: 3
  };
}
