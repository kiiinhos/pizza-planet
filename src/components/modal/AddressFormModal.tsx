import React, { useState, useEffect } from "react";
import IconClose from "../../assets/images/close.svg";
import IconHome from "../../assets/images/icon-home.svg";
import IconOffice from "../../assets/images/icon-office.svg";
import IconFriendHouse from "../../assets/images/icon-friend-house.svg";
import { Address } from "../../types/types";

interface AddressFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: Address) => void;
  initialData?: Address | null;
}

const AddressFormModal: React.FC<AddressFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [address, setAddress] = useState<Address>({
    id: 0,
    name: "",
    description: "",
    planet: "",
    lot: 0,
    phone: "",
    coordinates: "",
    type: "",
  });

  const coordinatesOptions = [
    "37.7749,-122.4194",
    "34.0522,-118.2437",
    "40.7128,-74.0060",
  ];

  useEffect(() => {
    if (initialData) {
      setAddress(initialData);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: name === "lot" ? Number(value) : value,
    }));
  };

  const handleSave = () => {
    onSave(address);
    onClose();
  };

  const handleIconClick = (type: string) => {
    setAddress({ ...address, type });
  };

  return (
    <div
      id="address-modal"
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="relative w-full max-w-lg bg-white rounded-t-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {initialData ? "Edit Address" : "Add Address"}
          </h3>
          <button onClick={onClose}>
            <IconClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">
            Complete address would assist better us in serving you
          </p>
        </div>
        <div className="mb-4 flex space-x-2">
          <button
            className={`flex items-center px-2 py-1 border rounded-lg ${
              address.type === "Home" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleIconClick("Home")}
          >
            <IconHome className="w-6 h-6 mr-2" />
            Home
          </button>
          <button
            className={`flex items-center px-2 py-1 border rounded-lg ${
              address.type === "Office" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleIconClick("Office")}
          >
            <IconOffice className="w-6 h-6 mr-2" />
            Office
          </button>
          <button
            className={`flex items-center px-2 py-1 border rounded-lg ${
              address.type === "Friend&apos;s house" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleIconClick("Friend&apos;s house")}
          >
            <IconFriendHouse className="w-6 h-6 mr-2" />
            Friend&apos;s house
          </button>
        </div>
        <div className="mb-4">
          <input
            name="name"
            value={address.name}
            onChange={handleChange}
            placeholder="Receiver's name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="description"
            value={address.description}
            onChange={handleChange}
            placeholder="Complete address"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="planet"
            value={address.planet}
            onChange={handleChange}
            placeholder="Planet"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="lot"
            value={address.lot}
            onChange={handleChange}
            placeholder="Lot"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="phone"
            value={address.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 relative">
          <select
            name="coordinates"
            value={address.coordinates}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg appearance-none"
            style={{ display: "block", position: "absolute", bottom: 0 }}
          >
            <option value="" disabled>
              Select Coordinates
            </option>
            {coordinatesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="w-full bg-blue-700 text-white py-2 rounded-lg"
          >
            {initialData ? "Save changes" : "Save address"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressFormModal;
