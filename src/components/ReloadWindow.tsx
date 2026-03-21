export const ReloadWindow = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <button
      onClick={handleReload}
      type="button"
      className="clear-storage absolute top-2 right-2 z-999 btn">Refresh window</button>
  )
}