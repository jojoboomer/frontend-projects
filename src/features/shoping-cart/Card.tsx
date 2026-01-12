import { $cart, addCount, deleteCount, type Item } from '@/features/shoping-cart/cart-store';
import {
  addButton,
  addInput,
  card,
  imageContainer,
  inputContainer,
} from "@/features/shoping-cart/styles";
import { useStore } from '@nanostores/react';
import { useEffect, useState } from "react";

const CartIco = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <g fill="#C73B0F" clipPath="url(#a)">
        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"></path>
        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.333 0h20v20h-20z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

const PlusIco = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="#fff"
      viewBox="0 0 10 10"
    >
      <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"></path>
    </svg>
  );
};

const MinusIco = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="#fff"
      viewBox="0 0 10 2"
    >
      <path d="M0 .375h10v1.25H0V.375Z"></path>
    </svg>
  );
};

function Card({ item }: { item: Item }) {
  const cart = useStore($cart);
  
  useStore($cart)
  const [active, setActive] = useState(false);

  const cant = cart.find((e) => e.name === item.name)?.quantity ?? 0;

  useEffect(() => {
    if (cant != 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [cant]);

  const handlePlusClick = () => {
    addCount({ name: item.name, price: item.price, img: item.image.thumbnail });
    if (cant == 0) setActive(!active);
  };

  const handleMinusClick = () => {
    deleteCount({ name: item.name, price: item.price });
    if (cant - 1 < 1) {
      setActive(false);
    }
  };

  return (
    <article className={`${card} card`}>
      <div className={imageContainer}>
        <img
          src={item.image.desktop}
          alt={item.name}
          style={active ? { border: "2px solid", borderColor: "cart.red" } : {}}
        />
        <div className={`${inputContainer}`}>
          {!active && (
            <button className={addButton} onClick={handlePlusClick}>
              <CartIco />
              Add to Cart
            </button>
          )}
          {active && (
            <div className={addInput}>
              <a className="minus" onClick={handleMinusClick}>
                <MinusIco />
              </a>
              <input
                className="counter"
                readOnly
                type="text"
                value={cant}
                maxLength={2}
              />
              <a className="plus" onClick={handlePlusClick}>
                <PlusIco />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="text-container">
        <p className="category">{item.category}</p>
        <p className="name">{item.name}</p>
        <p data-price={item.price} className="price">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}

export default Card;
