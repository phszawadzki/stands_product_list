import React from 'react'

// import Swiper core and required modules
// import { Navigation} from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

const data = [
  {
    name: 'Stojak czarny z gumą',
    code: 'BXLEV103BK',
    url: 'https://b2b-amracing.pl/pl/products/stojak-czarny-z-guma-bxlev103bk-12747',
    image1: 'https://amracing.pl/pol_pl_Stojak-czarny-z-guma-BXLEV103BK-12747_1.jpg',
  },
  {
    name: 'Stojak pomarańczowy z gumą',
    code: 'BXLEV103OR',
    url: 'https://b2b-amracing.pl/pl/products/stojak-pomaranczowy-z-guma-bxlev103or-12748',
    image1: 'https://amracing.pl/pol_pl_Stojak-pomaranczowy-z-guma-BXLEV103OR-12748_1.jpg',
  },
  {
    name: 'Stojak niebieski z gumą',
    code: 'BXLEV103BL',
    url: 'https://b2b-amracing.pl/pl/products/stojak-niebieski-z-guma-bxlev103bl-12749',
    image1: 'https://amracing.pl/pol_pl_Stojak-niebieski-z-guma-BXLEV103BL-12749_1.jpg',
  },
  {
    name: 'Stojak czerwony z gumą',
    code: 'BXLEV103RD',
    url: 'https://b2b-amracing.pl/pl/products/stojak-czerwony-z-guma-bxlev103rd-12750',
    image1: 'https://amracing.pl/pol_pl_Stojak-czerwony-z-guma-BXLEV103RD-12750_1.jpg',
  },
  {
    name: 'Stojak czarny tył, typ L',
    code: 'BX040015BK',
    url: 'https://b2b-amracing.pl/pl/products/stojak-czarny-tyl-typ-l-bx040015bk-12752?query_id=2',
    image1: 'https://amracing.pl/pol_pl_Stojak-czarny-tyl-typ-L-BX040015BK-12752_1.jpg',
  },
  {
    name: 'Stojak / podstawka / podnośnik motocyklowy tył, czarny, typ U',
    code: 'BXLEV111BK',
    url: 'https://b2b-amracing.pl/pl/products/stojak-podstawka-podnosnik-motocyklowy-tyl-czarny-typ-u-bxlev111bk-6919?query_id=2',
    image1: 'https://amracing.pl/pol_pl_Stojak-podstawka-podnosnik-motocyklowy-tyl-czarny-typ-U-BXLEV111BK-6919_1.jpg',
  },
  {
    name: 'Stojak / podstawka / podnośnik motocyklowyl przód + tył, 160kg, 3 adaptery, 2 pałąki, czarny',
    code: 'BXLEV110BK',
    url: 'https://b2b-amracing.pl/pl/products/stojak-podstawka-podnosnik-motocyklowyl-przod-tyl-160kg-3-adaptery-2-palaki-czarny-bxlev110bk-6917?query_id=3',
    image1: 'https://amracing.pl/pol_pl_Stojak-podstawka-podnosnik-motocyklowyl-przod-tyl-160kg-3-adaptery-2-palaki-czarny-BXLEV110BK-6917_1.jpg',
  },
  {
    name: 'Stojak pod głowkę ramy',
    code: 'BX040022BK',
    url: 'https://b2b-amracing.pl/pl/products/stojak-motocyklowy-pod-glowke-ramy-czarny-6-adapterow-skladany-bx040022bk-12864?query_id=4',
    image1: 'https://amracing.pl/pol_pl_Stojak-pod-glowke-ramy-BX040022BK-12864_1.jpg',
  },
  {
    name: 'Rampa / najazd / trap, quad, motocykl, 340 kg, aluminium, 226x28 cm',
    code: 'BXRAMP611',
    url: 'https://b2b-amracing.pl/pl/products/rampa-najazd-trap-quad-motocykl-340-kg-aluminium-226x28-cm-bxramp611-7763?query_id=5',
    image1: 'https://amracing.pl/pol_pl_Rampa-najazd-trap-quad-motocykl-340-kg-aluminium-226x28-cm-BXRAMP611-7763_1.jpg',
  },
  {
    name: 'Adapter do podnośnika / stojaka typ - L (pod wahacz)',
    code: 'BXBT0002',
    url: 'https://b2b-amracing.pl/pl/products/adapter-do-podnosnika-stojaka-typ-l-pod-wahacz-bxbt0002-11057?query_id=6',
    image1: 'https://amracing.pl/pol_pl_Adapter-do-podnosnika-stojaka-typ-L-pod-wahacz-BXBT0002-11057_2.jpg',
  },
  {
    name: 'Adapter do podnośnika / stojaka typ - V',
    code: 'BX7220441',
    url: 'https://b2b-amracing.pl/pl/products/adapter-do-podnosnika-stojaka-typ-v-bx7220441-11064?query_id=6',
    image1: 'https://amracing.pl/pol_pl_Adapter-do-podnosnika-stojaka-typ-V-BX7220441-11064_1.png',
  },
]

const List = () => {
  return (
    <div className='container'>
      <div className='row'>
          {
            data.map(({code, name, url, image1, image2, image3, image4}) => {
              return (
              <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className="text-center mb-5 mt-5">
                  <div className="swiper__container">
                    <Swiper
                    // modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide><img src={image1} className='image ' /></SwiperSlide>
                      {/* <SwiperSlide><img src={image2} className='image' /></SwiperSlide>
                      <SwiperSlide><img src={image3} className='image' /></SwiperSlide>
                      <SwiperSlide><img src={image4} className='image' /></SwiperSlide> */}
                      
                    </Swiper>
                  </div>

                  <p className=''>({code})</p>
                  <p className='name'>{name}</p>
                  <div className="my-auto button_link">
                    <a href={ url }>Otwórz na stronie</a>
                  </div>


                  {/* <div  className='col-md-2 my-auto'>
                    <a href={image1}><img src={image1} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image2}><img src={image2} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image3}><img src={image3} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image4}><img src={image4} className='image'/></a>
                  </div> */}
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default List