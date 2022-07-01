import React from 'react'
import IMG1 from './../../assets/IMG_5186.JPG'
import IMG2 from './../../assets/IMG_5190.JPG'
import IMG3 from './../../assets/IMG_5195.JPG'
import IMG4 from './../../assets/IMG_5197.JPG'


const data = [
  {
    name: 'Rampa / najazd / trap, quad, motocykl, 340 kg, aluminium, 226x28 cm',
    code: 'BXRAMP611',
    image1: 'https://amracing.pl/pol_pl_Rampa-najazd-trap-quad-motocykl-340-kg-aluminium-226x28-cm-BXRAMP611-7763_1.jpg',
  },
  {
    name: 'Stojak czerwony z gumą',
    code: 'BXLEV103RD',
    image1: 'https://amracing.pl/pol_pl_Stojak-czerwony-z-guma-BXLEV103RD-12750_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Stojak-czerwony-z-guma-BXLEV103RD-12750_2.jpg',
    image3: 'https://amracing.pl/pol_pl_Stojak-czerwony-z-guma-BXLEV103RD-12750_3.jpg',
    image4: 'https://amracing.pl/pol_pl_Stojak-czerwony-z-guma-BXLEV103RD-12750_4.jpg',
  },
  {
    name: 'Stojak czarny z gumą',
    code: 'BXLEV103BK',
    image1: 'https://amracing.pl/pol_pl_Stojak-czarny-z-guma-BXLEV103BK-12747_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Stojak-czarny-z-guma-BXLEV103BK-12747_3.jpg',
    image3: 'https://amracing.pl/pol_pl_Stojak-czarny-z-guma-BXLEV103BK-12747_4.jpg',
    image4: 'https://amracing.pl/pol_pl_Stojak-czarny-z-guma-BXLEV103BK-12747_5.jpg',
  },
  {
    name: 'Stojak pomarańczowy z gumą',
    code: 'BXLEV103OR',
    image1: 'https://amracing.pl/pol_pl_Stojak-pomaranczowy-z-guma-BXLEV103OR-12748_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Stojak-pomaranczowy-z-guma-BXLEV103OR-12748_2.jpg',
    image3: 'https://amracing.pl/pol_pl_Stojak-pomaranczowy-z-guma-BXLEV103OR-12748_3.jpg',
    image4: 'https://amracing.pl/pol_pl_Stojak-pomaranczowy-z-guma-BXLEV103OR-12748_4.jpg',
  },
  {
    name: 'Stojak niebieski z gumą',
    code: 'BXLEV103bl',
    image1: 'https://amracing.pl/pol_pl_Stojak-niebieski-z-guma-BXLEV103BL-12749_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Stojak-niebieski-z-guma-BXLEV103BL-12749_4.jpg',
    image3: 'https://amracing.pl/pol_pl_Stojak-niebieski-z-guma-BXLEV103BL-12749_6.jpg',
    image4: 'https://amracing.pl/pol_pl_Stojak-niebieski-z-guma-BXLEV103BL-12749_7.jpg',
  },
  {
    name: 'Stojak / podstawka / podnośnik motocyklowy tył, czarny, typ U',
    code: 'BXLEV111BK',
    image1: 'https://amracing.pl/pol_pl_Stojak-podstawka-podnosnik-motocyklowy-tyl-czarny-typ-U-BXLEV111BK-6919_1.jpg',
  },
  {
    name: 'Stojak / podstawka / podnośnik motocyklowyl przód + tył, 160kg, 3 adaptery, 2 pałąki, czarny',
    code: 'BXLEV110BK',
    image1: 'https://amracing.pl/pol_pl_Stojak-podstawka-podnosnik-motocyklowyl-przod-tyl-160kg-3-adaptery-2-palaki-czarny-BXLEV110BK-6917_1.jpg',
  },
  {
    name: 'Stojak czarny tył, typ L',
    code: 'BX040015BK',
    image1: 'https://amracing.pl/pol_pl_Stojak-czarny-tyl-typ-L-BX040015BK-12752_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Stojak-czarny-tyl-typ-L-BX040015BK-12752_2.jpg',
    image3: 'https://amracing.pl/pol_pl_Stojak-czarny-tyl-typ-L-BX040015BK-12752_3.jpg',
    image4: 'https://amracing.pl/pol_pl_Stojak-czarny-tyl-typ-L-BX040015BK-12752_4.jpg',
  },
  {
    name: 'Stojak motocyklowy pod główkę ramy, czarny, 6 adapterów, składany',
    code: 'BX040022BK',
    image1: IMG1,
    image2: IMG2,
    image3: IMG3,
    image4: IMG4,
  },
  {
    name: 'Adapter do podnośnika / stojaka typ - V',
    code: 'BX7220441',
    image1: 'https://amracing.pl/pol_pl_Adapter-do-podnosnika-stojaka-typ-V-BX7220441-11064_1.png',
  },
  {
    name: 'Adapter do podnośnika / stojaka typ - L (pod wahacz)',
    code: 'BXBT0002',
    image1: 'https://amracing.pl/pol_pl_Adapter-do-podnosnika-stojaka-typ-L-pod-wahacz-BXBT0002-11057_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Adapter-do-podnosnika-stojaka-typ-L-pod-wahacz-BXBT0002-11057_1.jpg',
  },
]

const List = () => {
  return (
    <div className='container'>
        {
          data.map(({code, name, image1, image2, image3, image4}) => {
            return (
            <div className='row'>
                <p className='col-md-2 my-auto'>{name}</p>
                <p className='col-md-2 my-auto'>{code}</p>
                <div  className='col-md-2 my-auto'>
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
                </div>
            </div>
            )
          })
        }
    </div>
  )
}

export default List