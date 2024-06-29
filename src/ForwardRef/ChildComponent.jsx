import { forwardRef } from "react"


const ChildComponent = forwardRef((props, ref) => {
   return <input ref={ref} {...props} />;


    
})

export default ChildComponent