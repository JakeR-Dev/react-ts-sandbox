import { useState, type ElementType } from 'react'

export const PreTitle = () => {
  const [Tag, setTag] = useState<ElementType>('h6')

  const preTitleTagToggle = () => {
    Tag === 'h6' ? setTag('h2') : setTag('h6');
  }

  return (
    <Tag
      className="text-center cursor-pointer !text-gray-500"
      onClick={preTitleTagToggle}>
      The Sandbox
    </Tag>
  )  
}