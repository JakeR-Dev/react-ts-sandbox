export const Headline = ({ beenHere }: { beenHere: boolean }) => {
  return (
    <h1 className="mb-8 text-center">
      {beenHere ? 'Welcome Back!' : 'Hello There, First Timer'}
    </h1>
  )
}