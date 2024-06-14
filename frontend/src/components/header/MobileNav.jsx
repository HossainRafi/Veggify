import { FaBars } from "react-icons/fa6";
import { RiCloseCircleLine } from "react-icons/ri";

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <>
      <div className="h-16 flex justify-between items-center px-6 lg:px-12">
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
        </div>
        
      </div>
    </>
  );
};

export default MobileNav;
