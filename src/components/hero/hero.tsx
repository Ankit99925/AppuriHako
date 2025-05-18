import React from 'react'

type HeroProps = {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-lg shadow-sm">
      <div className="hero-content text-center">
        <div className="max-w-3xl px-4 py-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <div className="divider max-w-xs mx-auto"></div>
          <p className="text-base md:text-lg leading-relaxed opacity-90 whitespace-pre-line mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero