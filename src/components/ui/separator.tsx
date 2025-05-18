import React from 'react'

type SeparatorProps = {
  title: string;
}

const Separator: React.FC<SeparatorProps> = ({ title }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="card bg-neutral text-neutral-content rounded-box grid h-20 place-items-center px-6">
        <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
      </div>
    </div>
  )
}

export default Separator