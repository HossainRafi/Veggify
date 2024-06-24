import { Link } from "react-router-dom";

export const DesktopNav = ({ menuItems, logo }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12 mt-4">
      <a href="/">
        <img src={logo} />
      </a>

      {/* Nav Items  */}
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className="font-medium capitalize ">
              {menu}{" "}
            </Link>
          </li>
        ))}
      </ul>

      {/* login & signup button */}
      <ul className="flex items-center gap-4 font-medium">
        <li className="text-secondary px-4 py-2 rounded border-2 border-orange-500 cursor-pointer">
          Log In
        </li>
        <li className="text-secondary px-4 py-2 rounded border-2 border-orange-500 cursor-pointer">
          Sign up
        </li>
      </ul>
    </div>
  );
};
