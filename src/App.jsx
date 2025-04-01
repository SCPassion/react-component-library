import Badge from "./Components/Badge.jsx"
import Banner from "./Components/Banner.jsx"
import Card from "./Components/Card/index.jsx"
import Testimonial from "./Components/Testimonial/index.jsx"
import ToastPopup from "./Components/ToastPopups/ToastPopup.jsx"
import usePopup from "./Hooks/usePopup.js"

import { createPortal } from "react-dom"
import React from "react"

export default function App() {
  const [isOpen, handleSubmit] = usePopup()

  return (
    <div>
      <button
        className="cursor-pointer rounded-full bg-rose-300 px-2 py-1"
        onClick={handleSubmit}
      >
        submit
      </button>
      <ToastPopup isOpen={isOpen} status="error" title="Error">
        Please re-save your work again
      </ToastPopup>
    </div>
  )
}
