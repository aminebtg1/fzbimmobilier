import * as React from "react"
import { cn } from "@/lib/utils"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  onClose?: () => void
  className?: string
}

const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose, className }) => {
  const baseClasses = "fixed bottom-4 right-4 p-4 rounded-md shadow-lg z-50"
  const typeClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  }

  return (
    <div className={cn(baseClasses, typeClasses[type], className)}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-gray-200"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export { Toast }
