import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container h-auto p-0 mx-auto">
      {children}
    </div>
  )
}

export default Container