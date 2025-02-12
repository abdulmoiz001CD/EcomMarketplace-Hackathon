import React from 'react'
import PageTitle from '../Components/dashboard/PageTitle'
import { Props } from '../Components/dashboard/Card';
import Card from '../Components/dashboard/Card';
import BarChart  from '../Components/dashboard/BarChart';
import SalesChart from '../Components/dashboard/SalesChart';


const mockData:Props[] = [
    {
      label: "Revenue",
      amount: "$12,500",
      description: "Total revenue generated this month",
      icon: "📈",
    },
    {
      label: "Expenses",
      amount: "$4,200",
      description: "Total expenses for operations",
      icon: "💸",
    },
    {
      label: "Customers",
      amount: "1,250",
      description: "New customers acquired this month",
      icon: "🧑",
    },
    {
      label: "Orders",
      amount: "3,400",
      description: "Total orders processed",
      icon: "📦",
    },
  ];
  
  


  const mockSalesData = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      salesAmount: 125850
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      salesAmount: 238940
    },
    {
      name: "Michael Chen",
      email: "m.chen@example.com",
      salesAmount: 164720
    },
    {
      name: "Emma Williams",
      email: "emma.w@example.com",
      salesAmount: 197300
    },
    {
      name: "David Rodriguez",
      email: "d.rodriguez@example.com",
      salesAmount: 145600
    }
  ];


const page = () => {
  return (
    <div className='relative pt-24 pb-10 min-w-[80px] px-3 flex flex-col gap-7'>
      <PageTitle title="Document" />
      <section className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
        {mockData.map((v,i)=>{
          return(
            <Card key={i} label={v.label} amount={v.amount} description={v.description} icon={v.icon} />
          )
         
        })}
      </section>
     
      <section className='grid w-full grid-cols-1 gap-4  transition-all lg:grid-cols-2'>

      <div className='flex w-full flex-col gap-3 rounded-xl border p-5 shadow'>
        <p className='p-4 font-semibold'>Overview</p>
        <BarChart/>
        </div>

        <div className='flex w-full flex-col gap-5 rounded-xl border p-5 shadow'>
          <div>  
          <p className='font-semibold'>Recent Sales</p>
          <p className='text-[grey]'>You may 350 sales this month</p>
          </div>

          {mockSalesData.map((v,i)=>{
            return(
              <SalesChart  name={v.name} email={v.email} salesAmount={v.salesAmount} />
            )
          })
        } 
       
          

        </div>

      </section>  




      

    </div>
  )
}

export default page