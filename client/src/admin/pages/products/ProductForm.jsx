import { useState } from "react";
import { useForm } from "react-hook-form";

const ProductForm = ({ initialData = {}, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialData.name || "",
      category: initialData.category || "",
      brand: initialData.brand || "",
      flavour: initialData.flavour || "",
      price: initialData.price || "",
      mrp: initialData.mrp || "",
      stock: initialData.stock || "",
      description: initialData.description || "",
      featured: initialData.featured || false,
      bestSeller: initialData.bestSeller || false,
      newArrival: initialData.newArrival || false,
      isActive:
        initialData.isActive !== undefined
          ? initialData.isActive
          : true,
    },
  });

const [previewImages, setPreviewImages] = useState([]);
const [selectedFiles, setSelectedFiles] = useState([]);

const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  setSelectedFiles(files);

  const previews = files.map((file) => ({
    file,
    url: URL.createObjectURL(file),
  }));

  setPreviewImages(previews);
};

const submitHandler = (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("category", data.category);
  formData.append("brand", data.brand);
  formData.append("flavour", data.flavour);
  formData.append("price", data.price);
  formData.append("mrp", data.mrp);
  formData.append("stock", data.stock);
  formData.append("description", data.description);

  formData.append("featured", data.featured);
  formData.append("bestSeller", data.bestSeller);
  formData.append("newArrival", data.newArrival);
  formData.append("isActive", data.isActive);

  selectedFiles.forEach((file) => {
    formData.append("images", file);
  });

  onSubmit(formData);
};

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-8"
    >
      {/* Product Information */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Product Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-semibold">
              Product Name
            </label>

            <input
              {...register("name", {
                required: "Product name is required",
              })}
              className="w-full mt-2 border rounded-xl px-4 py-3"
              placeholder="Product Name"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-semibold">
              Category
            </label>

            <select
              {...register("category", {
                required: true,
              })}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >
              <option value="">
                Select Category
              </option>

              <option value="Protein">
                Protein
              </option>

              <option value="Mass Gainer">
                Mass Gainer
              </option>

              <option value="Creatine">
                Creatine
              </option>

              <option value="Fat Burner">
                Fat Burner
              </option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Brand
            </label>

            <input
              {...register("brand")}
              className="w-full mt-2 border rounded-xl px-4 py-3"
              placeholder="Brand"
            />

          </div>

          <div>

            <label className="font-semibold">
              Flavour
            </label>

            <input
              {...register("flavour")}
              className="w-full mt-2 border rounded-xl px-4 py-3"
              placeholder="Chocolate"
            />

          </div>

        </div>

      </div>

      {/* Pricing */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <label className="font-semibold">
              Selling Price
            </label>

            <input
              type="number"
              {...register("price", {
                required: true,
              })}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              MRP
            </label>

            <input
              type="number"
              {...register("mrp")}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Stock
            </label>

            <input
              type="number"
              {...register("stock")}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

        </div>

      </div>

      {/* Description */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Description
        </h2>

        <textarea
          rows={6}
          {...register("description")}
          className="w-full border rounded-xl p-4"
          placeholder="Product Description..."
        />

      </div>

      {/* Images */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Product Images
        </h2>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="mb-6"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {previewImages.map((image, index) => (

            <div key={index}>

              <img
                src={image.url || image}
                alt=""
                className="w-full h-40 object-cover rounded-xl border"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Product Options */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Product Options
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              {...register("featured")}
            />

            Featured Product

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              {...register("bestSeller")}
            />

            Best Seller

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              {...register("newArrival")}
            />

            New Arrival

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              {...register("isActive")}
            />

            Active Product

          </label>

        </div>

      </div>

      {/* Submit */}

      <div className="flex justify-end">

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-xl font-semibold transition"
        >
          Save Product
        </button>

      </div>

    </form>
  );
};

export default ProductForm;