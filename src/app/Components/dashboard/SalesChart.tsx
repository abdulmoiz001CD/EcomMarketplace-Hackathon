import React from 'react'

type Props = {
    name:string;
    email:string;
    salesAmount:number
}

const SalesChart = (props: Props) => {
  return (
    <div className='flex flex-wrap justify-between gap-3'>
     <section className='flex justify-between gap-3'>
     <div className='h-12 w-12 rounded-full  bg-gray-100 p-1'>
      <img width={200} height={200} src={``} alt='avater' />   
     </div>
     <div className='text-sm'>
        <p>{props.name}</p>
        <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400 '>
            {props.email}
        </div>
     </div>
     </section>   
     <p>{props.salesAmount}</p>
    </div>
  )
}

export default SalesChart