import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const [image, setimage] = useState(null);
  const [car, setcar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: "",
    category: "",
    transmission: "",
    fule_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  const currency = import.meta.env.VITE_CURRENCY;

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New car"
        subTitle="Fill in details to list a new car for bookings, including pricing, availability and car specification"
      />
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* car image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setimage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">Upload a picture of your car</p>
        </div>

        {/* car brand and model */}
        <div className="grid grid-cols-1 md:frid-cols-2 gap-6">
          <div className="felx felx-col w-full">
            <label>Brand</label>
            <input
              type="text"
              placeholder="e.g. BMW,Mercedes,Audi..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.brand}
              onChange={(e) => setcar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className="felx felx-col w-full">
            <label>Model</label>
            <input
              type="text"
              placeholder="e.g. X5,E-Class,M4..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.model}
              onChange={(e) => setcar({ ...car, model: e.target.value })}
            />
          </div>
        </div>
        {/* car year , price,category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 gap-6">
          <div className="felx felx-col w-full">
            <label>Year</label>
            <input
              type="number"
              placeholder="2025"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.year}
              onChange={(e) => setcar({ ...car, year: e.target.value })}
            />
          </div>
          <div className="felx felx-col w-full">
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              placeholder="100"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.pricePerDay}
              onChange={(e) => setcar({ ...car, pricePerDay: e.target.value })}
            />
          </div>
          <div className="felx felx-col w-full">
            <label>Category</label>
            <select
              value={car.category}
              onChange={(e) => setcar({ ...car, category: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>

        {/* car trensmission ,fuel,type,seating_capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 gap-6">
          <div className="felx felx-col w-full">
            <label>Transmission</label>
            <select
              value={car.transmission}
              onChange={(e) => setcar({ ...car, transmission: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="felx felx-col w-full">
            <label>Fuel Type</label>
            <select
              value={car.fule_type}
              onChange={(e) => setcar({ ...car, fule_type: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="felx felx-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="4"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.seating_capacity}
              onChange={(e) =>
                setcar({ ...car, seating_capacity: e.target.value })
              }
            />
          </div>
        </div>

        {/* car location */}
        <div className="flex flex-col w-full ">
          <div className="felx felx-col w-full">
            <label>Location</label>
            <select
              value={car.location}
              onChange={(e) => setcar({ ...car, location: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a fuel type</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Huston">Huston</option>
              <option value="Mumbai">Mumbai</option>
              <option value="India">Hybrid</option>
            </select>
          </div>
          {/* car description */}
          <div className="flex flex-col w-full ">
            <label>Description</label>
            <textarea
              rows={5}
              placeholder="e.g A luxury SUV with a specious interior and a powerfull engine."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.description}
              onChange={(e) => setcar({ ...car, description: e.target.value })}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
            <img src={assets.tick_icon} alt="" />
            List Your Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
