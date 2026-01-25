import ProductList from "@/components/product/product_list";
import { products } from "@/db/sample_data";

export const metadata = {
  title: "Home",
};

const Home = async () => {
  return (
    <div>
      {/* Products Tile */}
      <ProductList data={products.slice(0, 3)} title="Latest Products" />
    </div>
  );
};

export default Home;
