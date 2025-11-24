import * as React from "react"
import { cn } from "@/lib/utils"

const Section = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("py-8 md:py-12 lg:py-16", className)}
        {...props}
    />
))
Section.displayName = "Section"

const SectionHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-2 mb-8 md:mb-12", className)}
        {...props}
    />
))
SectionHeader.displayName = "SectionHeader"

const SectionTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-900 dark:text-brand-100",
            className
        )}
        {...props}
    />
))
SectionTitle.displayName = "SectionTitle"

const SectionSubtitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            "max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400",
            className
        )}
        {...props}
    />
))
SectionSubtitle.displayName = "SectionSubtitle"

export { Section, SectionHeader, SectionTitle, SectionSubtitle }
