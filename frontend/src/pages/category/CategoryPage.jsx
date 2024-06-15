import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { category } = useParams();
  
  return (
    <div className="px6 lg:px-12 py-20">
      <h1>{category}</h1>
    </div>
  );
};
