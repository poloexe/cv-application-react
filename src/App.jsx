import './App.css'
import EducationalExp from './Components/EducationalExp'
import GeneralInfo from './Components/GeneralInfo'
import PracticalExp from './Components/PracticalExp'
import Display from './Display'

function App() {


  return (
    <>
      <h1>CV Application</h1>
      
      <form action="">
        <GeneralInfo />
        <EducationalExp />
        <PracticalExp />
      </form>
    </>
  )
}

export default App
