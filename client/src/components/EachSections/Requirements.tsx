import { GoDotFill } from "react-icons/go";

const Requirements = () => {
  return (
    <div className="mt-8">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center">
          <GoDotFill className="mr-2 text-md text-[#0e5ddd]" />
          Basic Programming
        </li>
        <li className="flex items-center">
          <GoDotFill className="mr-2 text-md text-[#0e5ddd]" />
          Daily Update
        </li>
        <li className="flex items-center">
          <GoDotFill className="mr-2 text-md text-[#0e5ddd]" />
          Routine Study
        </li>
        <li className="flex items-center">
          <GoDotFill className="mr-2 text-md text-[#0e5ddd]" />
          Regular Join Class
        </li>
      </ul>
    </div>
  );
};

export default Requirements;