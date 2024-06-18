import React, { useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';

const Freebook = () => {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try{
         const res = await axios.get("http://localhost:4001/book");
         console.log(res.data);
         setBook(res.data.filter((data) => data.cateogry === "Free"));
      }catch (error) {
          console.log("Error :", error);
      }
    }
    getBook();
  }, []);

  //  console.log(filterData);

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-bold text-md text-black pt-5 dark:text-white'>Free Offered Courses</h1>
      <p className='pt-4 text-black dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis laboriosam dicta architecto expedita ab nam quae accusantium maiores perferendis totam officia deleniti vitae itaque magnam, incidunt dolorem consequatur! Repellat!</p>
      </div>
   
    <div>
    <div className="slider-container">
      <Slider {...settings}>
       {book.map((item) => (
         <Card item={item} key={item.id} />
       ))}
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
}

export default Freebook