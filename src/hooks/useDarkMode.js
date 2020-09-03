import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
    const[darkMode, setDarkMode] = useLocalStorage('darkMode')
  
    return [darkMode, setDarkMode]
}