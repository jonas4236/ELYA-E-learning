import Container from "@/components/Container";

const Learn = () => {
  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">
                AWS Certified Solutions Architect Associate
              </h1>
              <p className="text-white text-[18px] mt-4">
                Lessons <span className="mr-2">&gt;</span>AWS Certified Solutions
                Architect Associate
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="mt-24">
            <div className="flex gap-4">
                <div className="flex-[2]">a</div>
                <div className="flex-[1]">s</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Learn;
