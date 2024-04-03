import React from "react";

export default function Items() {
  return (
    <>
      <div>
        <img
          id='image-head'
          src='/images/cta_bg1.jpg'
          alt=''
          className='fixed mt-20 lg:mt-12 h-72 sm:h-[470px] lg:h-[800px] object-cover object-center select-none'
        />
      </div>
      <div className='bg-blackCus-100 mt-[360px] sm:mt-[550px] lg:mt-[770px] pb-10 relative'>
        <div id='header' className='mb-10 relative container'>
        <h1 className="text-4xl lg:text-6xl font-MorabbaBold text-white -top-24 lg:-top-[400px] relative">کافه آروماتیکا</h1>
          <h4 className='text-gold-100 font-MorabbaMedium text-lg lg:text-center'>بهترین ها را انتخاب کنید</h4>
          <h2 className='text-white text-3xl font-MorabbaMedium py-10 pt-0 lg:text-center'>منو قهوه آروماتیکا</h2>
          <div className='bg-black w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu3.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>اسپرسو</h5>
                    <p className='text-white/60 text-sm'>قهوه 100 عربیکا</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>35 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu3.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>اسپرسو</h5>
                    <p className='text-white/60 text-sm'>قهوه 50 عربیکا</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>35 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu4.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>لاته</h5>
                    <p className='text-white/60 text-sm'>اسپرسو + شیر</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>50 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu5.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>آمریکانو</h5>
                    <p className='text-white/60 text-sm'>اسپرسو + آب</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>40 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20 lg:hidden' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu1.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>کاپوچینو</h5>
                    <p className='text-white/60 text-sm'>اسپرسو + شیر + شکر</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>65 هزار تومان</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='mx-4 opacity-20 lg:hidden' />
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu6.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>ماکیاتو</h5>
                    <p className='text-white/60 text-sm'>اسپرسو + شیر + عسل + سیروپ</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>120 هزار تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative h-48 bg-fixed bg-cover bg-center bg-no-repeat bg-[url(../public/images/cta_bg3.jpg)]'></div>
        <div id='lunch' className='container'>
          <h4 className='text-gold-100 font-MorabbaMedium text-lg py-10 pb-0 lg:text-center'>بهترین ها را انتخاب کنید</h4>
          <h2 className='text-white text-3xl font-MorabbaMedium py-10 pt-0 lg:text-center'>منو ناهار آروماتیکا</h2>
          <div className='bg-black w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu_r1.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>سوخاری 3 تیکه</h5>
                    <p className='text-white/60 text-sm'>ران مرغ + ارد سوخاری + سیب سرخ کرده</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>130 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu_r3.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>چینی سبزیجات</h5>
                    <p className='text-white/60 text-sm'>خرچنگ + سبزیجات + رشته</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>210 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu_r5.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>لامزستر</h5>
                    <p className='text-white/60 text-sm'>نان + گوجه + خیارسبز + کاهو + سس</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>175 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu_r6.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>ماهی کبابی</h5>
                    <p className='text-white/60 text-sm'>ماهی + دورچین</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>230 هزار تومان</p>
                  </div>
                </div>
              </div>
              <hr className='mx-4 opacity-20 lg:hidden' />
            </div>
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu_r7.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>سوسیس</h5>
                    <p className='text-white/60 text-sm'>سوسیس + سبزی</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>90 هزار تومان</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='mx-4 opacity-20 lg:hidden' />
            <div>
              <div className='p-4 flex'>
                <img src='/images/menu_r4.jpg' alt='' loading='lazy' className='w-20 h-24 rounded-lg object-cover' />
                <div className='pr-4 w-full flex flex-col justify-between'>
                  <div>
                    <h5 className='text-white mb-0.5'>ماکارونی</h5>
                    <p className='text-white/60 text-sm'>ماکارونی + سس مخصوص</p>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gold-100'>..........</span>
                    <p className='text-gold-100'>120 هزار تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
