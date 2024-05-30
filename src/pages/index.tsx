import React, { useEffect, useState } from "react";
import AddressCard from "../components/AddressCard";
import api from "../utils/api";
import { Address } from "../types/types";
import Header from "../components/Header";
import AddNewAddressButton from "../components/buttons/AddNewAddressButton";
import ConfirmAddressModal from "../components/modal/ConfirmAddressModal";
import EditAddressModal from "../components/modal/EditAddressModal";
import ConfirmDeleteModal from "../components/modal/ConfirmDeleteModal";
import NavigationMenu from "../components/NavigationMenu";
import AddressFormModal from "../components/modal/AddressFormModal";

const HomePage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    const response = await api.get("/address");
    setAddresses(response.data);
  };

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAddress(null);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleEditAddress = (address: Address) => {
    setSelectedAddress(address);
    setIsEditModalOpen(true);
  };

  const handleSaveAddress = async (updatedAddress: Address) => {
    await api.patch(`/address/${updatedAddress.id}`, updatedAddress);
    await fetchAddresses();
    setIsEditModalOpen(false);
  };

  const handleDeleteAddress = (address: Address) => {
    setSelectedAddress(address);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedAddress) {
      await api.delete(`/address/${selectedAddress.id}`);
      await fetchAddresses();
      setIsDeleteModalOpen(false);
    }
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <AddNewAddressButton />
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          onSelect={handleAddressSelect}
          selected={selectedAddress?.id === address.id}
          onEdit={handleEditAddress}
          onDelete={handleDeleteAddress}
        />
      ))}
      {selectedAddress && (
        <ConfirmAddressModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          address={selectedAddress}
        />
      )}
      {selectedAddress && (
        <EditAddressModal
          address={selectedAddress}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveAddress}
        />
      )}
      {selectedAddress && (
        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      <AddressFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSave={handleSaveAddress}
        onOpenChange={(isOpen) => setIsFormModalOpen(isOpen)}
      />
      <NavigationMenu
        isVisible={
          !isModalOpen &&
          !isEditModalOpen &&
          !isDeleteModalOpen &&
          !isFormModalOpen
        }
      />
    </div>
  );
};

export default HomePage;
