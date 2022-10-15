import { CartContext } from "context/CartWrapper";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useContext, useMemo } from "react";
import { IItemCart } from "types/cart";
import axios from "axios"
import {useRouter} from "next/router"

type IOrderSummaryProductProps = {
  items: IItemCart[];

  handleClear: () => void;
};

const OrderSummaryProduct = ({
  items,
  handleClear,
}: IOrderSummaryProductProps) => {
  const itemsAdded = useMemo(
    () => items.filter((item) => item.quantity),
    [items]
  );
  const router = useRouter();
  const { addItem } = useContext(CartContext);

  const totalPrice = useMemo(
    () => items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0),
    [items]
  );

  const salesTax = 0.16 * totalPrice;

  const handleAddToCart = () => {
    window.scroll({ behavior: "smooth", top: 0, left: 0 });

    itemsAdded.forEach((item) => addItem(item));

    handleClear();
  };

  const checkout = async () => {
    const body = items.map((item: any) => ({
      product_id: item.id,
      quantity: item.quantity
    }))
    const cart = await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/createCart`, {
      items: body
    })
    
    if (cart.status === 200) {
      router.push(cart.data.checkout_url)
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {itemsAdded.length && (
        <motion.div
          className="wrapper px-8 md:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <div className="w-full flex flex-col   sm:items-end">
            <div className="flex flex-col gap-6 max-w-md w-full ">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Order Summary
              </h2>

              <div className="flex flex-col gap-4">
                <div className="sm:text-xl font-normal flex flex-col gap-4">
                  {itemsAdded.map((item) => (
                    <div className="flex justify-between gap-8" key={item.name}>
                      <div>
                        {item.quantity} x {item.name}
                      </div>
                      <div>${item.quantity * item.price}</div>
                    </div>
                  ))}

                  <div className="flex justify-between gap-8 italic">
                    <div>Sales Tax (16%) </div>
                    <div>${salesTax}</div>
                  </div>
                  <div className="flex justify-between gap-8 italic">
                    <div>Delivery Charges</div>
                    <div>$2.75</div>
                  </div>
                </div>

                <div className="w-full border"></div>
                <div className="flex justify-between gap-8 sm:text-xl">
                  <div>Total</div>
                  <div>${salesTax + totalPrice + 2.75}</div>
                </div>
              </div>

              <div className="flex w-full gap-4 mt-2">
                <button className="min-w-max w-1/2" onClick={checkout}>Checkout</button>
                <button
                  className="btn-secondary w-1/2"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderSummaryProduct;
