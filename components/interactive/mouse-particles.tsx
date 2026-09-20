'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  velocityX: number;
  velocityY: number;
  size: number;
  opacity: number;
  angle: number;
};

export function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let particles: Particle[] = [];
    let mouseX: number | null = null;
    let mouseY: number | null = null;
    const mouseRadius = 150;

    const resize = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const particleCount = Math.min(1400, Math.floor((width * height) / 5000));
      particles = Array.from({ length: particleCount }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          baseX: x,
          baseY: y,
          velocityX: 0,
          velocityY: 0,
          size: 0.5 + Math.random() * 1.8,
          opacity: 0.35 + Math.random() * 0.45,
          angle: Math.random() * Math.PI * 2,
        };
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const clearMouse = () => {
      mouseX = null;
      mouseY = null;
    };

    const frame = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.angle += 0.002;
        particle.baseX += Math.cos(particle.angle) * particle.size * 0.08;
        particle.baseY += Math.sin(particle.angle) * particle.size * 0.08;

        if (mouseX !== null && mouseY !== null) {
          const distanceX = particle.x - mouseX;
          const distanceY = particle.y - mouseY;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            const angle = Math.atan2(distanceY, distanceX);
            particle.velocityX += Math.cos(angle) * force * 1.5;
            particle.velocityY += Math.sin(angle) * force * 1.5;
          }
        }

        particle.velocityX += (particle.baseX - particle.x) * 0.002;
        particle.velocityY += (particle.baseY - particle.y) * 0.002;
        particle.velocityX *= 0.92;
        particle.velocityY *= 0.92;
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const particleColor = document.documentElement.classList.contains('dark')
          ? '255, 255, 255'
          : '7, 26, 51';
        context.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(frame);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', clearMouse);
    resize();
    frame();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', clearMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
