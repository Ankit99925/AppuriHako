import React from 'react'

type HeroProps = {
  name: string;
  title: string;
  body: string;
  badges: string[];
}

const Hero: React.FC<HeroProps> = ({ name, title, body, badges }) => {
  return (
    <div className="hero bg-base-200 rounded-lg shadow-sm">
      <div className="hero-content text-center">
        <div className="max-w-3xl px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            {name}
          </h1>
          <p className="text-xl md:text-2xl font-semibold opacity-80">
            {title}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {badges.map((badge) => (
              <div key={badge} className="badge badge-outline badge-lg">{badge}</div>
            ))}
          </div>
          <div className="divider max-w-xs mx-auto"></div>
          <p className="text-base md:text-lg leading-relaxed opacity-90 whitespace-pre-line text-left sm:text-center">
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
