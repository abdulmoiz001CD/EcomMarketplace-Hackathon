// import React from 'react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// const page = () => {
//   return (<>

// <section className="bg-[#F6F5FF]  max-w-[1920px] h-[286px]  py-8 sm:py-12 lg:py-20 ">
//             <div className="max-w-[1177px] mx-auto w-full flex flex-col items-start px-5 gap-1 ">
//                 {/* Heading */}

//                 <h2 className="text-[32px] sm:text-[35px] lg:text[36px] text-[#151875] font-bold text-start">Shop Grid Default
//                 </h2>
//                 <div>Home .Pages <span className='text-[#FB2E86] text-[16px]'>Contact us</span></div>

//             </div>
         
//         </section>




//      <div className='max-w-[1050px] w-full mx-[1rem] flex flex-col  mt-[5rem]  bg-white  min-h-screen xl:mx-auto'>
  

//     {/* first row */}
//         <div className="flex flex-col xl:flex-row gap-8 items-baseline">
    
//      {/* right side bar */}
//     <div className="w-[50%] flex flex-col gap-4">
//       <h1 className="text-[36px] font-bold text-[#151875]">Information About us</h1>
//       <p className="text-[#8A8FB9] text-[16px] font-[600]">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
//       </p>
//       <div className="flex  space-x-4">
//         <div className="max-w-[25px] w-full h-[25px] bg-[#5625DF] rounded-full"></div>
//         <div className="max-w-[25px] w-full h-[25px] bg-[#FF27B7] rounded-full"></div>
//         <div className="max-w-[25px] w-full h-[25px] bg-[#37DAF3] rounded-full"></div>
//       </div>
//     </div>


    



//    {/*  left side bar */}
//     <div className="flex flex-col  w-[50%] gap-6">
//       <h1 className="text-[36px] font-bold text-[#151875]">Contact Way</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Red Circle with text */}
//         <div className="flex items-center space-x-4">
//           <div className="rounded-full max-w-[45px] w-full h-[45px] bg-red-500 flex-shrink-0"></div>
//           <div className='text-[#8A8FB9]'>
//             <p className="text-sm ">
//             Tel: 877-67-88-99
//             </p>
//             <p className="text-sm">E-Mail: shop@store.com</p>
//           </div>
//         </div>

//         {/* Blue Circle with text */}
//         <div className="flex items-center space-x-4">
//           <div className="rounded-full   max-w-[45px] w-full h-[45px] bg-blue-500 flex-shrink-0"></div>
//           <div className='text-[#8A8FB9]'>
//             <p className="text-sm ">
//             Support Forum
//             </p>
//             <p className="text-sm">For over 24hr</p>
//           </div>
//         </div>

//         {/* Green Circle with text */}
//         <div className="flex items-center space-x-4">
//           <div className="rounded-full  max-w-[45px] w-full h-[45px] bg-green-500 flex-shrink-0"></div>
//           <div className='text-[#8A8FB9]'>
//             <p className="text-sm ">
//             20 Margaret st, London
//             </p>
//             <p className="text-sm">Great britain, 3NM98-LK</p>
//           </div>
//         </div>

//         {/* Yellow Circle with text */}
//         <div className="flex items-center space-x-4">
//           <div className="rounded-full  max-w-[45px] w-full h-[45px] bg-yellow-500 flex-shrink-0"></div>
//           <div className='text-[#8A8FB9]'>
//             <p className="text-sm ">
//             Free standard shipping
//             </p>
//             <p className="text-sm">on all orders.</p>
//           </div>
//         </div>
//       </div>
//     </div>

    
//   </div>


//     {/* second row */}
//     <div className='flex flex-col justify-center xl:flex-row my-[5rem]'>

//     {/* first col */}
//     <div className="w-[50%] flex flex-col gap-7">
//       <h1 className="text-[36px] font-bold text-[#151875]">Get In Touch</h1>
//       <p className="text-[#8A8FB9] text-[16px] font-[600]">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
//       </p>

//     <div className="max-w-[534px] h-[337px]">
//   {/* First Row - Name & Email */}
//   <div className="flex gap-4 mb-4">
//     <input
//       type="text"
//       placeholder="Name"
//       className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     <input
//       type="email"
//       placeholder="Email"
//       className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   {/* Second Row - Subject */}
//   <div className="mb-4">
//     <input
//       type="text"
//       placeholder="Subject"
//       className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   {/* Third Row - Description */}
//   <div className="flex-1">
//     <textarea
//       placeholder="Description"
//       className="w-full h-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//       rows={4}
//     />
//   </div>

//   {/* Optional Submit Button */}
//   <Button className="mt-4 max-w-[157px] w-full h-[44px] rounded-none bg-red-500 text-white  hover:bg-[#5a1616] transition-colors">
//     Send Message
//   </Button>
// </div>
// </div>


//    {/* second col  */}
//   <div  className='w-[50%] xl:max-w-[583px] xl:w-full h-auto'> 

//   <Image
//       src="/images/contact/call.svg"
//       alt="contact"
//       width={683}
//       height={683}
//       priority
//      className='w-full h-auto'
//     />
//   </div>
  

//   </div>

//   </div>
//   </>
//   )
// }

// export default page;


import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <>
      <section className="bg-[#F6F5FF] w-full py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#151875] font-bold">
            Shop Grid Default
          </h2>
          <div className="text-sm sm:text-base text-[#8A8FB9]">
            Home . Pages <span className="text-[#FB2E86]">Contact us</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Right Sidebar */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151875]">
              Information About us
            </h1>
            <p className="text-[#8A8FB9] text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex space-x-4">
              {['#5625DF', '#FF27B7', '#37DAF3'].map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Left Sidebar */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151875]">
              Contact Way
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 ${method.color}`} />
                  <div className="text-[#8A8FB9] text-sm sm:text-base">
                    <p>{method.line1}</p>
                    <p>{method.line2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 lg:mt-20">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151875]">
              Get In Touch
            </h1>
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Description"
                className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="w-full sm:w-auto px-8 py-4 bg-[#FB2E86] hover:bg-[#d12671] transition-colors">
                Send Message
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src="/images/contact/call.svg"
              alt="Contact illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const contactMethods = [
  {
    color: 'bg-red-500',
    line1: 'Tel: 877-67-88-99',
    line2: 'E-Mail: shop@store.com'
  },
  {
    color: 'bg-blue-500',
    line1: 'Support Forum',
    line2: 'For over 24hr'
  },
  {
    color: 'bg-green-500',
    line1: '20 Margaret st, London',
    line2: 'Great britain, 3NM98-LK'
  },
  {
    color: 'bg-yellow-500',
    line1: 'Free standard shipping',
    line2: 'on all orders.'
  }
]

export default page