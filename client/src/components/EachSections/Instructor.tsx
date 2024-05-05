import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Instructor = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <img
          className="size-28 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <button className="text-xl hover:text-[#0e5ddd] transition-all duration-200">
          Thanakorn Sangmee
        </button>
        <p className="text-sm text-gray-500">Instrucrtor</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fuga
          sunt porro labore quod molestias ab, veniam laudantium culpa animi sit
          laboriosam eum tenetur Adipisci
        </p>
        <div className="flex gap-4">
          <button>
            <FaFacebookF className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
          <button>
            <FaYoutube className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
          <button>
            <FaInstagram className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
          <button>
            <FaXTwitter className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Instructor;
