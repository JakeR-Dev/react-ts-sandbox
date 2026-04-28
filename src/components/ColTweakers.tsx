import React from 'react'

type ColTweakersProps = {
  desktopCols: number
  setDesktopCols: React.Dispatch<React.SetStateAction<number>>
}

export const ColTweakers = ({ setDesktopCols, desktopCols }: ColTweakersProps) => {
  return (
    <div className="col-tweakers mt-2 text-center">
      <button
        className="btn m-2"
        onClick={() => setDesktopCols(desktopCols + 1)}>
        More Columns +
      </button>
      <button
        className="btn m-2"
        onClick={() => setDesktopCols(desktopCols - 1)}>
        Less Columns -
      </button>
    </div>
  )
}