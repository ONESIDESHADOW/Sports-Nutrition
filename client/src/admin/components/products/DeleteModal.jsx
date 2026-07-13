const DeleteModal = ({
  open,
  onClose,
  onConfirm,
  loading,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-96 p-6">

        <h2 className="text-2xl font-bold mb-4">
          Delete Product
        </h2>

        <p className="text-gray-600">
          Are you sure you want to delete this
          product?
        </p>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-red-600 text-white"
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

export default DeleteModal;