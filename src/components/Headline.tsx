import { useState } from 'react'

export const Headline = ({ beenHere }: { beenHere: boolean }) => {
  const [headline, setHeadline] = useState(beenHere ? 'Welcome Back!' : 'Hello There, First Timer')
  const [showHeadline, setShowHeadline] = useState(true)

  const updateHeadline = () => {
    setShowHeadline(false)
  }

  const headlineFieldExit = (event: React.FocusEvent<HTMLInputElement>) => {
    setHeadline(event.currentTarget.value)
    setShowHeadline(true)
  }

  return (
    <>
      {showHeadline ? (
        <h1
          className="mb-4 text-center"
          onClick={updateHeadline}>
          {headline}
        </h1>
      ) : (
        <input
          type="text"
          defaultValue={headline}
          className="block w-full border border-white mb-6 rounded-sm p-4"
          onBlur={headlineFieldExit}
          autoFocus
        />
      )}
    </>
  )
}