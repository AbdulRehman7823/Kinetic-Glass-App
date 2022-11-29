import React from 'react'
import ChartSection from '../frontPageComponents/ChartSection/ChartSection';
import TopSection from '../frontPageComponents/TopSection/TopSection';
import Features from '../frontPageComponents/Features/Features';
import Footer from '../frontPageComponents/Footer/Footer';
import Team from '../frontPageComponents/Team/Team';

function FrontPage() {
  return (<div>
    
   <div className="">
     <TopSection></TopSection>
     <ChartSection></ChartSection>
     <Features></Features>
     <Team></Team>
     <Footer></Footer>
         </div>
  </div>)}

export default FrontPage