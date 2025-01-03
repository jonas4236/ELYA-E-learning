import { useUserStore } from "@/store/user.store";

const MyProfile = () => {
  const { user } = useUserStore();

  return (
    <>
      <h1 className="text-xl my-6">My Profile</h1>
      <div className="mt-6 w-max">
        <div className="flex w-[600px]">
          <div className="flex-[1]">
            <ul className="flex flex-col gap-4">
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
              <li>{user[0]?.first_name}</li>
              <li>{user[0]?.last_name}</li>
              <li>{user[0]?.username}</li>
              <li>{user[0]?.email}</li>
              <li>{user[0]?.phone}</li>
              <li>{user[0]?.biography}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;