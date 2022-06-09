import React from "react";
import styles from "../styles/Product.module.css";
import Buy from "./Buy";

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product;

  return (
    <div className="m-5 p-5 border border-2 border-black rounded-2xl gap-5 grid bg-white shadow-3xl text-black max-w-md flex">
      <div >
        <img className="w-48 mx-auto rounded-2xl" src={image_url} alt={name} />
      </div>

      <div className="mx-auto text-center">
        <div className="">
          <div className="text-black pb-5 text-lg font-bold">{name}</div>
          <div className="w-52 text-center mx-auto h-20">{description}</div>
        </div>

        <div className={styles.product_action}>
          <div className="p-2 font-bold">{price} USDC</div>
            <Buy itemID={id} />
        </div>
      </div>
    </div>
  );
}