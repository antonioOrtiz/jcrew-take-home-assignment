import { createContext, useEffect, useContext, useState } from 'react';
import axios from "axios";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState([]);

  let sharedState = {/* whatever you want */ }

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/category-server/`).then((response) => {

        console.log("response ", response);
        setData(oldObject => ([...oldObject, ...response.data.productList]));
      });
    } catch (error) {
      console.log('errors', error)
    }
  }, [])


  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
