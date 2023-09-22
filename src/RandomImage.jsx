// import React, { useState, useEffect } from 'react'
// import KeyBoardCat from '../assets/Keyboard_cat.jpg'

// export default function RandomImage({ KeyBoardCat }) {
//     const [position, setPosition] = useState({ x: 0, y: 0 })

//     useEffect(() => {
//         const placeImageRandomly = (event) => {
//             const x = Math.random() * (window.innerWidth - 100)
//             const y = Math.random() * (window.innerHeight - 100)

//             setPosition({ x, y})
//         }

//         document.addEventListener('click', placeImageRandomly)

//         return () => {
//             document.addEventListener('click', placeImageRandomly)
//         }
//     }, [])

//     return (
//         <img src={KeyBoardCat} alt="" style={{
//             position: 'absolute',
//             top: position.y + 'px',
//             left: position.x + 'px',
//             width: '100px',
//             height: '100px',}} />
//     )
// }

// RandomImage.jsx
import React, { useState, useEffect } from 'react';

function RandomImage({ src }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const placeImageRandomly = (event) => {
      const x = Math.random() * (window.innerWidth - 100); // subtracting 100 to consider image width
      const y = Math.random() * (window.innerHeight - 100); // subtracting 100 to consider image height

      setPosition({ x, y });
    };

    document.addEventListener('click', placeImageRandomly);

    return () => {
      document.removeEventListener('click', placeImageRandomly);
    };
  }, []);

  return (
    <img
      src={src}
      alt="Random Placement"
      style={{
        position: 'absolute',
        top: position.y + 'px',
        left: position.x + 'px',
        width: '100px',
        height: '100px',
      }}
    />
  );
}

export default RandomImage;

