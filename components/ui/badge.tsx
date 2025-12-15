import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center px-3 py-1 text-xs font-medium font-mono uppercase tracking-wide rounded-sm",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-500/10 text-primary-400 border border-primary-500/40 neon-border-cyan",
                secondary:
                    "bg-secondary-500/10 text-secondary-400 border border-secondary-500/40 neon-border-orange",
                outline:
                    "bg-transparent text-primary-400 border-2 neon-border-cyan",
                destructive:
                    "bg-danger-500/10 text-danger-400 border border-danger-500/40 neon-glow-red",
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
