import AddTask from './AddTask/addTask';
import './App.css';
import Footer from './Footer/footer';
import Header from './Header/header';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <Footer />
    </div>
  );
}

export default App;
