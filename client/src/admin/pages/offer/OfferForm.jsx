import { useState } from "react";
import { useForm } from "react-hook-form";

const OfferForm = ({
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
      description: initialData.description || "",
      discount: initialData.discount || "",
      couponCode: initialData.couponCode || "",
      expiryDate: initialData.expiryDate
        ? initialData.expiryDate.slice(0, 10)
        : "",
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
      "description",
      data.description
    );
    formData.append(
      "discount",
      data.discount
    );
    formData.append(
      "couponCode",
      data.couponCode
    );
    formData.append(
      "expiryDate",
      data.expiryDate
    );
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
          Offer Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-semibold block mb-2">
              Offer Title
            </label>

            <input
              {...register("title", {
                required:
                  "Title is required",
              })}
              className="w-full border rounded-xl px-4 py-3"
            />

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Discount (%)
            </label>

            <input
              type="number"
              {...register("discount", {
                required: true,
              })}
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div className="md:col-span-2">

            <label className="font-semibold block mb-2">
              Description
            </label>

            <textarea
              rows={4}
              {...register(
                "description"
              )}
              className="w-full border rounded-xl p-4"
            />

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Coupon Code
            </label>

            <input
              {...register(
                "couponCode"
              )}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="SAVE20"
            />

          </div>

          <div>

            <label className="font-semibold block mb-2">
              Expiry Date
            </label>

            <input
              type="date"
              {...register(
                "expiryDate"
              )}
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div className="md:col-span-2">

            <label className="font-semibold block mb-2">
              Offer Banner
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
                alt="Offer"
                className="mt-4 h-48 rounded-xl border object-cover"
              />
            )}

          </div>

          <div className="md:col-span-2">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                {...register(
                  "isActive"
                )}
              />

              Active Offer

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
            : "Save Offer"}
        </button>

      </div>

    </form>
  );
};

export default OfferForm;