import React from "react";

interface CartProps {
  id: string;
  name: string;
  price: number,
  selected: boolean;
  onSelectChange?: (id: string, selected: boolean) => void;
}

const Cart: React.FC<CartProps> = ({
  id,
  name,
  price,
  selected,
  onSelectChange,
}) => {

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelectChange) {
      onSelectChange(id, e.target.checked);
    }
  };

  return (
    <div className="flex bg-white p-4 rounded-lg shadow-gray-300 shadow-lg mb-5 items-center">
      <input
        type="checkbox"
        checked={selected}
        onChange={handleSelectChange}
        className="mr-4"
      />
      <div className="flex flex-col justify-center pl-4">
        <h2 className="text-sm font-semibold">{name}</h2>
        <h2 className="text-sm font-base">{price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR"
        })}</h2>

      </div>
    </div>
  );
};

export default Cart;
