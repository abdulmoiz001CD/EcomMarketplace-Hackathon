import { LucideIcon } from 'lucide-react';
import React from 'react'

export type Props = {
    label:string;
    icon:string;
    amount:string;
    description:string;
}


const Card = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
     <section className='flex justify-between gap-2'>
     <p className='text-sm'>{props.label}</p>
     {/* <props.icon className='h-4 w-4 text-gray-400' /> */}
     <div className='h-4 w-4 text-gray-400'>{props.icon}</div>
        </section> 
     <section className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>{props.amount}</h2>
        <p className='text-xs text-grey-500'>{props.description}</p>
     </section>
     </div>
  )
}

export default Card;