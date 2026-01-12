import { css } from "@styled-system/css";
import { grid } from "@styled-system/patterns";

export const main = grid({
  position: "relative",
  fontFamily: "RedHat",
  bg: "cart.rose.50",
  display: "grid",
  color: "cart.rose.900",
  padding: {
    base: "2rem",
    sm: "5rem",
  },
  gap: "2rem",
  gridTemplateColumns: {
    base: "1fr",
    sm: "2fr 1fr",
  },
  "& .product-list .product-list-container": {
    paddingTop: "1rem",
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: {
      base: "1fr",
      sm: "repeat(1, minmax(0, 1fr))",
      md: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
    },
  },
});

export const cart = css({
  padding: "1.5rem",
  bg: "white",
  height: 'fit',
  borderRadius: '5px',
  '& .separator': {
    bg: "rgba(173, 137, 133,20%)",
    width: "100%",
    height: "1px",
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  '& h2': {
    color: "cart.red",
    fontWeight: "extrabold",
    fontSize: "1.5rem",
  },
  '& .cart-container': {
    color: "rose.900", //TODO
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    '& li': {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      '& .item-body': {
        '& h5': {
          color: 'cart.rose.900',
          fontWeight: "medium",
        },
        '& div': {
          marginTop: "4px",
          display: 'flex',
          gap: '8px',
        }
      },
      '& .btn-remove': {
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'cart.rose.900/30',
        borderRadius: '50%',
        height: 'fit',
        padding: '0.2rem',
        '& svg': {
          fill: "cart.rose.400"
        },
        '&:hover': {
          borderColor: 'cart.rose.900',
          '& svg': {
            fill: "cart.rose.900"
          },
        }
      }
    }
  },
  '& .cart-footer ': {
    display: 'flex',
    flexDir: 'column',
    gap: '1rem'
  },
  '& .cart-footer > .total-order': {
    w: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& strong': {
      fontSize: '1.5rem'
    }
  },
  '& .cart-footer > .delivery': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: '100%',
    backgroundColor: 'cart.rose.50',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
})

export const btnClear = css({
  w: '100%',
  backgroundColor: 'cart.red',
  textAlign: "center",
  paddingTop: '0.7rem',
  paddingBottom: '0.7rem',
  borderRadius: '50px',
  color: 'white',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'cart.red/80',
  }
})

export const card = css({
  display: "flex",
  flexDir: "column",
  gap: "2rem",

  "& .text-container": {
    "& .category": {
      color: "cart.rose.400",
    },
    "& .name": {
      fontWeight:'medium'
    },
    "& .price": {
      color: "cart.red",
      fontWeight:'medium'
    },
  },
});

export const imageContainer = css({
  position: "relative",
  width: "100%",
  "& img": {
    aspectRatio: {
      base: "1/0.7",
      sm: "square",
    },
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
});

export const addButton = css({
  bg: "white",
  borderRadius: "50px",
  border: "solid 1px",
  borderColor: "cart.rose.400",
  display: "inline-flex",
  width: "full",
  height: "full",
  fontWeight: "500",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  cursor: "pointer",
  paddingX: '1.4rem',
  paddingY: '0.7rem',
  _hover: {
    borderColor: "cart.red",
    color: "cart.red",
  },
})

export const addInput = css({
  // display: "none",
  display: "flex",
  borderRadius: "50px",
  border: "solid 1px",
  borderColor: "cart.red",
  bg: "cart.red",
  width: "full",
  height: "full",
  fontWeight: "500",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
  paddingX: '1rem',
  paddingY: '0.7rem',
  "& a": {
    borderRadius: "full",
    p: "4px",
    cursor: "pointer",
    border: "1px solid white",

    _hover: {
      bg: "white",
      "& svg": {
        fill: "cart.red",
      },
    },
  },
  "& input": {
    bg: "transparent",
    w: "20px",
    textAlign: "center",
    _focus: {
      outline: "none",
    },
  },
})

export const inputContainer = css({
  position: "absolute",
  bottom: "0",
  left: "50%",
  transform: "translate(-50%, 50%)",
  minW: '150px',
  w: 'max-content',

  "& .input.hide": {
    display: "none",
  },
  "& .input.show": {
    display: "flex",
  },
  "& button.hide": {
    display: "none",
  },
  "& button.show": {
    display: "inline-flex",
  },
});

export const modal = css({
  position: "fixed",
  inset: 0,
  minH: "screen",
  bg: "black/80",
  display: 'flex',
  zIndex: "100",
  justifyContent: 'center',
  overflow: "hidden",
  overflowY: 'auto',
  base: {
    alignItems: 'end',
  },
  md: {
    p:"2rem",
    alignItems: 'center',
  },
  '& .modal-content': {
    display: "flex",
    flexDir: "column",
    overflow: "auto",
    maxH: '90vh',
    bg: "white",
    zIndex: "100",
    padding: "1.5rem",
    borderRadius: {
      base: '10px 10px 0px 0px',
      md: '10px'
    },
    minW: "40%",
    gap: "1rem",
    '& .modal-header': {
      '& h2': { fontSize: "2.5rem", fontWeight: "extrabold" },
      '& p': { color: "cart.rose.400" }
    },
    '& .list-confirmation': {
      '& li': {
        display: 'flex',
        gap: "1rem",
        backgroundColor: 'cart.rose.50',
        p: '1rem',
        borderBottom: '1px solid rgba(173, 137, 133,20%)',
        '& img': {
          w: '48px',
          h: '48px'
        },
        '& .item-body': {
          display: 'flex',
          w: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }
      },
      '& li.total-confirmation': {
        w: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom:'transparent',
        '& strong': {
          fontSize: '1.5rem'
        }
      },

    }
  },
})