import React, { useEffect, useRef } from 'react'

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  draw: (context: CanvasRenderingContext2D, height: number, width: number) => void
}

const Canvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    draw(context, +props.height!, +props.width!)
  })

  return (
    <canvas
      width={1740}
      height={760}
      ref={canvasRef}
      style={props.style}
    />
  )
}

export default Canvas
