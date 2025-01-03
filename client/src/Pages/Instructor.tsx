import Container from "@/components/Container";
import BiographyCourse from "@/components/EachSections/BiographyCourse";
import { IoIosStar } from "react-icons/io";

const Instructor = () => {
  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">Thanakorn Sangmee</h1>
              <p className="text-white text-[18px] mt-4">
                Home <span className="mr-2">&gt;</span>Instructor
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="my-16 h-0">
            <div className="h-[0px] rounded-lg bg-cover">
              <img
                className="h-[400px] w-full rounded-lg object-cover relative"
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
                alt="Thanakorn Sangmee - 9 Courses"
              />
            </div>

            <div className="relative top-[240px] left-[360px] w-max text-white font-medium ">
              <h1 className="text-[36px]">Thanakorn Sangmee</h1>
              <p className="text-[24px]">
                9 Courses on{" "}
                <span className="text-[#0e5ddd] font-semibold">ELYA</span>
              </p>
            </div>
            <span className="relative text-[24px] top-[240px] left-[360px] w-max text-yellow-400 font-medium flex items-center">
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              5/5
            </span>
          </div>

          <div className="relative left-16 top-48 w-max">
            <img
              className="size-64 p-2 bg-white object-cover rounded-full"
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="mt-[120px] ml-[360px]">
            <span className="text-[24px] text-[#0e5ddd] font-medium">
              Biography
            </span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              mollitia illum dolorum minus quo quas sapiente quae ad vitae
              minima, ullam quos accusantium reprehenderit amet eum adipisci
              placeat, dignissimos magnam neque? Dolore quisquam labore,
              pariatur doloremque unde mollitia accusantium fugit, ipsam
              assumenda consectetur voluptates repudiandae corrupti reiciendis
              aspernatur delectus iure.
            </p>
            <div className="mt-6">
              <h1 className="text-xl text-[#0e5ddd] font-medium">Courses</h1>
              <div className="mt-6">
                <div className="grid grid-cols-3">
                  <BiographyCourse />
                </div>
                <div className="w-full flex justify-center mt-6">
                  <button className=" py-2 px-4 bg-[#0e5ddd] text-white font-medium rounded-lg hover:text-[#0e5ddd] hover:bg-white border-[1px] border-[#0e5ddd] transition-all duration-200">
                    SHOW MORE
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

export default Instructor;