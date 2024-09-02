import React from "react";
import Item from "../item/Item";
import data from "../../muck/itemData.json";

export default function Items() {
  return (
    <>
      <div>
        <img
          id="image-head"
          src="/images/cta_bg1.jpg"
          alt=""
          className="fixed mt-20 lg:mt-12 h-72 sm:h-[470px] lg:h-[800px] object-cover object-center select-none"
        />
      </div>
      <div className="bg-blackCus-100 mt-[360px] sm:mt-[550px] lg:mt-[770px] pb-10 relative">
        <div id="header" className="mb-10 relative container">
          <h1 className="text-4xl lg:text-6xl font-MorabbaBold text-white -top-24 lg:-top-[400px] relative">کافه آروماتیکا</h1>
          <h4 className="text-gold-100 font-MorabbaMedium text-lg lg:text-center">بهترین ها را انتخاب کنید</h4>
          <h2 className="text-white text-3xl font-MorabbaMedium py-10 pt-0 lg:text-center">منو قهوه آروماتیکا</h2>
          <div className="bg-zinc-950 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.coffee.map((data) => (
              <Item props={{ ...data }} />
            ))}
          </div>
        </div>
        <div className="relative h-48 bg-fixed bg-cover bg-center bg-no-repeat bg-[url(../public/images/cta_bg3.jpg)]"></div>
        <div id="lunch" className="container">
          <h4 className="text-gold-100 font-MorabbaMedium text-lg py-10 pb-0 lg:text-center">بهترین ها را انتخاب کنید</h4>
          <h2 className="text-white text-3xl font-MorabbaMedium py-10 pt-0 lg:text-center">منو ناهار آروماتیکا</h2>
          <div className="bg-zinc-950 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.lunch.map((data) => (
              <Item props={{ ...data }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
