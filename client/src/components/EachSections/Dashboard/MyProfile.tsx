const MyProfile = () => {
  return (
    <>
      <h1 className="text-xl my-6">My Profile</h1>
      <div className="mt-6 w-max">
        <div className="flex w-[600px]">
          <div className="flex-[1]">
            <ul className="flex flex-col gap-4">
              <li>Registration Date</li>
              <li>First Name</li>
              <li>Last Name</li>
              <li>Username</li>
              <li>Email</li>
              <li>Phone Number</li>
              <li>Biography</li>
            </ul>
          </div>
          <div className="flex-[1]">
            <ul className="flex flex-col gap-4">
              <li>April 24, 2024 8:23am</li>
              <li>Thanakorn</li>
              <li>Sangmee</li>
              <li>Jonas</li>
              <li>Thanakorn@gmail.com</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
