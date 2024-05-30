import React from "react";
import ConfirmLocationIcon from "../../assets/images/confirm-location.svg";
import CloseIcon from "../../assets/images/close.svg";

interface ConfirmAddressModalProps {
  address: any;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmAddressModal: React.FC<ConfirmAddressModalProps> = ({
  address,
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen || !address) return null;

  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-hidden={!isOpen}
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center w-full mr-5">
                Confirm your order delivery location
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <CloseIcon className="w-4 h-4" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex items-center">
              <ConfirmLocationIcon className="w-10 h-10 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{address.name}</h2>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {address.description}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {address.planet}, Lote {address.lot}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {address.phone}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onConfirm}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm and add details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAddressModal;
