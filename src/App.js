import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Contact name="Maddie Kisard" avatar="https://randomuser.me/api/portraits/women/12.jpg" online />
      <Contact name="Jessie Nehr" avatar="https://randomuser.me/api/portraits/men/83.jpg" online />
      <Contact name="Hugh Janus" avatar="https://randomuser.me/api/portraits/men/20.jpg" />
    </div>
  );
}

export default App;
