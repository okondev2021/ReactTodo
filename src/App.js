import TASKS from './components/tasks'
import { useState } from 'react'

function App() {

  const [isLightTheme, setIsLightTheme] = useState(true)

  const themeChange = () => {
      const rootElement = document.querySelector('html')
      if(isLightTheme === true){
          setIsLightTheme(false)
          rootElement.classList.add('dark')
      }
      else{
          setIsLightTheme(true)
          rootElement.classList.remove('dark')
      }
  }

  return (
    <section className='relative h-screen overflow-auto font-body bg-light-100 dark:bg-dark-100'>
      <div className={`heroSection w-full h-hero ${isLightTheme ? 'lightTheme': 'darkTheme'}`}></div>
      <main className='absolute top-0 left-0 flex justify-center w-full '>
        <TASKS themeChangeValue = {isLightTheme} themeChangeFunc = {themeChange} />
      </main>
    </section>
  );
}

export default App;
