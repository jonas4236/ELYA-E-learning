import { Link } from "react-router-dom";

const WishlistDashboard = () => {
  const dummyImg =
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="">
        <h1 className="text-xl my-6">Wishlist</h1>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="">
            <div className="relative">
              <Link to={"/"} className="">
                <img
                  className="object-cover"
                  src={dummyImg as string}
                  alt="IMG_COURSE"
                />
              </Link>
              <button className="absolute top-2 right-4 py-1 px-2 bg-white/50 text-[#0e5ddd] border-[1px] border-[#0e5ddd] rounded-full text-[12px]">
                X
              </button>
            </div>
            <Link to={"/"} className="">
              <h1 className="pt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <span>THB: 329</span>
            </Link>
          </div>
          <div className="">
            <div className="relative">
              <Link to={"/"} className="">
                <img
                  className="object-cover"
                  src={dummyImg as string}
                  alt="IMG_COURSE"
                />
              </Link>
              <button className="absolute top-2 right-4 py-1 px-2 bg-white/50 text-[#0e5ddd] border-[1px] border-[#0e5ddd] rounded-full text-[12px]">
                X
              </button>
            </div>
            <Link to={"/"} className="">
              <h1 className="pt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <span>THB: 329</span>
            </Link>
          </div>
          <div className="">
            <div className="relative">
              <Link to={"/"} className="">
                <img
                  className="object-cover"
                  src={dummyImg as string}
                  alt="IMG_COURSE"
                />
              </Link>
              <button className="absolute top-2 right-4 py-1 px-2 bg-white/50 text-[#0e5ddd] border-[1px] border-[#0e5ddd] rounded-full text-[12px]">
                X
              </button>
            </div>
            <Link to={"/"} className="">
              <h1 className="pt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <span>THB: 329</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistDashboard;