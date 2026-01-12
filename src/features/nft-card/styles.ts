import { css } from "@styled-system/css";
import { flex, square } from "@styled-system/patterns";

export const main = flex({
  position: "relative",
  fontSize: "18px",
  bg: "nft.blue.950",
  minHeight: "100vh",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Outfit",
  "& a": {
    transition: "all 0.1s ease-in-out",
  },
});

export const card = css({
  bg: "nft.blue.900",
  height: "90%",
  w: "auto",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "320px",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0 25px 50px ",
  color: "nft.blue.500",
});

export const image = square({
  width: "100%",
  borderRadius: "10px",
});

export const separator = css({
  width: "100%",
  bg: "white",
  opacity: "0.1",
  height: "1px",
  marginY: "18px",
});

export const cardBody = flex({
  flexDirection: "column",
  paddingTop: "1.5rem",
  gap: "10px",
  lineHeight: "loose",
  "& div": {
    display: "flex",
    w: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    "& span": {
      display: "flex",
      gap: "4px",
      alignItems: "center",
    },
    "& span.ethereum": {
      color: "nft.cyan",
    },
  },
});

export const layer = css({
  position: "absolute",
  top: 0,
  left: 0,
  w: "full",
  h: "full",
  bg: "nft.cyan/30",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  opacity: 0,
  transition: "opacity 0.1s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
});

export const cardFooter = css({
  display: "flex",
  w: "100%",
  gap: "10px",
  alignItems: "center",
  "& img": {
    border: "solid 1px ",
    borderRadius: "full",
    borderColor: "nft.cyan",
  },
});

