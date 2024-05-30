import React, { useState } from "react";
import AddIcon from "../../assets/images/icon-add.svg";
import AddressFormModal from "../modal/AddressFormModal";
import api from "../../utils/api";

interface AddNewAddressButtonProps {
  onOpenChange: (isOpen: boolean) => void;
}

const AddNewAddressButton: React.FC<AddNewAddressButtonProps> = ({
  onOpenChange,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    onOpenChange(true); // Notifica o componente pai que o modal está aberto
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    onOpenChange(false); // Notifica o componente pai que o modal está fechado
  };

  const handleSaveAddress = (address: any) => {
    api.post("/address", address).then(() => {
      handleCloseModal();
    });
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="flex justify-start items-center bg-blue-100 text-blue-500 font-medium py-2 px-4 rounded-lg cursor-pointer"
      >
        <AddIcon className="h-5 w-5 mr-2" />
        Add New Address
      </div>
      <AddressFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
      />
    </>
  );
};

export default AddNewAddressButton;
