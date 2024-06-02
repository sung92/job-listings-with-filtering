/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        desaturateddarkcyan: "hsl(180, 29%, 50%)",
      },
      neutral: {
        lightgrayishcyanbg: "hsl(180, 52%, 96%)",
        lightgrayishcyanfilter: "hsl(180, 31%, 95%)",
        darkgrayishcyan: "hsl(180, 8%, 52%)",
        verydarkgrayishcyan: "hsl(180, 14%, 20%)",
      },
      white: "#ffff",
      tomato: "#F05B5B",
    },
    fontFamily: { sans: "League Spartan, sans-serif" },
    screens: { tablet: "768px", desktop: "1120px" },
    extend: {
      boxShadow: {
        "3xl": "3px 9px 55px -11px rgb(60, 60, 60)",
      },
      backgroundImage: {
        headermobile: "url('/images/bg-header-mobile.svg')",
        headerdesktop: "url('/images/bg-header-desktop.svg')",
        pricing: "url('/images/bg-pattern-pricing.svg')",
        card: "url('/images/bg-pattern-card.svg')",
      },
      backgroundPosition: { bottom4: "center bottom 10rem" },
      gridTemplateRows: {
        mobile: "auto 5% 1fr 5% auto",
        mobileEdit: "auto 10% 1fr",
        mobileReply: "auto 1fr auto",
        desktop: "",
        tabletcards: "1fr 1fr",
        desktopsignup: "auto 1fr .5fr auto",
      },
      gridTemplateColumns: {
        mobile: "auto 10px 1fr",
        desktop: "auto 2rem auto 10px 1fr auto",
        searchbar: "1fr 10px 10%",
        desktopsignup: "45% 5vw 5vw 10vw 10vw 1fr",
      },
    },
  },
  plugins: [],
};
