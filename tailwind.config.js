module.exports = {
  purge: [
    "components/navigator_bar/index.jsx",
    "components/signupComponent/signup.jsx",
    "components/signupComponent/signup.jsx",
    "components/navigator_bar/LoggedOutUserMenu/LoggedOutUserMenu.jsx",
    "components/homepage/HomePage.jsx",
    "components/select_topic/Select_Topic.jsx",
    "components/subject_review/subject.jsx",
    "components/navigator_bar/userDropdown/UserDropdown.jsx",
    "components/homepage/content.jsx",
    "pages/reviewsubjects/index.jsx",
    "components/subject_review/createReview.jsx",
    "components/subject_review/moreDropdown.jsx",
    "components/subject_review/index.jsx",
    "components/loader/Loader.jsx",
    "components/error/index.jsx",
    "pages/createreview/create_review.jsx"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
       },
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
      gridTemplateColumns: {
        // Simple 16 column grid
       '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
       'content': '200px minmax(auto, 200px) ',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
