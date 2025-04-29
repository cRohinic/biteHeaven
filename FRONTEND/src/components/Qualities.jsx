import React from 'react'
import {data} from '../../src/restApi.json'

const Qualities = () => {
  // You can use this if you want to override the data from restApi.json
  const qualitiesData = [
    {
      id: 1,
      image: "/quality_food.png", // Update with your actual image path
      title: "QUALITY FOOD",
      description: "Experience the delight of truly quality food that tastes as amazing as it looks, only at our restaurant."
    },
    {
      id: 2,
      image: "/super_taste.png", // Update with your actual image path
      title: "SUPER TASTE",
      description: "Every bite bursts with irresistible flavor that keeps you coming back for more."
    },
    {
      id: 3,
      image: "/fast_devlivery.svg", // Update with your actual image path
      title: "FAST DELIVERY",
      description: "Enjoy lightning-fast delivery that brings your favorite dishes to your doorstep in no time!"
    }
  ];

  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              // You can use data[0].ourQualities or the qualitiesData defined above
              data[0].ourQualities.map((element, index) => {
                // Get the corresponding description from our array
                const updatedDescription = qualitiesData[index]?.description || element.description;
                
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{updatedDescription}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
    </>
  )
}

export default Qualities