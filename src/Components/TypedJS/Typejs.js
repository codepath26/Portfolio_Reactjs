import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = (props) => {
  useEffect(() => {
    // Target the element where you want to apply Typed.js
    const element = document.getElementById('element');

    // Check if the element exists
    if (element) {
      // Initialize Typed.js
      const typed = new Typed(element, {
        strings: props.greeting || ['Welcome'],
        typeSpeed: 50,
      });

      // Cleanup when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, [props.greeting]); // Run this effect only once when the component mounts

  return (
    <div >
      <span id="element" className='dark:text-white text-indigo-600 text-2xl font-medium'></span>
    </div>
  );
};

export default TypedComponent;
