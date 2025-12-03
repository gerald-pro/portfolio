import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
    {
        variants: {
            variant: {
                default: "bg-cyber-cyan text-white hover:bg-cyber-cyan/90 neon-glow-cyan hover:shadow-[0_0_20px_rgba(2,127,147,0.6)]",
                destructive: "bg-cyber-red text-white hover:bg-cyber-red/90 neon-glow-red hover:shadow-[0_0_20px_rgba(163,5,2,0.6)]",
                outline: "border-2 neon-border-cyan bg-transparent text-cyan-300 hover:bg-cyber-cyan/10 hover:neon-glow-cyan",
                secondary: "bg-cyber-orange text-white hover:bg-cyber-orange/90 neon-glow-orange hover:shadow-[0_0_20px_rgba(247,139,4,0.6)]",
                ghost: "hover:bg-cyber-cyan/10 hover:text-cyan-300",
                link: "text-cyan-300 underline-offset-4 hover:underline hover:text-cyber-cyan",
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
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
