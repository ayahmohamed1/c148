import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Spider-Man Red, White & Blue design tokens
const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red:          #e2231a;          /* Signature Spider-Man vibrant red */
    --red-dark:     #b31010;          /* Deep comic red */
    --red-pale:     #ffcdd2;          /* Light red border accent */
    --red-soft:     #fff1f2;          /* Soft red tint */
    --red-glow:     rgba(226, 35, 26, 0.22);
    
    --blue:         #1a56b2;          /* Spider-Man royal blue for writing & highlights */
    --blue-dark:    #0e387a;          /* Deep navy blue for headings/text */
    --blue-light:   #e8f1ff;          /* Soft sky-tinted white */
    
    --paper:        #ffffff;          /* Pure white background as requested */
    --bg:           #ffffff;
    --card:         #ffffff;          /* Crisp clean white surfaces */
    
    --text:         #0e2a47;          /* Rich navy-blue text */
    --text-light:   #1a56b2;          /* Blue accent text */
    --font-hand:    'Caveat', cursive;
    --font-body:    'Nunito', sans-serif;
  }

  body {
    background: var(--paper);
    color: var(--text);
    font-family: var(--font-body);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* Shared return button used across all pages - Spider-Man Red & White */
  .btn-return {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.6rem 1.6rem;
    border-radius: 100px;
    border: 2px solid var(--red);
    background: #ffffff;
    color: var(--red);
    cursor: pointer;
    box-shadow: 0 3px 12px rgba(226, 35, 26, 0.16);
    transition: all 0.25s ease;
  }
  .btn-return:hover {
    background: var(--red);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(226, 35, 26, 0.35);
  }
`

const style = document.createElement('style')
style.textContent = globalStyles
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
