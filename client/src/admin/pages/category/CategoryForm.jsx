import { useState } from "react";
import { useForm } from "react-hook-form";

const CategoryForm = ({ initialData = {}, onSubmit, loading = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialData.name || "",
      description: initialData.description || "",
      isActive:
        initialData.isActive !== undefined
          ? initialData.isActive
          : true,
    },
  });

  const [preview, setPreview] = useState(
    initialData.image || ""
  );

  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const submitHandler = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("isActive", data.isActive);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Category Information
        </h2>

        <div className="space-y-5">

          <div>

            <label className="font-semibold block mb-2">
              Category Name
            </label>

            <input
              {...register("name", {
                required: "Category name is required",
              })}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Enter category name"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Description
            </label>

            <textarea
              rows={5}
              {...register("description")}
              className="w-full border rounded-xl p-4"
              placeholder="Category description"
            />

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Category Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 h-40 w-40 object-cover rounded-xl border"
              />
            )}

          </div>

          <div>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                {...register("isActive")}
              />

              Active Category

            </label>

          </div>

        </div>

      </div>

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "Saving..." : "Save Category"}
        </button>

      </div>

    </form>
  );
};

export default CategoryForm;