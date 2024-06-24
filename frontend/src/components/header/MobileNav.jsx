import { FaBars } from "react-icons/fa6";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <>
      <div className="h-16 flex justify-between items-center px-6 lg:px-12 mt-4">
        <a href="/">
          <img src={logo} />
        </a>

        {/* open menu btn */}
        <button onClick={onOpen} className="border border-primary rounded">
          <FaBars className="w-6 h-6" />
        </button>

        {/* close menu btn */}
        <div
          className={`transition-all w-full h-full fixed bg-primary z-50 top-0 flex justify-center items-center ${hideLeft}`}
        >
          <button onClick={onClose} className="absolute right-32 top-32">
            <RiCloseCircleLine className="w-9 h-9" />
          </button>

          {/* mobile menu */}
          <div>
            <ul className="flex flex-col gap-5">
              {menuItems?.map((menu, index) => (
                <li key={index}>
                  <Link
                    to={menu}
                    className="font-medium capitalize text-secondary text-2xl"
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>

            {/* login & signup button */}
            <ul className="flex items-center gap-4 font-medium mt-8">
              <li className="text-secondary px-4 py-2 rounded border-2">
                Log In
              </li>
              <li className="text-secondary px-4 py-2 rounded border-2">
                Sign up
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
