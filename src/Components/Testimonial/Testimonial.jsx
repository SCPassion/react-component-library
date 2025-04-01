import ladyImage from "/lady.jpg"

import { FaQuoteLeft } from "react-icons/fa"

/**
 * Testimonial component
 * @param {Object} props - The component props
 */
export default function ({ children }) {
  return (
    <section className="flex w-[75%] min-w-[378px] flex-col items-center gap-12 bg-[#2545B8] px-4 py-16 text-[#FFFFFF] lg:max-h-[400px] lg:max-w-[1358px] lg:flex-row lg:px-16">
      {children}
    </section>
  )
}
