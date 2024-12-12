import { GoPerson } from "react-icons/go";

const Profile = () => {
  return (
    <div className="dropdown dropdown-end" role="button">
      <div className="flex items-center max-lg:hidden">
        <GoPerson className="text-4xl mx-2 text-[#14213D] outline-none" tabIndex={0}/>
        <div>
          <p className="text-slate-500 text-sm">Welcome</p>
          <h2 className="whitespace-nowrap text-[#14213D]">Login / Register</h2>
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
