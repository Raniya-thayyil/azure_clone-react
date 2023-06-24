import React, { useState, useEffect} from 'react'
import Advertisement from './components/advertisement/Advertisement'
import DeveloperStory from './components/developerstory/DeveloperStory'
import Discover from './components/discover/Discover'
import Features from './components/Features/Features'
import FirstCards from './components/firstcards/FirstCards'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomeAccelerate from './components/homeaccelerate/HomeAccelerate'
import Invent from './components/invent/Invent'
import Partners from './components/partners/Partners'

function AzureHomePage() {

    const [advertisement, setAdvertisement] = useState([]);
    const [devStory, setDevStory] = useState([])
    const [discover, setDiscover] = useState([])

    const [mainData, setMainData] = useState([]);
    // const [nav, setNav] = useState([]);
    const [val, setVal] = useState("feature");
    const [feature, setFeature] = useState([]);
    const [ai, setAi] = useState([]);
    const [compute, setCompute] = useState([]);
    const [container, setContainer] = useState([]);
    const [hybrid, setHybrid] = useState([]);
    const [iot, setIot] = useState([]);

    const [cards, setCards] = useState([])
    const [invent, setInvent] = useState([])

    const [partnersData, setpartnersData] = useState([]);
    const [value, setValue] = useState("fujistu");
    const [fujistu, setFujistu] = useState([]);
    const [nba, setNba] = useState([]);
    const [hr, setHr] = useState([]);
    const [nhs, setNhs] = useState([]);
    const [forza, setForza] = useState([]);
     const fetchData = () => {
       fetch(
         "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
       )
         .then((response) => {
           return response.json();
         })
         .then((data) => {
           setAdvertisement(data.advertisement);
           setDevStory(data.Stories)
           setDiscover(data.Discoveries)
           setMainData(data.featuresList);
        setFeature(data.Featured);
        setAi(data.AiMmachineLearning);
        setCompute(data.Compute);
        setContainer(data.Containers);
        setHybrid(data.HybridMulticloud);
        setIot(data.InternetOfThings);
        setCards(data.cloudSolutions);
        setInvent(data.landingPage)

        setpartnersData(data.customersList);
        setFujistu(data.fujistu);
        setNba(data.nba);
        setHr(data.hr);
        setNhs(data.nhs);        
        setForza(data.forza);
         });
     };
     useEffect(() => {
       fetchData();
     }, []);

     const handleClick = (item) => {
        setVal(item);
      };

      const handlesClick = (item) => {
        setValue(item);
      };

  return (
    <div>
        <Header/>
        <Invent invents={invent}/>
        <FirstCards cloudsList={cards}/>
        <Features mainDatas={mainData} features={feature} 
        aiMachine={ai} computes={compute} containers={container} 
        hybrids={hybrid} iots={iot} handleClickfunction={handleClick}
        value={val}/>
        <Partners datas={partnersData} fujistu={fujistu} nba={nba} hr={hr} nhs={nhs}
        forza={forza} value={value} clickFunction={handlesClick}/>
        <HomeAccelerate/>
        <Discover discoveries={discover}/>
        <DeveloperStory stories={devStory}/>
        <Advertisement adsList={advertisement}/>
        <Footer/>
    </div>
  )
}

export default AzureHomePage