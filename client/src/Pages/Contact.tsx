import Container from "@/components/Container";
import { MdOutgoingMail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <div className="h-[1500px]">
      <div className="bg-[url('https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-darken bg-black bg-opacity-50 bg-cover bg-center h-[450px]">
        <Container>
          <div className="h-[450px] flex flex-col justify-center items-center">
            <h1 className="text-white text-[42px]">Contact</h1>
            <p className="text-white text-xl">
              Home <span className="text-xl px-2">&gt;</span>Contact
            </p>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-3 gap-10 px-24 mt-24">
            <div className="px-4 py-10 bg-white border shadow-sm">
              <div className="flex flex-row items-center justify-center">
                <span>
                  <MdOutgoingMail className="text-[#0e5ddd]" size={50} />
                </span>
                <div className="ml-4">
                  <h1 className="text-[20px] font-medium">Mail Address</h1>
                  <p className="text-gray-600">elya.contact@elya.com,</p>
                  <p className="text-gray-600">contact@elya.com</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-10 bg-white border shadow-sm">
              <div className="flex flex-row items-center justify-center">
                <span>
                  <GiPositionMarker className="text-[#0e5ddd]" size={50} />
                </span>
                <div className="ml-4">
                  <h1 className="text-[20px] font-medium">Office address</h1>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-10 bg-white border shadow-sm">
              <div className="flex flex-row items-center justify-center">
                <span>
                  <MdPhoneInTalk className="text-[#0e5ddd]" size={50} />
                </span>
                <div className="ml-4">
                  <h1 className="text-[20px] font-medium">Phone Number</h1>
                  <p className="text-gray-600">+6601 234 5678,</p>
                  <p className="text-gray-600">+6601 234 5678</p>
                </div>
              </div>
            </div>
          </div>

          <form className="py-8 px-24 mx-24 mt-24 shadow-sm border-[1px]">
            <div className="">
              <h1 className="text-[36px] font-bold text-gray-600">
                Drop Us a Line
              </h1>
              <p className="text-gray-500">
                Your email addres will not be published. Required fields are
                marked.
              </p>
            </div>

            <div className="mt-8">
              <input
                className="w-full px-4 py-3 border-[1px] outline-[#0e5ddd]"
                type="text"
                name=""
                placeholder="Your Name"
              />
            </div>
            <div className="flex mt-4 gap-8">
              <div className="flex-[1]">
                <input
                  className="w-full px-4 py-3 border-[1px] outline-[#0e5ddd]"
                  type="text"
                  name=""
                  placeholder="Email Address"
                />
              </div>
              <div className="flex-[1]">
                <input
                  className="w-full px-4 py-3 border-[1px] outline-[#0e5ddd]"
                  type="number"
                  name=""
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                className="w-full px-4 py-3 border-[1px] outline-[#0e5ddd] resize-none h-[200px]"
                placeholder="Comment"
              ></textarea>
            </div>

            <div className="mt-4">
                <button className="text-white py-3 px-6 font-medium rounded-md bg-[#0e5ddd] outline-none border-[1px] border-[#0e5ddd] hover:bg-white hover:text-[#0e5ddd] transition-all duration-150">Send Message</button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;