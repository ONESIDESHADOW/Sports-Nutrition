const products = [
  {
    id: 1,
    name: "Robinson Zero Whey",
    category: "Protein",
    price: "₹5500",
    stock: 18,
  },
  {
    id: 2,
    name: "Fitsique Anabolic",
    category: "Mass Gainer",
    price: "₹3500",
    stock: 30,
  },
  {
    id: 3,
    name: "L-Carnitine",
    category: "Fat Burner",
    price: "₹1100",
    stock: 40,
  },
];

const LatestProducts = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Latest Products
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="py-3">Product</th>

            <th>Category</th>

            <th>Price</th>

            <th>Stock</th>

          </tr>

        </thead>

        <tbody>

          {products.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-3">{item.name}</td>

              <td>{item.category}</td>

              <td>{item.price}</td>

              <td>{item.stock}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default LatestProducts;