import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductRow from "./ProductRow";
import DeleteModal from "./DeleteModal";

const ProductTable = ({
  products = [],
}) => {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [openDelete, setOpenDelete] =
    useState(false);

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setOpenDelete(true);
  };

  const confirmDelete = () => {
    console.log(
      "Delete",
      selectedProduct
    );

    setOpenDelete(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th>Name</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Featured</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {products.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-12"
                >
                  No Products Found
                </td>

              </tr>

            ) : (

              products.map((product) => (
                <ProductRow
                  key={product._id}
                  product={product}
                  onEdit={(id) =>
                    navigate(
                      `/products/edit/${id}`
                    )
                  }
                  onDelete={handleDelete}
                />
              ))

            )}

          </tbody>

        </table>

      </div>

      <DeleteModal
        open={openDelete}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default ProductTable;