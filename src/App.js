import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import AddButton from './components/layout/AddButton';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });
  return (
    <div>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <TechListModal />
        <AddTechModal />
        <Logs />
      </div>
    </div>
  );
}

export default App;
