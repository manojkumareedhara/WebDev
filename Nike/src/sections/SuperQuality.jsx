import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">We Provide you
          <br />
          <span className="text-coral-red ">Super Quality</span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">discover Stylish Nike Arrivals, quality comfort, innovation for your active life.</p>
        {/* <Button label = 'Shop now' iconURL={arrowRight} /> */}
        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8}
          alt="shoe8"
          width={570}
          height={570}
          className="object-contain"
        />

      </div>
      
    </section>
  )
}

export default SuperQuality