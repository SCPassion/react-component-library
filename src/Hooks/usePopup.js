import React from "react"

export default function usePopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const canToggle = React.useRef(true)

  function handleSubmit() {
    if (!canToggle.current) return
    setIsOpen((prevIsOpen) => !prevIsOpen)
    canToggle.current = false

    setTimeout(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen)
      canToggle.current = true
    }, 3000)
  }

  return [isOpen, handleSubmit]
}
