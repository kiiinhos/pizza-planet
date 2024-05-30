import { useRouter } from "next/router";
import React from "react";

const MapPage: React.FC = () => {
  const router = useRouter();
  const address = JSON.parse(router.query.address as string);

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 flex justify-between items-center bg-white shadow">
        <button onClick={() => router.back()} className="text-blue-500">
          &larr; Back
        </button>
        <h1 className="text-lg font-semibold">
          Confirm your order delivery location
        </h1>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://maps.google.com/maps?q=${address.coordinates}&z=15&output=embed`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="p-4 bg-white shadow">
        <h2 className="text-xl font-semibold">{address.name}</h2>
        <p>{address.description}</p>
        <p>
          {address.planet}, Lote {address.lot}
        </p>
        <p>{address.phone}</p>
        <button className="w-full mt-4 bg-blue-500 text-white p-4 rounded">
          Confirm and add details
        </button>
      </div>
    </div>
  );
};

export default MapPage;
