import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-500 text-white hover:bg-primary-400 neon-glow-cyan",
                secondary:
                    "bg-secondary-500 text-white hover:bg-secondary-400 neon-glow-orange",
                destructive:
                    "bg-danger-500 text-white hover:bg-danger-400 neon-glow-red",
                outline:
                    "border-2 neon-border-cyan bg-transparent text-primary-400 hover:bg-primary-500/10",
                ghost:
                    "text-primary-400 hover:bg-primary-500/10",
                link:
                    "text-primary-400 underline-offset-4 hover:underline hover:text-primary-300",
            },
            size: {
                default: "h-10 px-6 py-2.5 rounded-sm",
                sm: "h-9 px-4 text-xs rounded-sm",
                lg: "h-12 px-8 text-base rounded-sm",
                icon: "h-10 w-10 rounded-sm",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
