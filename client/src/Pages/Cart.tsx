import { server } from "@/api";
import Container from "@/components/Container";
import { useUserStore } from "@/store/user.store";
import axios from "axios";
import { useEffect } from "react";
import { GiCancel } from "react-icons/gi";

const Cart = () => {
  const { user, cartData, fetchCart } = useUserStore();

  useEffect(() => {
    if (user && user[0]?.id) {
      fetchCart(user[0]?.id.toString());
    }
  }, [user[0]?.id, fetchCart]);

  // console.log(cartData);
  const CartTotal = cartData.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  const handleRemoveItem = async (cartId: string) => {
    try {
      await axios.delete(
        server.API_DEL_ITEM_IN_CART.replace(":id", cartId).replace(
          ":uid",
          user[0]?.id.toString()
        )
      );
      fetchCart(user[0]?.id.toString());
    } catch (error) {
      console.log(
        `error cannot handleremoveitem because ${(error as Error).message}`
      );
    }
  };

  const handleCheckout = async () => {
    try {
      const { data } = await axios.post(
        `${server.API_STRIPE_CHECKOUT_SESSION}`,
        {
          cartItems: cartData,
        }
      );
      window.location.href = data.url; // Redirect to Stripe checkout page
    } catch (error) {
      console.error("Error during checkout: ", error);
    }
  };

  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">Cart</h1>
              <p className="text-white text-[18px] mt-4">
                Home <span className="mr-2">&gt;</span>Cart
              </p>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mt-24">
            <div>
              <table className="w-full bg-[#FCFCFD] border-[1px] shadow-sm">
                <thead>
                  <tr>
                    <th className="p-4"></th>
                    <th className="p-4">Product</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="">
                  {cartData?.map((val, idx) => (
                    <tr className="" key={idx}>
                      <td className="text-center">
                        <div className="flex justify-center items-center py-2">
                          <GiCancel
                            onClick={() => handleRemoveItem(val.id.toString())}
                            className="mr-4 cursor-pointer text-[#0e5ddd] text-[24px]"
                          />
                          <img
                            className="size-24 object-contain"
                            src={`${val.product_img}`}
                            alt={`${val.product_slug}`}
                          />
                        </div>
                      </td>
                      <td className="text-center max-w-[675px]">
                        {val.product_name}
                      </td>
                      <td className="text-center">${val.price}</td>
                      <td className="text-center">1</td>
                      <td className="text-center">${val.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8 flex justify-end">
                <div className="p-8 w-[450px] border-[1px] bg-[#FCFCFD] shadow-sm">
                  <h1 className="text-[24px]">Cart Totals</h1>
                  <div className="mt-2 h-[1px] bg-[#ccc]"></div>
                  <div className="flex items-center text-[18px] gap-8 my-4">
                    <h1 className="text-gray-500">Subtotal</h1>
                    <span>${CartTotal}</span>
                  </div>
                  <div className="mt-2 h-[1px] bg-[#ccc]"></div>
                  <div className="flex items-center text-[18px] gap-[62px] my-4">
                    <h1 className="text-gray-500">Total</h1>
                    <span>${CartTotal}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="py-2 px-4 bg-[#0e5ddd] text-white hover:text-[#0e5ddd] hover:bg-white transition-all duration-200 border-[1px] border-[#0e5ddd]"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;