
import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}: {
    title: string;
    icon: React.ReactNode,
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
        <button className="relative inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-red-800 bg-[linear-gradient(110deg,#030000,45%,#311e1e,55%,#030000)] bg-[length:200%_100%] px-6 font-medium text-red-100 transition-all focus:outline-none md:w-60 md:mt-10 hover:scale-110" onClick={handleClick}>
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center px-7 text-sm font-medium gap-2 ${otherClasses}`}>
                {position == 'left' && icon}
                {title}
                {position == 'right' && icon}
            </span>

        </button>
  )
}

export default MagicButton
