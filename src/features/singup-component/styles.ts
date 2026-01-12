import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";

export const main = flex({
  bg: "singup.red",
  minH: "100vh",
  bgImage: 'url("/images/singup-component/bg-intro-desktop.png")',
  p: {
    base: "8rem 2rem",
    md: "0 6rem",
  },
  flexDir: {
    base: "column",
    md: "row",
  },
  gap: { base: "4rem", md: "0" },
  fontFamily: "Poppins",
  fontWeight: "500",
});

export const sectionText = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: {
    base:"center",
    md:"left"
  },
  w: {
    base: "full",
    md: "50%",
  },
  px: {
    base: "0",
    md: "2rem",
  },
  color: "white",
  fontSize: "16px",

  "& h2": {
    fontSize: {base: "1.5rem", md: "3rem"},
    fontWeight: "extrabold",
    lineHeight: "1.2",
    marginBottom: "1rem",
  },
  "& p": { color: "white", lineHeight: "relaxed" }
  
});

export const sectionSingUp = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  flex: "1",
  gap: "1.5rem",
  "& .form": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    p: "2rem",
    bg: "white",
    textAlign: "center",
    shadow: "0 4.5px 0px 0px rgba(10, 10, 10, 0.2)",
    gap: "1rem",
    "& input": {
      w: "full",
      py: "1rem",
      px: "2rem",
      border: "1px solid #e5e5e5",
      borderRadius: "5px",
      _focusVisible: {
        outlineColor: "singup.purple.700",
      },
    },
    "& input.error": {
      border: "1px solid red",
    },
    "& .terms": {
      fontSize: "0.65rem",
      fontWeight: "400",
      color: "singup.purple.350",
      "& a": {
        fontWeight: 'bolder',
        color: "singup.red",
      },
    },
    "& button": {
      width: "100%",
      borderRadius: "10px",
      bg: "singup.green",
      color: "white",
      py: "1rem",
      cursor: "pointer",
      shadow: "0 4.5px 0px 0px rgba(10, 10, 10, 0.2)",
      textTransform: "uppercase",
      "&:hover": {
        opacity: "0.8",
      },
    },
  },
  "& .promotion": {
    textAlign: "center",
    py: "1rem",
    px: { base: "4rem", md: "0" },
    color: "white",
    width: "100%",
    borderRadius: "10px",
    bg: "singup.purple.700",
    shadow: "0 4.5px 0px 0px rgba(10, 10, 10, 0.2)",
  },
});