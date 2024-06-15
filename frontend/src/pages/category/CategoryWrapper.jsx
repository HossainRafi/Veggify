import { Link } from "react-router-dom";

function CategoryItem() {
  return (
    <div>
      <Link to={"/"}>
        <div>Name</div>
      </Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      <CategoryItem />
    </div>
  );
}

export const CategoryWrapper = () => {
  return (
    <div>
      <CategoryList />
    </div>
  );
};
