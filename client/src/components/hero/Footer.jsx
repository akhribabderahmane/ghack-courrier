import React from 'react'
import localisation from "../../assets/images/localisation.svg";
import phone from "../../assets/images/phone.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";




const Footer = () => {
  return (
    

<footer class="bg-darkBlue dark:bg-gray-900 text-white mt-10">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-1 px-4 py-4 mx-20 lg:py-8 md:grid-cols-4">
        <div className=''>
            <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-black">Company</h2>
            <ul class=" dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Brand Center</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">Help center</h2>
            <ul class=" dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">Legal</h2>
            <ul class=" dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div className='h-auto flex flex-col justify-around py-2'>
          <div className='flex flex-row justify-start items-center'>
          <img
                src={localisation}
                alt="Description of your image"
                className='mr-4 hidden lg:block'
                height={25}
                width={25}
              />
            <p className='text-[12px]'>ESI ex INI, Oued Semar, Algiers, Algeria</p>
          </div>
          <div className='flex flex-row justify-start items-center'>
          <img
                src={phone}
                alt="Description of your image"
                className='mr-4 hidden lg:block'
                height={20}
                width={20}
              />
            <p>(213) 0770707077</p>
          </div>
          <div className='flex flex-row justify-start items-center '>
          <img
                src={facebook}
                alt="Description of your image"
                className='mr-4 '
                height={25}
                width={25}
              />
              <img
                src={twitter}
                alt="Description of your image"
                className='mr-4 '
                height={25}
                width={25}
              />
              <img
                src={linkedin}
                alt="Description of your image"
                className='mr-4'
                height={25}
                width={25}
              />
          </div>
            
        </div>
    </div>
    
    </div>
</footer>

  )
}

export default Footer