import Banner from "../Banner.jsx"

export default function ToastPopus({ isOpen, status, title, children }) {
  return (
    isOpen && (
      <div className="absolute top-5 right-5">
        <Banner title={title} status={status}>
          {children}
        </Banner>
      </div>
    )
  )
}
