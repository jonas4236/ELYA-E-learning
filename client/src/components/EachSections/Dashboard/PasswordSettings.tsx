const PasswordSettings = () => {
  return (
    <>
      <form className="mt-8 w-[400px] flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="currentPassword" className="text-md">
            Current Password
          </label>
          <input
            className="p-3 mt-2 rounded-md border-[1px] border-[#ccc] outline-none"
            type="password"
            placeholder="Current Password"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="newPassword" className="text-md">
            New Password
          </label>
          <input
            className="p-3 mt-2 rounded-md border-[1px] border-[#ccc] outline-none"
            type="password"
            placeholder="New Password"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmNewPassword" className="text-md">
            Confirm New Password
          </label>
          <input
            className="p-3 mt-2 rounded-md border-[1px] border-[#ccc] outline-none"
            type="password"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="">
          <button className="p-2 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:text-[#0e5ddd] hover:bg-white transition-all duration-200">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default PasswordSettings;