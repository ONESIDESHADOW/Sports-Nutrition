import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import BannerToolbar from "../../components/banners/BannerToolbar";
import BannerTable from "../../components/banners/BannerTable";
import useBanners from "../../../hooks/useBanners";

const BannerList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useBanners();

  const banners = data?.banners || data || [];

  const filteredBanners = useMemo(() => {
    return banners.filter((banner) => {
      const matchSearch =
        banner.title
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        status === ""
          ? true
          : banner.isActive ===
            (status === "true");

      return (
        matchSearch &&
        matchStatus
      );
    });
  }, [
    banners,
    search,
    status,
  ]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        Loading banners...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-xl p-10 text-center text-red-500">
        Failed to load banners.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Banner Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage homepage banners.
        </p>

      </div>

      <BannerToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onRefresh={refetch}
        onAdd={() =>
          navigate("/banners/add")
        }
      />

      <BannerTable
        banners={filteredBanners}
      />

    </div>
  );
};

export default BannerList;