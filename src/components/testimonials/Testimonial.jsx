import React from 'react'
import "./Testimonial.css"
import client1 from '../../img/client1.jpg'
import client2 from '../../img/client2.jpg'
import client3 from '../../img/client3.jpg'
import client4 from '../../img/client4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Navigation, Pagination, Scrollbar, } from 'swiper'


const data = [
{
    avatar: client1,
    name: 'Sabrina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus eveniet commodi, minus quidem quo incidunt, nostrum necessitatibus aperiam eum atque in sed modi porro enim dolorem dicta error quis!',
},
{
    avatar: client2,
    name: 'John Taylor',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus eveniet commodi, minus quidem quo incidunt, nostrum necessitatibus aperiam eum atque in sed modi porro enim dolorem dicta error quis!',
},
{
    avatar: client3,
    name: 'Adam Lock',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus eveniet commodi, minus quidem quo incidunt, nostrum necessitatibus aperiam eum atque in sed modi porro enim dolorem dicta error quis!',
},
{
    avatar: client4,
    name: 'Creg Warren',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus eveniet commodi, minus quidem quo incidunt, nostrum necessitatibus aperiam eum atque in sed modi porro enim dolorem dicta error quis!',
},
]


function Testimonial() {
  return (
    <section id='Testimonial'>
   <h5> Review From Clients</h5>
    <h2> Testimonials</h2>

<Swiper className="container testimonials__container"  
    modules={[Pagination , Navigation , Scrollbar, ]}  
     spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
       onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
   
     >
{
  data.map(({avatar,name,review}, index )=>{
    return   < SwiperSlide key={index} className='testimonal'>
    <div className="client__avatar">
      <img src={avatar} />
     </div>
       <h5 className='client__name'> {name} </h5>
      <small className='client__review'>
       {review}
      </small>
  </SwiperSlide>
  })
}
 
</Swiper>
    </section>
  )
}

export default Testimonial