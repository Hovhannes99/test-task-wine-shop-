import React, {useState} from 'react';
import Header from "./components/header";


export const Store = React.createContext("Error")

function App() {
   const [winesInCart, setWinesInCart] = useState<object[]>([])
   const   store : any = {winesInCart, setWinesInCart}
  return (
      <Store.Provider value={store}>
        <div className="app-style">
        <Header/>
        </div>
     </Store.Provider>
  );
}

export default App;
