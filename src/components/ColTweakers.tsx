import React from 'react'

type ColTweakersProps = {
  desktopCols: number
  setDesktopCols: React.Dispatch<React.SetStateAction<number>>
}

type Direction = 'up' | 'down';

export const ColTweakers = ({ setDesktopCols, desktopCols }: ColTweakersProps) => {
  const tweakCols = (direction: Direction) => {
    const newCols = direction === 'up' ? desktopCols + 1 : desktopCols - 1;
    setDesktopCols(newCols);
    localStorage.setItem('sandboxCols', String(newCols));
  }

  return (
    <div className="col-tweakers mb-6 text-center">
      <button
        className="btn m-2"
        onClick={() => tweakCols('down')}>
        Less Columns -
      </button>
      <button
        className="btn m-2"
        onClick={() => tweakCols('up')}>
        More Columns +
      </button>
    </div>
  )
}