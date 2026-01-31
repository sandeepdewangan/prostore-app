import { Button } from "@/components/ui/button";
import getAllProducts from "@/lib/actions/admin/products";
import Link from "next/link";

const Products = async (props: {
  searchParams: Promise<{ page: string; query: string; category: string }>;
}) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const searchText = searchParams.query || "";
  const category = searchParams.category || "";

  const products = await getAllProducts({ query: searchText, page, category });

  return (
    <div>
      <h1 className="text-4xl">Products</h1>
      <Button size="sm" asChild>
        <Link href="">Add Product</Link>
      </Button>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Brand
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Description
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Stock
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Rating
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.data.map((product) => (
              <tr
                className="bg-neutral-primary border-b border-default"
                key={product.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.rating}</td>
                <td className="px-6 py-4 flex space-x-1">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="">Update</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="">Delete</Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Displaying page numbers */}
        {products?.totalPages && products.totalPages > 1 && (
          <div>
            {page !== 1 && <a href={`?page=${page - 1}`}>⏮️ Previous</a>}({page}{" "}
            of {products.totalPages}) Pages
            {page !== products.totalPages && (
              <a href={`?page=${page + 1}`}>⏭️ Next</a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
