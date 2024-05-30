import React from "react";
import IconHome from "../assets/images/icon-home.svg";
import IconOffice from "../assets/images/icon-office.svg";
import IconOther from "../assets/images/pin-location.svg";
import ThreePoints from "../assets/images/three-point.svg";
import DeleteIcon from "../assets/images/delete.svg";
import { Address } from "../types/types";

interface AddressCardProps {
  address: Address;
  onSelect: (address: Address) => void;
  selected: boolean;
  onEdit: (address: Address) => void;
  onDelete: (address: Address) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  onSelect,
  selected,
  onEdit,
  onDelete,
}) => {
  const handleSelect = () => {
    onSelect(address);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "Home":
        return <IconHome className="w-6 h-6 mr-2" />;
      case "Office":
        return <IconOffice className="w-6 h-6 mr-2" />;
      default:
        return <IconOther className="w-6 h-6 mr-2" />;
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit(address);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(address);
  };

  return (
    <div
      onClick={handleSelect}
      className={`relative p-4 border rounded-lg shadow-md mb-4 mt-4 self-center cursor-pointer ${
        selected ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
    >
      <div className="absolute top-2 right-2">
        {selected ? (
          <span className="text-blue-500">✓</span>
        ) : (
          <span className="text-gray-300">○</span>
        )}
      </div>

      <div className="flex items-center">
        {getIcon(address.type)}
        <h2 className="text-xl font-semibold">{address.name}</h2>
      </div>

      <p>{address.description}</p>
      <p>
        {address.planet}, Lote {address.lot}
      </p>
      <p>{address.phone}</p>
      <div className="flex justify-between items-center">
        <a
          href={`https://maps.google.com/?q=${address.coordinates}`}
          className="text-blue-500"
        >
          Ver no mapa
        </a>
        <div className="flex items-center">
          <ThreePoints onClick={handleEdit} className="cursor-pointer mr-2" />
          <DeleteIcon onClick={handleDelete} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
