import { Link } from "react-router-dom";

export const CategoryItem = ({ name, href, bgColor, color }) => {
  const style = {
    backgroundColor: bgColor,
    color: color,
    borderColor: color,
  };
  return (
    <div>
      <Link to={href} className="rounded-full">
        <div
          className="uppercase px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
};
