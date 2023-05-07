import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </div>
    <h1 style={{ fontWeight: 900 }}>HOW TO CREATE A VITE + REACT APP!</h1>
    <div className='card'>
      <h3>What is Vite?</h3>
      <p>
        Vite is a build tool and development server designed to improve the development process of modern web applications. It does this by dividing
        your application modules into dependencies and source code. Dependencies are modules that do not change often, while source code is typically
        edited frequently during development. Vite uses esbuild, a Go-based bundler that is significantly faster than traditional JavaScript-based
        bundlers to speed up the build process for the source code. It also pre-bundles your application's dependencies and serves the source code
        over native ESM, allowing browsers to optimize the loading of modules for more efficient and faster application performance. When it comes
        time to deploy your application to production, Vite has a built-in build command that automatically optimizes your app for deployment,
        ensuring that your application runs smoothly.
      </p>

      <h3>Steps:</h3>
      <code>npm create vite@latest</code>
      <br />
      <code>cd my-app-dir</code>
      <br />
      <code>npm i</code>
      <br />
      <code>npm run dev</code>
      <br />

      <h3>Use Vite for Fast Development Speed</h3>
      <p>
        CRA (create-react-app) is usually the default tool for setting up the project structure and configuration for a React application. It’s
        convenient as everything is set up for you, but it can be slow to build and reload during development. Vite, on the other hand, uses native ES
        modules in the browser to provide faster build times. If you don't want to use Vite, you can opt for a React meta framework like Next.js as
        it's also designed to be highly performant.
      </p>
      <button onClick={() => {}}>❤️ {5}</button>
    </div>
    <p className='read-the-docs'>Thanks for Visiting!</p>
  </StrictMode>
)
