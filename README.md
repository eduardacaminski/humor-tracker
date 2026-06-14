# Mood Tracker Application

A minimal web application focused on real-time emotional state switching, component state management, and short-circuit conditional rendering.

## Project Overview

Developed in React with TypeScript, this application processes user-selected emotional metrics, performing immediate state updates to dynamically switch and render corresponding emojis and status text on the screen.

## Technologies and Concepts Used

* **Language:** TypeScript (React Framework)
* **Tools:** Vite, VS Code, GitHub Actions
* **Concepts:** Component state management (`useState`), custom union types (`tipohumor`), short-circuit evaluation (`&&`), and responsive UI layout.

## Implementation

* **State Modification:** Applied a single React state hook initialized with a default string format to track the active emotional selection without complex array structures.
* **Strict Type Assignment:** Implemented a custom union type (`tipohumor`) to strict-type and restrict valid state values to 'Feliz', 'Cansada', or 'Focada'.
* **Conditional UI Mapping:** Utilized declarative short-circuit evaluations (`&&`) within the JSX structure to render unique aesthetic emojis dynamically based on the active state value.

## How It Works

The program captures inputs and modifies the displayed elements using a direct state handler and conditional evaluation:

* **State Switching:** Clicking a footer button triggers the state modifier function, overriding the current string value and forcing a component re-render:
  ```tsx
  const [humor, sethumor] = useState<tipohumor>('Feliz');
  
  <button onClick={() => sethumor('Cansada')}>🍰 Cansada</button>
