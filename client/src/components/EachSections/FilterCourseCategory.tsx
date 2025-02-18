import Container from "../Container";
import { FaXmark } from "react-icons/fa6";

const FilterCourseCategory = () => {
  const starsSelector = ["5", "4", "3", "2", "1"];

  return (
    <>
      <Container>
        <div className="flex justify-between">
          <div className="">
            <div className="flex gap-4">
              <div className="flex-[1] w-[300px]">
                <h1 className="text-xl">Stars</h1>
                {starsSelector.map((val, idx) => (
                  <div key={idx}>
                    <label
                      htmlFor={val}
                      className="flex flex-row text-center cursor-pointer items-center mt-4 py-2 px-4 border-[1px] rounded-md hover:bg-[#0e5ddd] hover:border-transparent LinkText transition-all duration-150"
                    >
                      <input
                        className="size-8 cursor-pointer"
                        type="checkbox"
                        name={val}
                        id={val}
                      />
                      <span className="w-full iconCourse">{val} Stars</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <button className="flex items-center py-2 px-3 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-white transition-all duration-150 hover:text-[#0e5ddd]">
              <FaXmark className="mr-2" />
              Clear All Filters
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FilterCourseCategory;