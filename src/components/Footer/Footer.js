import React from "react";

export default function Footer() {
  return (
    <>
      <div id='callus' className='bg-black relative'>
        <div className='container grid grid-cols-1 lg:grid-cols-3 pt-10 z-10'>
          <div className='pb-10'>
            <div className='flex sm:justify-start items-center gap-2'>
              <img src='images/logo512.png' alt='' className="w-16"/>
              <h1 className='text-3xl font-MorabbaMedium text-white'>آروماتیکا</h1>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 lg:col-span-2'>
            <div className='pl-10 pb-10'>
              <h3 className='text-white text-2xl font-MorabbaMedium pb-4'>ساعت کاری</h3>
              <ul className='text-white list-disc mr-5'>
                <li className="pb-2">
                  <h5 className="pb-0.5">شنبه - پنجشنبه</h5>
                  <span className='text-gold-100'>7صبح - 10 شب</span>
                </li>
                <li className="pb-2">
                  <h5 className="pb-0.5">جمعه</h5>
                  <span className='text-gold-100'>4 عصر - 10 شب</span>
                </li>
              </ul>
            </div>
            <div className=''>
              <h3 className='text-white text-2xl font-MorabbaMedium pb-4'>راه ارتباط</h3>
              <div className='flex pb-4 gap-2 items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35px' height='35px' viewBox='0 0 512 512'>
                  <path
                    fill='#fff'
                    d='M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32'
                  />
                  <path
                    fill='#fff'
                    d='M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.619 29.619 0 0 0 49.635 0l120.911-185.613a173.921 173.921 0 0 0-22.747-217.911m-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817'
                  />
                </svg>
                <div>
                  <p className='text-gold-100 max-w-56'>سیرجان، خ آیت الله سعیدی، پاساژ مهر</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35px' height='35px' viewBox='0 0 32 32'>
                  <path
                    fill='#fff'
                    d='M8.656 3c-.523 0-1.039.188-1.469.531l-.062.031l-.031.032l-3.125 3.219l.031.03a3.134 3.134 0 0 0-.844 3.376c.004.008-.004.023 0 .031c.848 2.426 3.016 7.11 7.25 11.344c4.25 4.25 8.996 6.332 11.344 7.25h.031a3.59 3.59 0 0 0 3.469-.688L28.406 25c.828-.828.828-2.266 0-3.094l-4.062-4.062l-.032-.063c-.828-.828-2.296-.828-3.125 0l-2 2a16.176 16.176 0 0 1-4.093-2.812c-1.637-1.563-2.473-3.36-2.781-4.063l2-2c.84-.84.855-2.238-.032-3.062l.031-.032l-.093-.093l-4-4.125l-.031-.031l-.063-.032A2.356 2.356 0 0 0 8.656 3m0 2a.35.35 0 0 1 .219.094l4 4.093l.094.094c-.008-.008.058.098-.063.219l-2.5 2.5l-.469.438l.22.624s1.148 3.075 3.562 5.376l.219.187C16.261 20.746 19 21.906 19 21.906l.625.282l2.969-2.97c.172-.171.14-.171.312 0L27 23.314c.172.171.172.109 0 .28l-3.063 3.063c-.46.395-.949.477-1.53.282c-2.266-.891-6.669-2.825-10.595-6.75c-3.957-3.958-6.023-8.446-6.78-10.625c-.153-.407-.044-1.008.312-1.313l.062-.063l3.032-3.093A.35.35 0 0 1 8.655 5z'
                  />
                </svg>
                <div>
                  <p className='text-gold-100'>09134784608</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='opacity-20 my-4 container' />
        <div className='text-white/70 pb-4 grid md:grid-cols-2 lg:grid-cols-3 container'>
          <p className='pl-3'>©تمامی حقوق برای آروماتیکا محفوظ میباشد.</p>
          <p className="lg:col-start-3">
            توسعه و طراحی توسط{" "}
            <span>
              <a href='https://novazen.ir/' target="_blank" className='text-gold-100'>
                Novazen
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
