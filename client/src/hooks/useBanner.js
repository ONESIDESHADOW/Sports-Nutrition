import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../services/banner.service";

const useBanners = () => {
  return useQuery({
    queryKey: ["banners"],

    queryFn: async () => {
      const res = await getBanners();
      return res.data;
    },

    staleTime: 1000 * 60 * 5,
  });
};

export default useBanners;