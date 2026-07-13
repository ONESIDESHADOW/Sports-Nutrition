import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product.service";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await getProducts();
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useProducts;