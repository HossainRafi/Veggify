import { useState } from "react";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");

// ======== Navigation Menu =========
  const menuItems = ["recipes", "resources", "about", "contact"];

  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden">Desktop View</div>
      <div className="min-[900px]:hidden">Mobile View</div>
    </>
  );
};

export default Header;
