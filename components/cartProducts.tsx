import { GetCartItems } from "@/utils/getCart";
import { useEffect } from "react";

const CartProducts = () => {

  let cartProducts;
  useEffect(() => {

    const GetCartOnInit = async () => {
      cartProducts = await GetCartItems();
    }
    
    GetCartOnInit();
  }, [])

  return (
    <div>
      <h1>Cart Products</h1>
      <div>
        {cartProducts.map((product, index) => {
          return (
            <div key={index}>
              <div>{product}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CartProducts;