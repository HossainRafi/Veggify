import { CategoryItem } from "./CategoryItem";

export const CategoryList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      <CategoryItem
        name="entrees"
        href="/categories/entrees"
        bgColor="#f0f5c4"
        color="#59871f"
      />
      <CategoryItem
        name="breakfast"
        href="/categories/breakfast"
        bgColor="#efedfa"
        color="#3c3a8f"
      />
      <CategoryItem
        name="lunch"
        href="/categories/lunch"
        bgColor="#e5f7f3"
        color="#1f8787"
      />
      <CategoryItem
        name="desserts"
        href="/categories/desserts"
        bgColor="#e8f5fa"
        color="#397a9e"
      />
      <CategoryItem
        name="sides"
        href="/categories/sides"
        bgColor="#feefc9"
        color="#d16400"
      />
      <CategoryItem
        name="drinks"
        href="/categories/drinks"
        bgColor="#ffeae3"
        color="#fo493e"
      />
    </div>
  );
};
