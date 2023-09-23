'use client'

import { useForm } from "react-hook-form"
import { Banknote, CreditCard, DollarSign, LandmarkIcon } from "lucide-react"

import { FormField } from "@src/components/ui/form"

import { RadioGroup, RadioGroupItemCustom } from "@src/components/ui/radio-group"

export function PaymentMethod() {
  const confirmOrderForm = useForm()

  return (
    // Usar o component <Card />
    <div className="space-y-4 p-4 lg:p-8 rounded-md bg-secondary">
      <div className='flex gap-1 col-span-3 pb-3 items-start'>
        <DollarSign className='w-6 h-6 pt-1 text-primary' />
        <div className='flex flex-col -space-y-1'>
          <span>Pagamento</span>
          <span className='text-sm text-muted-foreground'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </div>

      <FormField
        control={confirmOrderForm.control}
        name="paymentMethod"
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            className="mt-2 grid grid-cols-3 gap-4 w-full"
          >
            <RadioGroupItemCustom
              className=""
              value="credit"
              text="CRÉDITO"
              icon={<CreditCard className="h-5 w-5 text-primary hidden md:block" />}
              disabled={confirmOrderForm.formState.isSubmitting}
            />

            <RadioGroupItemCustom
              className=""
              value="debit"
              text="DÉBITO"
              icon={<LandmarkIcon className="h-5 w-5 text-primary hidden md:block" />}
              disabled={confirmOrderForm.formState.isSubmitting}
            />

            <RadioGroupItemCustom
              className=""
              value="money"
              text="DINHEIRO"
              icon={<Banknote className="h-5 w-5 text-primary hidden md:block" />}

              disabled={confirmOrderForm.formState.isSubmitting}
            />
          </RadioGroup>
        )}
      />
    </div>
  )
}