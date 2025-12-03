import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono uppercase tracking-wide rounded-sm",
    {
        variants: {
            variant: {
                default: "bg-cyber-teal/20 text-brand-200 border border-cyber-cyan/40 neon-border-cyan",
                secondary: "bg-cyber-orange/10 text-brand-400 border border-cyber-orange/40 neon-border-orange",
                outline: "text-brand-200 border-2 neon-border-cyan bg-transparent",
                destructive: "bg-cyber-red/20 text-cyber-red border border-cyber-red/40 neon-glow-red",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
