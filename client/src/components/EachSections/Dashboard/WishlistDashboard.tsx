import { server } from "@/api";
import { useUserStore } from "@/store/user.store";
import { WishlistProps } from "@/Types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import Swal from "sweetalert2";

const WishlistDashboard = () => {
  const [dataWishlist, setDataWishlist] = useState<WishlistProps[]>([]);
  const { user, fetchWishlist } = useUserStore();

  const getWishlish = async () => {
    const { data } = await axios.get(
      server.API_GET_WISHLIST.replace(":uid", String(user[0]?.id))
    );
    setDataWishlist(data);
  };

  useEffect(() => {
    getWishlish();
  }, []);

  const slugText = (text: string) => {
    return slugify(text, {
      lower: true,
      strict: true,
    });
  };

  const deleteWishlist = async (id: string) => {
    try {
      await axios
        .delete(server.API_DEL_WISHLIST.replace(":id", id))
        .then(() => {
          Swal.fire("Successfully", "Deleted wishlist success", "success");
          getWishlish();
          fetchWishlist(String(user[0]?.id));
        });
    } catch (error) {
      console.log("cannot delete wishlist:", (error as Error).message);
    }
  };

  // console.log(dataWishlish);
  return (
    <>
      <div className="">
        <h1 className="text-xl my-6">Wishlist</h1>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {[...dataWishlist]?.reverse().map((val, idx) => (
            <div className="" key={idx}>
              <div className="relative">
                <Link to={`/course/${slugText(val.course_title)}`} className="">
                  <img
                    className="object-cover"
                    src={val.course_img}
                    alt={val.course_title}
                  />
                </Link>
                <button
                  onClick={() => deleteWishlist(String(val.id))}
                  className="absolute top-2 right-4 py-1 px-2 bg-white/50 text-[#0e5ddd] border-[1px] border-[#0e5ddd] rounded-full text-[12px]"
                >
                  X
                </button>
              </div>
              <Link to={"/"} className="">
                <h1 className="pt-2">{val.course_title}</h1>
                <p className="text-sm text-gray-600">{val.course_instructor}</p>
                <span>THB: {val.course_price}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishlistDashboard;
