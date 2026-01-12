import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";

export const main = css({
  h: "100vh",
  color: "tracker.gray.950",
  fontWeight: "500",
  display: "flex",
  flexDir: "column",
  fontFamily: "Poppins",
  position: "relative",
  overflow: "hidden",
});

export const pattern = css({
  h: "40%",
  maxH: "40%",
  w: "100%",
  position: "relative",
  margin: "0 auto",
  backgroundImage: {
    base: 'url("/images/tracker/pattern-bg-mobile.png")',
    md: 'url("/images/tracker/pattern-bg-desktop.png")',
  },
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  zIndex: "10",
  boxShadow:
    "rgba(40, 40, 50, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
});

export const map = css({
  w: "100%",
  flex: 1,
  bg: "#333",
  zIndex: "1",
});

export const title = css({
  color: "white",
  fontSize: "1.8rem",
  fontWeight: "500",
  paddingY: "1.5rem",
  letterSpacing: "0.1rem",
});

export const dataContainer = css({
  base: {
    w: "20rem",
    flexDir: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingY: "1rem",
    gap: "1rem",
    marginY: "2rem",
  },
  md: {
    w: "65rem",
    flexDir: "row",
    justifyContent: "space-between",
    alignItems: "start",
    paddingY: "2rem",
    gap: 0,
    marginY: "2.5rem",
  },
  backgroundColor: "white",
  borderRadius: "10px",
  display: "flex",
  boxShadow:
    "rgba(40, 40, 50, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
});

export const dataSection = css({
  base: {
    alignItems: "center",
    p: 0,
    gap: "0.2rem",
  },
  md: {
    alignItems: "flex-start",
    px: "2.5rem",
    gap: "0.5rem",
  },
  display: "flex",
  w: "100%",
  flexDirection: "column",
  "& .section-title": {
    base: {
      fontSize: "0.6rem",
    },
    md: {
      fontSize: "0.7rem",
    },
    color: "tracker.gray.400",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    fontWeight: "700",
  },
  "& .section-value": {
    base: {
      fontSize: "1.2rem",
    },
    md: {
      fontSize: "1.5rem",
      lineHeight: "1.2",
    },
  },
});

export const dataSeparator = css({
  display: {
    base: "none",
    md: "block",
  },
  backgroundColor: "tracker.gray.950/20",
  width: "1px",
  px: "1px",
  height: "100%",
  contain: "",
});

export const containerBase = flex({
  width: {
    base: "80%",
    md: "450px",
  },
  backgroundColor:'white',
  alignItems: "center",
  justifyContent: "center",
});

export const searchBase = css({
  paddingX: "1.6rem",
  paddingY: "0.8rem",
  flex: 1,
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  outline: "none",
  border: "none",
    backgroundColor:'white',

  _hover: {
    cursor: "pointer",
  },
});

export const iconBtnBase = flex({
  backgroundColor: "black",
  w: { base: "15%", md: "10%" },
  h: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  _hover: {
    cursor: "pointer",
  },
  _active: {
    bg: "gray.600",
  },
});

export const iconBase = flex({
  h: "12px",
});