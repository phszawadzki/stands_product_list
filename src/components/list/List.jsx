import React from 'react'



const data = [
  {
      name: 'Lejek plastikowy PEMD gigant skośny',
      code: 'LEJG',
      image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-PEMD-gigant-skosny-LEJG-12669_1.png',
  },
  {
    name: 'Lejek plastikowy PEMD gigant prosty',
    code: 'LEJG',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-PEMD-gigant-prosty-LEJG-12670_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejek-plastikowy-PEMD-gigant-prosty-LEJG-12670_2.png',
  },
  {
    name: 'Lejek plastikowy lider 3 częsciowy do paliw',
    code: 'LID3',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-lider-3-czesciowy-do-paliw-LID3-12671_1.png',
  },
  {
    name: 'Lejek plastikowy, prosty LIDER ',
    code: 'LEJPL',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-prosty-LIDER-LEJPL-12675_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejek-plastikowy-prosty-LIDER-LEJPL-12675_2.png',
  },
  {
    name: 'Sylikon wysokotemperaturowy 360 st 20 ml',
    code: 'SIL20M',
    image1: 'https://amracing.pl/pol_pl_Sylikon-wysokotemperaturowy-360-st-20-ml-SIL20M-12676_1.jpg',
  },
  {
    name: 'Sylikon wysokotemperaturowy 360 st 40 ml',
    code: 'SILA',
    image1: 'https://amracing.pl/pol_pl_Sylikon-wysokotemperaturowy-360-st-40-ml-SILA-12677_1.png',
    image2: 'https://amracing.pl/pol_pl_Sylikon-wysokotemperaturowy-360-st-40-ml-SILA-12677_2.png',
  },
  {
    name: 'Wazelina techniczna 0,9 kg / 900 g',
    code: 'WAZEL',
    image1: 'https://amracing.pl/pol_pl_Wazelina-techniczna-0-9-kg-900-g-WAZEL-12679_1.png',
  },
  {
    name: 'Smar grafitowy 90 ml , tubka',
    code: 'SGRT',
    image1: 'https://amracing.pl/pol_pl_Smar-grafitowy-90-ml-tubka-SGRT-12680_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-grafitowy-90-ml-tubka-SGRT-12680_2.png',
  },
  {
    name: 'Smar do łożyska ŁT-43 80 ml ',
    code: 'SLTT',
    image1: 'https://amracing.pl/pol_pl_Smar-do-lozyska-LT-43-80-ml-SLTT-12682_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-do-lozyska-LT-43-80-ml-SLTT-12682_2.png',
  },
  {
    name: 'Smar miedziowy / miedziany 120 ml',
    code: 'SMP',
    image1: 'https://amracing.pl/pol_pl_Smar-miedziowy-miedziany-120-ml-SMP-12683_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-miedziowy-miedziany-120-ml-SMP-12683_2.png',
  },
  {
    name: 'Smar przegubowy 140 g',
    code: 'SP',
    image1: 'https://amracing.pl/pol_pl_Smar-przegubowy-140-g-SP-12684_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Smar-przegubowy-140-g-SP-12684_2.jpg',
  },
  {
    name: 'Talk techniczny 100 g do opon / dętek',
    code: 'TALK',
    image1: 'https://amracing.pl/pol_pl_Talk-techniczny-100-g-do-opon-detek-TALK-12686_1.jpg',
  },
  {
    name: 'Talk techniczny 500 g do opon / dętek',
    code: 'TALK',
    image1: 'https://amracing.pl/pol_pl_Talk-techniczny-500-g-do-opon-detek-TALK-12687_1.jpg',
  },
  {
    name: 'https://amracing.pl/pol_pl_Talk-techniczny-500-g-do-opon-detek-TALK-12687_1.jpg',
    code: 'TALK1',
    image1: 'https://amracing.pl/pol_pl_Talk-techniczny-1000-g-do-opon-detek-TALK1-12688_1.jpg',
  },
  {
    name: 'Smar do łożyska 800 g ŁT-43 ',
    code: 'SLT1',
    image1: 'https://amracing.pl/pol_pl_Smar-do-lozyska-800-g-LT-43-SLT1-12681_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-do-lozyska-800-g-LT-43-SLT1-12681_2.png',
  },
  {
    name: 'Wazelina techniczna 60 ml',
    code: 'WAZT',
    image1: 'https://amracing.pl/pol_pl_Wazelina-techniczna-60-ml-WAZT-12678_1.png',
    image2: 'https://amracing.pl/pol_pl_Wazelina-techniczna-60-ml-WAZT-12678_2.png',
  },
  {
    name: 'Lejek plastikowy max 3-częściowy',
    code: 'LEJ2',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-max-3-czesciowy-LEJ2-12674_1.png',
  },
  {
    name: 'Hermetic 115 ml (klej do uszczelek)',
    code: 'HER',
    image1: 'https://amracing.pl/pol_pl_Hermetic-115-ml-klej-do-uszczelek-HER-12685_1.png',
  },
  {
    name: 'Lejki plastikowe 4 szt',
    code: 'LEJP4',
    image1: 'https://amracing.pl/pol_pl_Lejki-plastikowe-4-szt-LEJP4-12672_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejki-plastikowe-4-szt-LEJP4-12672_2.png',
  },
  {
    name: 'Lejek plastikowy sztywny, skośny, zielony',
    code: 'LEJS',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-sztywny-skosny-zielony-LEJS-12673_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejek-plastikowy-sztywny-skosny-zielony-LEJS-12673_2.png',
  },
  {
    name: 'Pasta / Smar miedziowy / miedziany / miedziowy 20 ml',
    code: 'SMT',
    image1: 'https://amracing.pl/pol_pl_Pasta-Smar-miedziowy-miedziany-miedziowy-20-ml-20-200-st-AA1426-SMT-10867_1.png',
  },
  {
    name: 'Pasta zaworowa 60 g, 2 bardzo gruba ziarnistość',
    code: 'PZ2',
    image1: 'https://amracing.pl/pol_pl_Pasta-zaworowa-60-g-2-bardzo-gruba-ziarnistosc-AA14241-PZ2-10865_1.png',
  },
  {
    name: 'Pasta zaworowa 1 średnia ziarnistość',
    code: 'PZ1',
    image1: 'https://amracing.pl/pol_pm_Pasta-zaworowa-1-srednia-ziarnistosc-AA14231-PZ1-10864_1.png',
  },
  {
    name: 'Pasta zaworowa 60 g, 0 bardzo drobna ziarnistość',
    code: 'PZ',
    image1: 'https://amracing.pl/pol_pl_Pasta-zaworowa-60-g-0-bardzo-drobna-ziarnistosc-AA14221-PZ-10863_1.png',
  },
  {
    name: 'Smar grafitowy 140 g puszka',
    code: 'SGR',
    image1: 'https://amracing.pl/pol_pl_Smar-grafitowy-140-g-puszka-SGR-AA1441-10755_1.png',
  },
  {
    name: 'Wazelina techniczna 50g',
    code: 'WAZ50',
    image1: 'https://amracing.pl/pol_pl_Wazelina-techniczna-50g-AA1451-WAZ50-10756_1.png',
  },
  {
    name: 'Pasta do tłoczków i cylinderków 5ml',
    code: 'PTH',
    image1: 'https://amracing.pl/pol_pl_Pasta-do-tloczkow-i-cylinderkow-5ml-AA1425-PTH-10866_1.png',
  }
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