import ChartSection from './Components/ChartSection/ChartSection';
import MainSection from './Components/Main/MainSection';
import ReviewSection from './Components/ReviewSection/ReviewSection';
import TopSection from './Components/TopSection/TopSection';
import NavBar from './Components/navbar/NavBar';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
     <TopSection></TopSection>
     <ChartSection></ChartSection>
     <ReviewSection></ReviewSection>
     <Features></Features>
     <Team></Team>
     <Footer></Footer>
     

    </div>
  );
}

export default App;
