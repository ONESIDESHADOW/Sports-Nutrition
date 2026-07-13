const DeleteBannerModal = ({
  open,
  loading,
  onClose,
  onConfirm,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-96 p-6">

        <h2 className="text-2xl font-bold mb-4">
          Delete Banner
        </h2>

        <p className="text-gray-600 mb-8">
          Are you sure you want to delete this banner?
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            disabled={loading}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteBannerModal;