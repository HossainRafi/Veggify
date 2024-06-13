import { Link } from "react-router-dom";

export const DesktopNav = ({ menuItems, logo }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} />
      </a>

      {/* ========= Nav Items ========= */}
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link to="/" className="font-medium capitalize ">{menu} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
