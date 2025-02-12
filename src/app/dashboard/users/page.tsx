"use client"
import { DataTable } from "@/app/Components/dashboard/DataTable"
import Pagetitle from "@/app/Components/dashboard/PageTitle"
import { ColumnDef } from "@tanstack/react-table"

type CustomerData = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
}

export const data: CustomerData[] = [
  {
    name: "John Smith",
    email: "john.s@example.com",
    lastOrder: "2024-02-10",
    method: "Credit Card"
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    lastOrder: "2024-02-11",
    method: "PayPal"
  },
  {
    name: "Michael Chen",
    email: "m.chen@example.com",
    lastOrder: "2024-02-08",
    method: "Debit Card"
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    lastOrder: "2024-02-12",
    method: "Apple Pay"
  },
  {
    name: "Alex Rodriguez",
    email: "alex.r@example.com",
    lastOrder: "2024-02-09",
    method: "Google Pay"
  },
  {
    name: "Lisa Brown",
    email: "lisa.b@example.com",
    lastOrder: "2024-02-07",
    method: "Credit Card"
  }
];

export const columns: ColumnDef<CustomerData>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Payment Method",
  },
];

const page = () => {
  return (
    <div className='relative pt-24 pb-10 w-full px-3 flex flex-col gap-7'>
      <Pagetitle title="User" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default page