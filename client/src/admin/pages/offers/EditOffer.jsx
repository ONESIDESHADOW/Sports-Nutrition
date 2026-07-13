import { useNavigate, useParams } from "react-router-dom";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import OfferForm from "./OfferForm";

import {
  getOffer,
  updateOffer,
} from "../../../services/offer.service";

const EditOffer = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["offer", id],

    queryFn: async () => {
      const res = await getOffer(id);
      return res.data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData) =>
      updateOffer(id, formData),

    onSuccess: () => {
      toast.success("Offer updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["offers"],
      });

      navigate("/offers");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
        "Failed to update offer"
      );
    },
  });

  if (isLoading) {
    return (
      <div className="text-center py-20">
        Loading Offer...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Offer
        </h1>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <OfferForm
          initialData={data}
          onSubmit={mutate}
          loading={isPending}
        />

      </div>

    </div>
  );
};

export default EditOffer;