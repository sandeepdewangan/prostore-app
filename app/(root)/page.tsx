import ProductList from "@/components/product/product_list";
import { getLatestProducts } from "@/lib/actions/products";

export const metadata = {
  title: "Home",
};

const Home = async () => {
  const latestProducts = await getLatestProducts(3);

  return (
    <div>
      {/* Products Tile */}
      <ProductList data={latestProducts} title="Latest Products" />
    </div>
  );
};

export default Home;
