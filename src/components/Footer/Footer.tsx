// Utilities
import { getCurrentYear } from "@/utilities/date"

/**
 * Footer component
 */
export const Footer = () => {
    return(
        <footer className="w-full text-center py-4">
            <p>© {getCurrentYear()} Ldvloper. All rights reserved.</p>
        </footer>
    )
}