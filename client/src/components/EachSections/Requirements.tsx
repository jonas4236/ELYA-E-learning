import { RequirementProps } from "@/Types";
import { GoDotFill } from "react-icons/go";

const Requirements = ({ data }: { data: RequirementProps[] }) => {
  return (
    <div className="mt-8">
      <ul className="flex flex-col gap-4">
        {data && data.map((val, idx) => (
          <li key={idx} className="flex items-center">
          <GoDotFill className="mr-2 text-md text-[#0e5ddd]" />
          {val.require_name}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Requirements;