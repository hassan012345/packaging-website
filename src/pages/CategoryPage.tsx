import { useParams, Navigate } from "react-router-dom";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { getCategoryBySlug } from "@/data/categories";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) return <Navigate to="/404" replace />;

  return (
    <>
      <CategoryPageTemplate category={category} />
    </>
  );
};

export default CategoryPage;
