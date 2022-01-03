import { useState } from "react"
import { useEffect } from "react"
import './App.css';
import Cats from  './components/Cats';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"




const App =  () => {

return(
  <Cats />

)

}


// questions to ask: faker is not working and how to push header to top
// css for cat card not working
//why doI need return in the map array  react_devtools_backend.js:4045 Warning: Functions are not valid as a React child.
//why two children with the same ind
//





export default App;
