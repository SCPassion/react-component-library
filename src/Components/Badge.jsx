import { clsx } from "clsx"

export default function Badge({ color = "gray", isRounded = true }) {
  const styleClass = clsx({
    "bg-[#F3F4F6] text-[#1F2937]": color === "gray",
    "bg-[#FEE2E2] text-[#991B1B]": color === "red",
    "bg-[#FEF3C7] text-[#92400E]": color === "yellow",
    "bg-[#D1FAE5] text-[#065F46]": color === "green",
    "bg-[#DBEAFE] text-[#1E40AF]": color === "blue",
    "bg-[#E0E7FF] text-[#3730A3]": color === "indigo",
    "bg-[#EDE9FE] text-[#5B21B6]": color === "purple",
    "bg-[#FCE7F3] text-[#9D174D]": color === "pink",
  })

  const roundClass = isRounded ? "rounded-full" : "rounded"

  return (
    <>
      <div
        className={`flex h-6 w-17 items-center justify-center text-sm ${styleClass} ${roundClass} my-1`}
      >
        Badge
      </div>
    </>
  )
}
