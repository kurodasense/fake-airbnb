export const lightTheme = {
  color: {
    primary: "#ff385c",
    secondary: "#00848a",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    `,
  },
};

export const darkTheme = {};

export default lightTheme;
