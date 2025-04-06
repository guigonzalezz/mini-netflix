import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const baseClasses =
        "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"

    const variantClasses = {
        primary: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}

