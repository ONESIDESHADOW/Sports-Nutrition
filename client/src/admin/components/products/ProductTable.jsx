import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import ProductRow from "./ProductRow";
import DeleteModal from "./DeleteModal";
import { deleteProduct } from "../../../services/product.service";

const ProductTable = ({ products = [] }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      toast.success("Product deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      setOpenDelete(false);
      setSelectedProduct(null);
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to delete product"
      );
    },
  });

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setOpenDelete(true);
  };

  const confirmDelete = () => {
    if (!selectedProduct) return;

    mutate(selectedProduct._id);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Image</th>
              <th className="text-left">Name</th>
              <th className="text-left">Category</th>
              <th className="text-left">Price</th>
              <th className="text-left">Stock</th>
              <th className="text-left">Featured</th>
              <th className="text-left">Status</th>
              <th className="text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {products.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500"
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
                    navigate(`/products/edit/${id}`)
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
        loading={isPending}
        onClose={() => setOpenDelete(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default ProductTable;