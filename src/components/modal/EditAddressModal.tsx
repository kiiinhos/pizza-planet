import React, { useState, useEffect } from "react";
import IconClose from "../../assets/images/close.svg";
import IconHome from "../../assets/images/icon-home.svg";
import IconOffice from "../../assets/images/icon-office.svg";
import IconFriendHouse from "../../assets/images/icon-friend-house.svg";
import { Address } from "../../types/types";

interface EditAddressModalProps {
  address: Address;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedAddress: Address) => void;
}

const EditAddressModal: React.FC<EditAddressModalProps> = ({
  address,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState(address);

  useEffect(() => {
    setFormData(address);
  }, [address]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleIconClick = (type: string) => {
    setFormData({ ...formData, type });
  };

  const coordinatesOptions = [
    "37.7749,-122.4194",
    "34.0522,-118.2437",
    "40.7128,-74.0060",
  ];

  return (
    <div
      id="edit-address-modal"
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="relative w-full max-w-lg bg-white rounded-t-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Address</h3>
          <button onClick={onClose}>
            <IconClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Update the address details below.</p>
        </div>
        <div className="mb-4 flex space-x-2">
          <button
            className={`flex items-center px-2 py-1 border rounded-lg ${
              formData.type === "Home" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleIconClick("Home")}
          >
            <IconHome className="w-6 h-6 mr-2" />
            Home
          </button>
          <button
            className={`flex items-center px-2 py-1 border rounded-lg ${
              formData.type === "Office" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleIconClick("Office")}
          >
            <IconOffice className="w-6 h-6 mr-2" />
            Office
          </button>
          <button
            className={`flex items-center px-2 py-1 border rounded-lg ${
              formData.type === "Friend's house" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleIconClick("Friend's house")}
          >
            <IconFriendHouse className="w-6 h-6 mr-2" />
            Friend's house
          </button>
        </div>
        <div className="mb-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Receiver's name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Complete address"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 relative">
          <select
            name="coordinates"
            value={formData.coordinates}
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
        <div className="mb-4">
          <input
            name="planet"
            value={formData.planet}
            onChange={handleChange}
            placeholder="Planet"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="lot"
            value={formData.lot}
            onChange={handleChange}
            placeholder="Lot"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="w-1/2 bg-blue-700 text-white py-2 rounded-lg"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAddressModal;
