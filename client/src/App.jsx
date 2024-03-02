
import './App.css'
import Chat from './components/chat/chat'
import HeroSection from './pages/Hero'
import Workspace from './pages/workspace'

function App() {
  return (
      <div >
        <Chat></Chat>
        <HeroSection></HeroSection>
        {/** <HeroSection />
        <Workspace /> */}
      </div>
  )
}

export default App
