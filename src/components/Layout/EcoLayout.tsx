import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const EcoLayout = ({children}) => 
  <div>
    <Header/>
    {children}
    <Footer/>
  </div>;
export { EcoLayout };
