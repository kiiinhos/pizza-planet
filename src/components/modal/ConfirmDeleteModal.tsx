import React from "react";
import IconClose from "../../assets/images/close.svg";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="confirm-delete-modal"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Delete Address</h3>
          <button onClick={onClose}>
            <IconClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">
            Are you sure you want to delete this address?
          </p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="w-1/2 bg-gray-300 text-black py-2 rounded-lg mr-2"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="w-1/2 bg-red-700 text-white py-2 rounded-lg ml-2"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
