import ConnectWalletButton from "../ConnectWallet/ConnectWalletButton"
import About from "./Sections/About"
import HomeSection from "./Sections/HomeSection"
import Roadmap from "./Sections/Roadmap"
// import ProgressBar from './StepProgressBar/ProgressBar'
// import Progress

const Home = () => {
  return (
    <div className="lg:ml-64">
      <HomeSection />
      {/* <About /> */}
      <Roadmap />
    </div>
  )
}

export default Home