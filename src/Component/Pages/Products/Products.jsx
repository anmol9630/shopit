import React from "react";

const Products = () => {
  return (
    <>
      <div className="bg-white w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-slate-600 rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838912/Cloths_kpwmp2.jpg')] h-60 md:h-80 lg:h-96">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            Women Clothes
          </div>
        </div>

        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-black rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Male-Cloth_fyyrzb.jpg')] h-60 md:h-80 lg:h-96">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            Men Clothes
          </div>
        </div>

        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-gray-400 rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Cloth-banner_ylavk9.jpg')] h-60 md:h-80 lg:h-96">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            All Clothes
          </div>
        </div> 

        {/* Second Row Start */}

        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-stone-400 rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/model-jwellery_qlcjog.jpg')] h-60 md:h-80 lg:h-96">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            Jewellery
          </div>
        </div>

        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-red-400 rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Electronics_lrjvlg.jpg')] h-60 md:h-80 lg:h-96">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            Electronics
          </div>
        </div>

        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-orange-400 rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Shoe_e2yc1d.jpg')] h-60 md:h-80 lg:h-96">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            Shoes
          </div>
        </div>

        <div className="transition-transform duration-300 ease-out hover:scale-110 bg-orange-400 rounded-2xl bg-cover bg-[url('https://res.cloudinary.com/dxguqzge7/image/upload/v1682838761/Book_lc6ikb.jpg')] h-60 md:h-80 lg:h-96 col-span-full sm:col-span-2 lg:col-span-1">
          <div className="font-bold text-2xl pt-48 md:pt-56 lg:pt-64 pl-10 text-white">
            Books
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
