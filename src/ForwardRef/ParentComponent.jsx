import { useRef } from "react"
import ChildComponent from "./ChildComponent"


const ParentComponent = () => {
    const inputRef = useRef(null)
  return (
      <div>
          <ChildComponent ref={inputRef} />
          <button onClick={() => inputRef.current.focus()} >Focus</button>
    </div>
  )
}

export default ParentComponent