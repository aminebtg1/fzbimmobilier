import * as React from "react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

const ModalHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("p-6 border-b", className)}>
    {children}
  </div>
)

const ModalBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("p-6", className)}>
    {children}
  </div>
)

const ModalFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("p-6 border-t flex justify-end space-x-2", className)}>
    {children}
  </div>
)

export { Modal, ModalHeader, ModalBody, ModalFooter }
