import React from 'react'
import Blog from '../Components/BlogPage/Blog'




const page = () => {
    return (<>


        <section className="bg-[#F6F5FF]  max-w-[1920px] h-[286px]  py-8 sm:py-12 lg:py-20 ">
            <div className="max-w-[1177px] mx-auto w-full flex flex-col items-start px-5 gap-1 ">
                {/* Heading */}

                <h2 className="text-[32px] sm:text-[35px] lg:text[36px] text-[#151875] font-bold text-start">Blog Page
                </h2>
                <div>Home .Pages <span className='text-[#FB2E86] text-[16px] pl-3'>Blog Page</span></div>

            </div>
         
        </section>

     <Blog/>


    </>
    )
}

export default page;