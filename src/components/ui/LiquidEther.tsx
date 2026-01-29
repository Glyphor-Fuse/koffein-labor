import React, { useEffect, useRef } from 'react';

export const LiquidEther = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const step = 40;
      ctx.strokeStyle = 'rgba(20, 10, 12, 0.05)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          const distortion = Math.sin(x * 0.01 + time + y * 0.005) * 20;
          if (y === 0) ctx.moveTo(x + distortion, y);
          else ctx.lineTo(x + distortion, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-30 pointer-events-none"
    />
  );
};
