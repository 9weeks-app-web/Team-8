export const Common = {
  colors: {
    neutral: {
      100: "#030303",
      90: "#1A1A1A",
      80: "#333333",
      70: "#4D4D4D",
      60: "#666666",
      50: "#808080",
      40: "#999999",
      30: "#B3B3B3",
      20: "#CCCCCC",
      10: "#E6E6E6",
      5: "#F3F3F3",
      0: "#CED4DA",
    },
    primary: {
      150: "#0043C0",
      100: "#0059FF",
      90: "#196AFF",
      80: "#337AFF",
      70: "#4C8BFF",
      60: "#669BFF",
      50: "#7FACFF",
      40: "#99BDFF",
      30: "#B2CDFF",
      20: "#CCDEFF",
      10: "#E5EEFF",
      5: "#F5F8FF",
      0: "#CED4DA",
    },
    stroke: {
      blue: "#99BDFF",
      10: "#E6E6E6",
      5: "#F3F3F3",
    },
    background: {
      100: "#666666",
      50: "#A9A9A9",
      5: "#F8F8F9",
      blue: "#F5F8FF",
    },
    system: {
      warning: "#FF0000",
      success: "#07A320",
    },
  },
  font: {
    size: {
      header: "34px",
      xxxl: "24px",
      xxl: "22px",
      xl: "20px",
      lg: "18px", 
      md: "16px",
      sm: "14px",
      xs: "12px",
      xxs: "10px",
    },
    weight: {
      bold: "700",
      semibold: "600",
      medium: "500",
      regular: "400",
    },
  },
  space: {
    xs: "8px",
    s: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "56px",
  },
  a11yHidden: `
  overflow: hidden;
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  `,
  reset: `
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-: 0;
    }
    button {
      cursor: pointer;
    }
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
    html {
      font-size: 16 px;
      font-family:
        "Pretendard Variable",
        Pretendard,
        -apple-system,
        BlinkMacSystemFont,
        system-ui,
        Roboto,
        "Helvetica Neue",
        "Segoe UI",
        "Apple SD Gothic Neo",
        "Noto Sans KR",
        "Malgun Gothic",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        sans-serif;
    }
  `,
};
