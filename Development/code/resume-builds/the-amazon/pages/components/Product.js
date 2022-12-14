import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/24/solid"


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image}) {
    const [rating, setRating] = useState()
    const [hasPrime, setPrimeEnabled] = useState()

    useEffect(() => {
      setRating(
          Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
          MIN_RATING
      );
      setPrimeEnabled(Math.random() < 0.5);
  }, []);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italix text-gray-400">{category}</p>

        <Image key={id} src={image} height={200} width={200} alt="" />

        <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
        .fill()
        .map((_, i)=> (
        
          <StarIcon key={i} className='h-5 text-yellow-500'/>
        ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
            ${price}
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <Image src="https://links.papareact.com/fdw" width={600} height={600} className='w-12' alt="" />
          <p className='text-xs'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product