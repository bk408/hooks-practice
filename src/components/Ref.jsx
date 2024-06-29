import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = "";
  };

  const backGroundColorChange = () => {
    inputRef.current.style.backgroundColor = "teal";
  };

  const backGroundColorRemove = () => {
    inputRef.current.style.backgroundColor = "";
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Please write something" />
      <button onClick={focusInput}>Click me for focus</button>
      <button onClick={clearInput}>Click me for clear</button>
      <button onClick={backGroundColorChange}>
        Click me for background color
      </button>
      <button onClick={backGroundColorRemove}>
        Click me for remove background color
      </button>
    </div>
  );
};

export default Ref;

/* This example showcases how useRef can be used to directly interact with and manipulate a DOM element without causing re-renders, 
demonstrating its utility in managing focus, clearing input, and modifying styles.

 */

/* useRef gives us the way to access the dom elements during the rendered. It is helpful when we want to update the component
    without using state, props and prevent the event triggering
*/
