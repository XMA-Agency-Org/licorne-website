import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary: "bg-secondary text-white hover:bg-primary",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
      },
      size: {
        md: "px-6 py-3",
        lg: "px-6 py-4",
      },
      width: {
        auto: "",
        full: "w-full",
      },
    },
    defaultVariants: { variant: "primary", size: "lg", width: "auto" },
  }
)

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, width, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, width }), className)} {...props} />
}
