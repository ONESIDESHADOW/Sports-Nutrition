import { useQuery } from "@tanstack/react-query";
import { getOffers } from "../services/offer.service";

const useOffers = () => {
  return useQuery({
    queryKey: ["offers"],

    queryFn: async () => {
      const res = await getOffers();
      return res.data;
    },

    staleTime: 1000 * 60 * 5,
  });
};

export default useOffers;