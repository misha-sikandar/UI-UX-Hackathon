// app/page.js
import Image from 'next/image';




export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Image container with margins */}
        <div className=" overflow-hidden shadow-lg relative h-[500px]">
          <Image 
            src="/images/image.png"
            alt="shoe pic"
            fill
            priority
            className="object-cover w-full max-h-[700px]"
          />
        </div>
        
        {/* Text content below image */}
        <div className="mt-8 text-center">
          <p className="text-sm">First Look</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            NIKE AIR MAX PULSE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Extreme Comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br></br> - designed to push you past your limits and help you go to the max. 
          </p>
          
          {/* Added buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Notify Me
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Shop Air Max
            </button>
          </div>
        </div>
      </div><br></br>
       
        
      <div className="w-full p-4">
  {/* Section Title */}
  <h2 className="text-lg font-semibold mb-4">Best of Air Max</h2>

  {/* Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Product Card 1 */}
    <div className="flex flex-col items-center">
      <img src="/images/shoe1.png" alt="Nike Air Max Pulse" className="w-full object-cover" />
      <div className="mt-4 text-center">
        <h3 className="text-sm font-medium">Nike Air Max Pulse</h3>
        <p className="text-gray-500 text-sm">Women's Shoes</p>
        <p className="text-black font-semibold mt-1">₹ 13 995</p>
      </div>
    </div>
    {/* Product Card 2 */}
    <div className="flex flex-col items-center">
      <img src="/images/shoe3.png" alt="Nike Air Max Pulse" className="w-full object-cover" />
      <div className="mt-4 text-center">
        <h3 className="text-sm font-medium">Nike Air Max Pulse</h3>
        <p className="text-gray-500 text-sm">Men's Shoes</p>
        <p className="text-black font-semibold mt-1">₹ 13 995</p>
      </div>
    </div>
    {/* Product Card 3 */}
    <div className="flex flex-col items-center">
      <img src="/images/shoe2.png" alt="Nike Air Max 97 SE" className="w-full object-cover" />
      <div className="mt-4 text-center">
        <h3 className="text-sm font-medium">Nike Air Max 97 SE</h3>
        <p className="text-gray-500 text-sm">Men's Shoes</p>
        <p className="text-black font-semibold mt-1">₹ 16 995</p>
      </div>
    </div>
  </div>
</div>

<br></br><br></br>



        <div className="font-semibold">
  <h4>Featured</h4>
</div>
<br />

<div className="w-full max-w-[1250px] mx-auto flex flex-col items-center">
  <div className="w-full h-auto">
    <Image
      src="/images/running.jpeg"
      alt="Example Image"
      width={1300}
      height={700}
      className="object-cover w-full max-h-[700px]"
    />
    <br />

    <div>
      <h2 className="font-[500] text-[32px] md:text-[40px] lg:text-[54px] flex justify-center text-center">
        STEP INTO WHAT FEELS GOOD
      </h2>
      <p className="font-[400] text-[14px] md:text-[16px] flex justify-center text-center">
        Cause everyone should know the feeling of running in that perfect pair.
      </p>
    </div>
    <br />
    <div className="flex justify-center">
      <button className="bg-black text-white px-6 py-2 rounded-[30px] hover:bg-gray-800">
        Find Your Shoe
      </button>
    </div>
  </div>
</div>
  


<div className="font-semibold">
  <h4>Don't Miss</h4>
</div>
<br />

<div className="w-full max-w-[1250px] mx-auto flex flex-col items-center">
  <div className="w-full h-auto">
    <Image
      src="/images/2pic.png"
      alt="Example Image"
      width={1300}  
      height={700}
      className="object-cover w-full max-h-[700px]"
    />
    <br />

    <div>
      <h2 className="font-[500] text-[32px] md:text-[40px] lg:text-[54px] flex justify-center text-center">
        FLIGHT ESSENTIALS
      </h2>
      <p className="font-[400] text-[14px] md:text-[16px] flex justify-center text-center">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
    </div>
    <br />
    <div className="flex justify-center">
      <button className="bg-black text-white px-6 py-2 rounded-[30px] hover:bg-gray-800">
        Shop
      </button>
    </div>
  </div>
</div>

<div className="font-semibold">
  <h4 className="text-xl">The Essentials</h4>
</div>
<br />
<div className="w-full h-auto flex flex-wrap justify-between gap-4">
  {/* Image 1 */}
  <div className="relative flex-1 max-w-[30%]">
    <Image
      src="/images/image1.png"
      alt="Example Image 1"
      width={1300}
      height={700}
      className="object-cover w-full h-auto"
    />
    <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
      View More
    </button>
  </div>

  {/* Image 2 */}
  <div className="relative flex-1 max-w-[30%]">
    <Image
      src="/images/image2.png"
      alt="Example Image 2"
      width={1300}
      height={700}
      className="object-cover w-full h-auto"
    />
    <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
      View More
    </button>
  </div>

  {/* Image 3 */}
  <div className="relative flex-1 max-w-[30%]">
    <Image
      src="/images/image3.png"
      alt="Example Image 3"
      width={1300}
      height={700}
      className="object-cover w-full h-auto"
    />
    <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
      View More
    </button>
  </div>
</div>

<div className="bg-white py-8 border-t border-gray-200 min-h-screen flex items-center justify-center">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Icons</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Shoes</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>
      </div>
     
      <div>
        <h3 className="text-lg font-semibold mb-4">Clothing</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirts & Tops</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Kids'</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Infant & Toddler Shoes</li>
          <li>Kids' Shoes</li>
          <li>Kids' Jordan Shoes</li>
          <li>Kids' Basketball Shoes</li>
        </ul>
      </div>
    </div>
  </div>
</div>




    </div>
    
  );
}
