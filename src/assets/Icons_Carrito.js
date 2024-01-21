import React from 'react';

export default function Icons_Carrito({countProducts , total , allProducts}) {
  const styles = {
    svg: {
      width: 65,
      height: 65,
      fill: 'black'
    },
    circle: {
      fill: 'none',
      stroke: 'black',
      strokeWidth: 2,
      strokeMiterlimit: 10,
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      textAnchor: 'middle',
      fill: 'blue',
      transform: 'rotate(0deg)',
      
    },
  };

  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={styles.svg}>
      <circle style={styles.circle} cx="22" cy="24" r="2" />
      <circle style={styles.circle} cx="13" cy="24" r="2" />
      <path d="M25.658,10l-2.422,9H10.781L8.159,8.515C7.937,7.625,7.137,7,6.219,7H4C3.448,7,3,7.448,3,8c0,0.552,0.448,1,1,1h2.219 l2.621,10.485C9.063,20.375,9.863,21,10.781,21h12.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H25.658z" />
      <text style={styles.text} x="17" y="15"  >{total}</text>
    </svg>
  );
}