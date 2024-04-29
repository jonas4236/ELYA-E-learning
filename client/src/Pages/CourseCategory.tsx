import Container from "@/components/Container";

const CourseCategory = () => {
  return (
    <>
      <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-90 bg-cover bg-center h-[450px]">
        <div className="h-[450px] flex flex-col justify-center items-center">
          <h1 className="text-white text-[42px]">Ui & Ux Design</h1>
        </div>
      </div>
      <div className="h-[120vh]">
        <Container>
          <div className="flex justify-between mt-8">
            <div className="">
              <div className="">
                <input className="py-2 px-4 w-[300px] border-[1px] border-[#0e5ddd] rounded-lg" type="text" placeholder="Searching Courses" />
              </div>
            </div>
            <div className="">s</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CourseCategory;
