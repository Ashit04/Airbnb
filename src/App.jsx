import React, {useState} from 'react'
import Navbar from './components/navbar'
import Select from './components/Select'
import Hotel from './components/hotel'

const App = () => {
 
  const [selectedSection, setSelectedSection] = useState("dataForAmazingPools");
  
  return (
    <>
      <Navbar />
      <Select setSelectedSection={setSelectedSection} />
      <Hotel selectedSection={selectedSection}  />
    </>
  );
};

export default App;
