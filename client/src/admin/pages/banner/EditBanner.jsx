import { useParams, useNavigate } from "react-router-dom";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import BannerForm from "./BannerForm";

import {
  getBanner,
  updateBanner,
} from "../../../services/banner.service";

const EditBanner = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["banner", id],

    queryFn: async () => {
      const res = await getBanner(id);
      return res.data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData) =>
      updateBanner(id, formData),

    onSuccess: () => {
      toast.success("Banner updated!");

      queryClient.invalidateQueries({
        queryKey: ["banners"],
      });

      navigate("/banners");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Update failed"
      );
    },
  });

  if (isLoading)
    return (
      <div className="text-center py-20">
        Loading Banner...
      </div>
    );

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Banner
        </h1>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <BannerForm
          initialData={data}
          onSubmit={mutate}
          loading={isPending}
        />

      </div>

    </div>
  );
};

export default EditBanner;