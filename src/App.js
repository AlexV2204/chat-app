import React from 'react';
import Contact from "./components/Contact";
import users from './components/ContactList';

function App() {
  return (

    <div>
      {users.map(user => (
        <Contact key={user} name={user.name} avatar={user.avatar} online={user.online} />
      ))}

    </div>
  );
}

export default App;
