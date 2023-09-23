'use client'

import { Baloo_2 } from 'next/font/google'
import { MapPin } from "lucide-react"
import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@src/components/ui/form"
import { Input } from "@src/components/ui/input"
import { cn } from '@src/lib/utils'

const baloo = Baloo_2({ subsets: ['latin'] })

export function AddressForm() {
  const confirmOrderForm = useFormContext()

  return (
    <>  
      <h2 className={cn("font-bold text-lg", baloo.className)}>
        Complete seu pedido
      </h2>

      <div className='space-y-4 bg-secondary p-4 lg:p-8 grid grid-cols-3 lg:grid-cols-[12.5rem_17.25rem_3.75rem] w-full gap-x-3 rounded-md'>
        <div className='flex gap-1 col-span-3 pb-3 items-start'>
          <MapPin className='w-6 h-6 pt-1 text-yellow-500' />
          <div className='flex flex-col -space-y-1'>
            <span>Endereço de Entrega</span>
            <span className='text-sm text-muted-foreground'>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>

        <FormField
          control={confirmOrderForm.control}
          name="cep"
          render={({ field }) => (
            <FormItem className='col-span-3'>
              <FormControl>
                <Input placeholder='CEP' {...field} className='lg:max-w-[12.5rem]' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={confirmOrderForm.control}
          name="street"
          render={({ field }) => (
            <FormItem className='col-span-3'>
              <FormControl>
                <Input placeholder='Rua' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={confirmOrderForm.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Número' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={confirmOrderForm.control}
          name="complement"
          render={({ field }) => (
            <FormItem className='col-span-2 relative'>
              <FormControl>
                <div className='relative'>
                  <Input placeholder='Complemento' {...field} className='pr-16' />
                  <span className="absolute inset-y-0 right-3 flex items-center pl-2 text-muted-foreground text-xs italic">
                    opcional
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={confirmOrderForm.control}
          name="district"
          render={({ field }) => (
            <FormItem className='col-span-3 lg:col-span-1'>
              <FormControl>
                <Input placeholder='Bairro' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={confirmOrderForm.control}
          name="city"
          render={({ field }) => (
            <FormItem className='col-span-2 lg:col-span-1'>
              <FormControl>
                <Input placeholder='Cidade' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={confirmOrderForm.control}
          name="uf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='UF' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}