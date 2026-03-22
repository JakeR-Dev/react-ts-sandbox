type RemoveUserProps = {
  onRemove: () => void
}

export const RemoveUser = ({ onRemove }: RemoveUserProps) => {
  return (
    <button
      onClick={onRemove}
      className="absolute block top-1 right-2 font-normal transform rotate-45">
      +
    </button>
  )
}