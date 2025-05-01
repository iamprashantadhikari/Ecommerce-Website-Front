import React, { useEffect, useState } from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero non soluta eum laborum aliquid ipsa omnis nesciunt blanditiis. Laudantium velit voluptatem qui et eius ipsam."
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero non soluta eum laborum aliquid ipsa omnis nesciunt blanditiis. Laudantium velit voluptatem qui et eius ipsam."
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Men's Products Sale",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero non soluta eum laborum aliquid ipsa omnis nesciunt blanditiis. Laudantium velit voluptatem qui et eius ipsam."
  },
]
const Hero = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false
  }

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.maitigaun.com/api/mobile/v1/ecommerce/sliders')
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json()
        setData(result);
        // console.log(result)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  if (!data) {
    return <div className="text-center py-8">Loading sliders...</div>;
  }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* Background Pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0
         rounded-3xl rotate-45 -z-9'>

        </div>
        
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {data.data?.map((item) => (
          <div key={item.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div
              className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center
              sm:text-left order-2 sm:order-1 relative z-10'
              >
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                  {item.title}</h1>
                <p className='text-sm'>
                  {item.name}
                </p>
                <div>
                  <button
                  className='bg-gradient-to-r from-primary to-secondary hover:scale-105
                  duration-200 text-white py-2 px-4 rounded-full'>
                    Order Now
                  </button>
                </div>
              </div>
              {/* Image Section */}
              <div className='order-1 sm:order-2'>
                <div className='relative z-10'>
                  <img src={item.image} alt="" 
                  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125
                  lg:scale-120 object-contain mx-auto'
                  />
                </div>
              </div>
            </div>
          </div>
            ))}
          </Slider>
        </div>
    </div>
  )
}
// This is also another way
//  {data ? (
//   data.data.map((item) => ( 
  // ))
// ) : ( <p>No Data</p> )}
export default Hero