import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/category.service";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await getCategories();
      return res.data;
    },
  });
};

export default useCategories;