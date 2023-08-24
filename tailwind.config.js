/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      // 기본폰트 정의
      // sans: ['Poppins', 'Roboto', 'Helvetica Neue', 'Apple SD Gothic Neo sans-serif'],
      sans: ["Poppins", "Roboto", "Helvetica Neue", "Apple SD Gothic Neo sans-serif"],
      serif: ["sans-serif"],
      crazyTimer: ["Roboto", "Droid Sans", "Malgun Gothic", "Helvetica", "Apple Gothic", "Tahoma", "Dotum", "sans-serif"],
    },

    letterSpacing: {
      // letterSpacing custom
      0.8: "-.8",
      0.6: "-.6",
      0.5: "-.5",
      0.4: "-.4",
      0.2: "-.2",
      0.1: "-.1",
    },

    extend: {
      width: {
        inherit: "inherit",
      },
      height: {
        inherit: "inherit",
      },
    },
    screens: {},

    backgroundImage: {},

    backgroundPosition: {
      editImgPos: "-69px -6px",
      center: "center",
    },

    boxShadow: {
      outline: `0 2px 8px 0 rgba(0, 0, 0, 0.16)`, //검색 결과 영역
      slideMenu: `0 5px 5px 0 rgb(0 0 0 / 3%), 0 5px 5px 0 rgb(0 0 0 / 3%)`, // slideMenu 영역
      toast: `0 1px 10px 0 rgb(0, 0, 0, ,0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05)`, // toast
      selectBox: `2px 8px 8px rgb(58 64 83 / 10%)`, // common sort select box
      logInAndJoin: "0 2px 8px 0 rgb(247 85 85 / 32%)",
      mainBnrArrowBtnNext: "0 3px 3px 0 rgba(0, 0, 0, 0.25)", // 메인배너 우 버튼
      mainBnrArrowBtnPrev: "0 -3px 3px 0 rgba(0, 0, 0, 0.25)", // 메인배너 좌 버튼
      fawTicketModalBtn: "2px 2px 8px rgba(255, 148, 61, 0.3)",
      crazyBannerFigure: "0 3px 4px 0 rgba(0, 0, 0, 0.1), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08);",
      none: "unset",
      NewArrivalsThumb: "2px 8px 8px rgb(58 64 83 / 10%)",
      NewArrivalsEpiBtn: "0px 3px 6px rgba(106, 126, 132, 0.4)",
      Artworks: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      acceptCookie: "1px 3px 7px 0px rgba(102, 32, 18, 0.34);",
    },
    textShadow: {
      homeMainShadow:
        "1px 1px 0 #1e1f21, -1px 1px 0 #1e1f21, 1px -1px 0 #1e1f21, -1px -1px 0 #1e1f21, 0px 1px 0 #1e1f21, 0px -1px 0 #1e1f21, -1px 0px 0 #1e1f21, 1px 0px 0 #1e1f21, 2px 2px 0 #1e1f21, -2px 2px 0 #1e1f21, 2px -2px 0 #1e1f21, -2px -2px 0 #1e1f21, 0px 2px 0 #1e1f21, 0px -2px 0 #1e1f21, -2px 0px 0 #1e1f21, 2px 0px 0 #1e1f21, 1px 2px 0 #1e1f21, -1px 2px 0 #1e1f21, 1px -2px 0 #1e1f21, -1px -2px 0 #1e1f21, 2px 1px 0 #1e1f21, -2px 1px 0 #1e1f21, 2px -1px 0 #1e1f21, -2px -1px 0 #1e1f21",
      rankShadow:
        "1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff, 0px 1px 0 #fff, 0px -1px 0 #fff, -1px 0px 0 #fff, 1px 0px 0 #fff, 2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff, 0px 2px 0 #fff, 0px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff, 1px 2px 0 #fff, -1px 2px 0 #fff, 1px -2px 0 #fff, -1px -2px 0 #fff, 2px 1px 0 #fff, -2px 1px 0 #fff, 2px -1px 0 #fff, -2px -1px 0 #fff",
      autoRefillShadow: "0px 0.7400000095367432px 0px #E5A51B",
    },

    aspectRatio: {
      "300/410": "300 / 410",
      "720/100": "720 / 100",
    },

    zIndex: {
      200: "200",
    },
  },

  variants: {
    extend: {
      borderWidth: ["hover"],
    },
    gridTemplateAreas: ["responsive"],
  },
  corePlugins: { preflight: true }, // tailwind reset css 활성/비활성 옵션

  plugins: [],
};
