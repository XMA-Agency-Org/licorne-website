import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const fieldControlVariants = cva(
  "w-full rounded-sm border bg-white px-4 py-3 text-text transition-colors placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
  {
    variants: {
      invalid: {
        true: "border-danger",
        false: "border-base-200",
      },
    },
    defaultVariants: { invalid: false },
  }
)

type FieldControlVariants = VariantProps<typeof fieldControlVariants>

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-2 block text-sm font-medium text-text-secondary", className)}
      {...props}
    />
  )
}

export function Input({ className, invalid, ...props }: React.ComponentProps<"input"> & FieldControlVariants) {
  return <input className={cn(fieldControlVariants({ invalid }), className)} {...props} />
}

export function Textarea({ className, invalid, ...props }: React.ComponentProps<"textarea"> & FieldControlVariants) {
  return <textarea className={cn(fieldControlVariants({ invalid }), "resize-none", className)} {...props} />
}

export function Select({ className, invalid, ...props }: React.ComponentProps<"select"> & FieldControlVariants) {
  return <select className={cn(fieldControlVariants({ invalid }), className)} {...props} />
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1.5 text-sm text-danger-text">{message}</p>
}
