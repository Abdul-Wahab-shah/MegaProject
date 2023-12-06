import React from 'react'

function Button({Childern,
    type="button",
    bgColor="bh-blue-600",
    textColor="text-white",
    className="",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {Childern
        }
    </button>
  )
}

export default Button