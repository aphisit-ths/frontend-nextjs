module.exports = {
  purge: [
    "components/userproducts/userproducts.jsx",
    "pages/manageproducts/itemslist.jsx",
    "components/projIndex/index.jsx",
    "components/signupComponent/signup.jsx",
    "components/signupComponent/signup.jsx",
    "components/LoggedOutUserMenu/LoggedOutUserMenu.jsx",
    "components/homepage/HomePage.jsx",
    
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        "1": "1.5px",
      },
      colors: {
        displaycolor: "#434343",
        kmitl: {
          normal: "#E35205",
          hover: "#B94000",
        },
      },
      fontFamily: {
        display: ["'Prompt'"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
