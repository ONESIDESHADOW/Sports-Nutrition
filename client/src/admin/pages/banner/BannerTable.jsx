import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import BannerRow from "./BannerRow";
import DeleteBannerModal from "./DeleteBannerModal";

import {
  deleteBanner,
} from "../../../services/banner.service";

const BannerTable = ({
  banners = [],
}) => {
  const navigate = useNavigate();

  const queryClient =
    useQueryClient();

  const [selectedBanner, setSelectedBanner] =
    useState(null);

  const [openDelete, setOpenDelete] =
    useState(false);

  const { mutate, isPending } =
    useMutation({
      mutationFn: deleteBanner,

      onSuccess: () => {
        toast.success(
          "Banner deleted successfully"
        );

        queryClient.invalidateQueries({
          queryKey: ["banners"],
        });

        setOpenDelete(false);

        setSelectedBanner(null);
      },

      onError: () => {
        toast.error(
          "Failed to delete banner"
        );
      },
    });

  const handleDelete = (
    banner
  ) => {
    setSelectedBanner(banner);

    setOpenDelete(true);
  };

  const confirmDelete = () => {
    if (!selectedBanner) return;

    mutate(selectedBanner._id);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th>Title</th>

              <th>Subtitle</th>

              <th>Order</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {banners.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-12 text-center text-gray-500"
                >
                  No Banners Found
                </td>

              </tr>

            ) : (

              banners.map(
                (banner) => (

                  <BannerRow
                    key={banner._id}
                    banner={banner}
                    onEdit={(id) =>
                      navigate(
                        `/banners/edit/${id}`
                      )
                    }
                    onDelete={
                      handleDelete
                    }
                  />

                )
              )

            )}

          </tbody>

        </table>

      </div>

      <DeleteBannerModal
        open={openDelete}
        loading={isPending}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default BannerTable;