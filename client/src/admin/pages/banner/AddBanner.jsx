import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import BannerForm from "./BannerForm";
import { createBanner } from "../../../services/banner.service";

const AddBanner = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createBanner,

    onSuccess: () => {
      toast.success("Banner added successfully!");

      queryClient.invalidateQueries({
        queryKey: ["banners"],
      });

      navigate("/banners");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to add banner"
      );
    },
  });

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Add Banner
        </h1>

        <p className="text-gray-500 mt-2">
          Create a new homepage banner.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <BannerForm
          onSubmit={mutate}
          loading={isPending}
        />

      </div>

    </div>
  );
};

export default AddBanner;