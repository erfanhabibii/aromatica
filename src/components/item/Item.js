import React from "react";

export default function Item({props}) {
  return (
    <div>
      <div className="p-4 flex">
        <img src={`/images/${props.img}`} alt="" loading="lazy" className="w-20 h-24 rounded-lg object-cover" />
        <div className="pr-4 w-full flex flex-col justify-between">
          <div>
            <h5 className="text-white mb-0.5">{props.title}</h5>
            <p className="text-white/60 text-sm">{props.desc}</p>
          </div>
          <div className="flex justify-between">
            <span className="text-gold-100">..........</span>
            <p className="text-gold-100">{props.price}هزار تومان</p>
          </div>
        </div>
      </div>
      <hr className={`mx-4 opacity-20 ${props.hrClass}`} />
    </div>
  );
}
