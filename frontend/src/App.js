import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Bio from './components/Bio';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Portfolio/>
      <Skills/>
      <Bio/>
    </>
  );
}

export default App;
