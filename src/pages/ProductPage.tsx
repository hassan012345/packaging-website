import { useParams, Navigate } from "react-router-dom";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { getProductBySlug } from "@/data/products";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/404" replace />;

  return (
    <>
      <ProductPageTemplate product={product} />
    </>
  );
};

export default ProductPage;
