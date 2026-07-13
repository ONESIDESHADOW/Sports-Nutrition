import { useState } from "react";
import { useForm } from "react-hook-form";

const BannerForm = ({
  initialData = {},
  onSubmit,
  loading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: initialData.title || "",
      subtitle: initialData.subtitle || "",
      buttonText: initialData.buttonText || "",
      buttonLink: initialData.buttonLink || "",
      order: initialData.order || 1,
      isActive:
        initialData.isActive !== undefined
          ? initialData.isActive
          : true,
    },
  });

  const [preview, setPreview] = useState(
    initialData.image || ""
  );

  const [imageFile, setImageFile] =
    useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImageFile(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const submitHandler = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append(
      "subtitle",
      data.subtitle
    );
    formData.append(
      "buttonText",
      data.buttonText
    );
    formData.append(
      "buttonLink",
      data.buttonLink
    );
    formData.append("order", data.order);
    formData.append(
      "isActive",
      data.isActive
    );

    if (imageFile) {
      formData.append(
        "image",
        imageFile
      );
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(
        submitHandler
      )}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Banner Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 font-semibold">
              Banner Title
            </label>

            <input
              {...register("title", {
                required:
                  "Title is required",
              })}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Summer Sale"
            />

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Display Order
            </label>

            <input
              type="number"
              {...register("order")}
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 font-semibold">
              Subtitle
            </label>

            <textarea
              rows={3}
              {...register("subtitle")}
              className="w-full border rounded-xl p-4"
              placeholder="Write banner subtitle..."
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Button Text
            </label>

            <input
              {...register("buttonText")}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Shop Now"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Button Link
            </label>

            <input
              {...register("buttonLink")}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="/shop"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 font-semibold">
              Banner Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageChange
              }
            />

            {preview && (
              <img
                src={preview}
                alt="Banner Preview"
                className="mt-5 h-56 rounded-xl border object-cover"
              />
            )}

          </div>

          <div className="md:col-span-2">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                {...register("isActive")}
              />

              Active Banner

            </label>

          </div>

        </div>

      </div>

      <div className="flex justify-end">

        <button
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
        >
          {loading
            ? "Saving..."
            : "Save Banner"}
        </button>

      </div>

    </form>
  );
};

export default BannerForm;