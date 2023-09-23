"use client"

import * as React from "react"
import { Check, Circle } from "lucide-react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@src/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

interface IRadioGroupItemCustom {
  text: string
  icon?: React.ReactNode
}

const RadioGroupItemCustom = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & IRadioGroupItemCustom
>(({ className, children, text, icon, ...props }, ref) => {
  return (
    <div className="relative">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "flex w-full cursor-pointer text-sm items-center justify-center gap-2 rounded-md border-0 bg-primary-foreground py-3 text-secondary-foreground hover:transition disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
    
          {icon}
          {text}
        
        <RadioGroupPrimitive.Indicator className="border border-primary rounded-md absolute w-full h-full">
          <Check className="hidden md:block w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </div>
  )
})
RadioGroupItemCustom.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem, RadioGroupItemCustom }
