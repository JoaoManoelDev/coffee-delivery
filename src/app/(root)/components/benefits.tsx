import { LucideIcon } from "lucide-react"

import { cn } from "@src/lib/utils"

interface BenefitsProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  icon: LucideIcon
}

export function Benefits({ title, icon: Icon, className }: BenefitsProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn('text-white w-8 h-8 rounded-full flex items-center justify-center text-sm', className)}
      >
        <Icon className='w-4 h-4' />
      </div>

      <span>{title}</span>
    </div>
  )
}