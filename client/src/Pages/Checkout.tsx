import Container from "@/components/Container";

const Checkout = () => {
  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">Checkout</h1>
              <p className="text-white text-[18px] mt-4">
                Home <span className="mr-2">&gt;</span>Checkout
              </p>
            </div>
          </Container>
        </div>
        <Container>
          <div className="my-16">
            <div className="flex gap-16">
              <div className="flex-[2]">
                <h1 className="text-[26px] font-medium">Billing details</h1>
                <form>
                  <div className="flex gap-4 mt-8">
                    <div className="flex-[1]">
                      <input
                        type="text"
                        className="w-full p-4 outline-none border-[1px] border-[#CCC]"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="flex-[1]">
                      <input
                        type="text"
                        className="w-full p-4 outline-none border-[1px] border-[#CCC]"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <select
                    id="countries"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  >
                    <option selected value="US">
                      United States
                    </option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  />
                  <input
                    type="text"
                    placeholder="Post Code"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="mt-6 w-full p-4 outline-none border-[1px] border-[#CCC]"
                  />
                </form>
              </div>
              <div className="flex-[1]">
                <div className="p-4 border-[1px] border-[#CCC]">
                  <div className="flex justify-between">
                    <h1 className="text-xl font-medium">Product</h1>
                    <span className="text-xl font-medium">Subtotal</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="max-w-[200px] text-gray-500">
                        Learn to build an e-commerce store with .Net, React &
                        Redux
                        <span className="text-gray-700 font-medium ml-2">
                          X 1
                        </span>
                      </span>
                      <span>$70.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="max-w-[200px] text-gray-500">
                        BUILD THE BEST ECOMMERCE WEBSITE EVER WITH REACT JS NEXT
                        JS REDUX TOOLKIT AND NEXT AUTH
                        <span className="text-gray-700 font-medium ml-2">
                          X 1
                        </span>
                      </span>
                      <span>$70.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="max-w-[200px] text-gray-500">
                        React - The Complete Guide 2024 (incl. React Router &
                        Redux)
                        <span className="text-gray-700 font-medium ml-2">
                          X 1
                        </span>
                      </span>
                      <span>$70.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <h1 className="text-xl font-medium">Total</h1>
                    <span className="text-xl font-medium">$210.00</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full flex justify-center py-3 rounded-md bg-[#0e5ddd] text-white font-medium border-[1px] border-[#0e5ddd] hover:text-[#0e5ddd] hover:bg-white transition-all duration-200">
                    PLACE ORDER
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

export default Checkout;