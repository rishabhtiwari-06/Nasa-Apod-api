import { useState, useEffect } from "react";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

function App() {
  const [data, setData] = useState(null);
  const [loadData, setLoadData] = useState(false);
  const [toggle, setToggle] = useState(false)

  function handleClick (){
    setToggle(!toggle)
  }

  useEffect(() => {
    async function fetchAPI() {
      const baseUrl = "https://api.nasa.gov/planetary/apod";
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `${baseUrl}?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      try {
        if (localStorage.getItem(localKey)) {
          const dataAPI = JSON.parse(localStorage.getItem(localKey));

          setData(dataAPI);
          // console.log(dataAPI);
          return;
        }
      } catch (error) {
        alert(error.message);
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch APOD data");
        }
        const dataAPI = await res.json();
        localStorage.setItem(localKey, JSON.stringify(dataAPI));
        setData(dataAPI);
        // console.log(dataAPI);
      } catch (error) {
        console.error("Error fetching APOD data:", error.message);
      } //https://api.nasa.gov/planetary/apod
    }
    fetchAPI();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="max-h-full relative">
          {data ? <Main toggle={toggle} handleClick={handleClick} /> : <div className="loading state">Error in fetching Api</div>}
          {toggle && (<Sidebar data={data} toggle={toggle} handleClick={handleClick}/> )}
          <Footer data={data} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default App;
