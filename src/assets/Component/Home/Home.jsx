import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {

    const [darkLight, setdarkLight] = useState(
        localStorage.getItem("darkLight") === "true"
      );
    
      const toggleBackground = () => {
        setdarkLight((prevTheme) => {
          const newTheme = !prevTheme;
          localStorage.setItem("darkLight", newTheme.toString());
          return newTheme;
        });
      };
    
      useEffect(() => {
        document.body.style.backgroundColor = darkLight ? "#333" : "#FFF";
        document.body.style.color = darkLight ? "#FFF" : "#000";
      }, [darkLight]);
    

    return (
        <div className='h-screen flex justify-center items-center'>
        <button onClick={toggleBackground}>
          {darkLight ? (
        <div className='main bg-black w-screen h-screen'>
          <div className='moon h-[80px] w-[80px]'>
          </div>
        </div> 
          ) : (
            <div className=''>
             <div className='text-orange-500 w-[100px] h-[100px] rounded-full sunpakhi'></div>
            </div> 
          )}
        </button>
      </div>
    );
};

export default Home;