import React, { useState, useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>

          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
  
}

export default App;