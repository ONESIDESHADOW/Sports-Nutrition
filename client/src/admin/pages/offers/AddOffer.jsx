import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import OfferForm from "./OfferForm";
import { createOffer } from "../../../services/offer.service";

const AddOffer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createOffer,

    onSuccess: () => {
      toast.success("Offer added successfully!");

      queryClient.invalidateQueries({
        queryKey: ["offers"],
      });

      navigate("/offers");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
        "Failed to create offer"
      );
    },
  });

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Add Offer
        </h1>

        <p className="text-gray-500 mt-2">
          Create a new offer.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <OfferForm
          onSubmit={mutate}
          loading={isPending}
        />

      </div>

    </div>
  );
};

export default AddOffer;