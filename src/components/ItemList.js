import React from "react";

const ItemList = ({ items }) => {


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                -₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute flex justify-">
            <button className="p-2 rounded-lg bg-black text-white shadow-lg">Add +</button>
              </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
              className="w-full object-contain rounded-lg" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
