import './App.css';
import React, { useState } from 'react';
import BibInput from './BibInput';
import Stats from './Stats'

function App() {
  const [receivedObject, setReceivedObject] = useState(null);
  /**
   *  SUGGEST: rename above to reflect what it actually is
   *  It is the object received from the API, but what specifically is it?
   *  Is it just data?
   * */

  // Seeing as this data is required globally through the app, it may be worth putting it in something like React Context
  // This would mean you wouldn't need to pass the function down as props or the data object to the Stats component
  // These values could be provided by default using React Context -- which is a good thing to learn
  const handleObjectFromChild = (object) => {
    setReceivedObject(object.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Homestead 24 2022-2024 Stats & Grapher</h1>
        <BibInput onObjectReceived={handleObjectFromChild} />
        <Stats data={receivedObject} />
      </header>
    </div>


  )
}




export default App;
