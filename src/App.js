// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';
import EmployeeTable from './components/Employeetable';

function App() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [employeeData, setEmployeeData] = useState([
    {
      "userName": "John Doe",
      "riskLevel": "High",
      "triggerReason": "Fraudulent Activity",
      "inQueueFor": "Review",
      "dateAddedOn": "2023-11-20",
      "previouslyReviewed": false
    },
    {
      "userName": "Jane Smith",
      "riskLevel": "Medium",
      "triggerReason": "Unusual Transactions",
      "inQueueFor": "Analysis",
      "dateAddedOn": "2023-11-19",
      "previouslyReviewed": true
    },
    {
      "userName": "Bob Johnson",
      "riskLevel": "Low",
      "triggerReason": "Large Transactions",
      "inQueueFor": "Review",
      "dateAddedOn": "2023-11-18",
      "previouslyReviewed": true
    },
    {
      "userName": "Alice Brown",
      "riskLevel": "Medium",
      "triggerReason": "Account Change",
      "inQueueFor": "Analysis",
      "dateAddedOn": "2023-11-17",
      "previouslyReviewed": false
    }
  ]);
  console.log(employeeData[0].userName);

  const handleSidebarSelect = (item) => {
    setSelectedSidebarItem(item);
    setSelectedSubOption(null); // Reset sub-option when changing the main option
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedSubOption(subOption);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar
          onSelect={handleSidebarSelect}
          onSubOptionSelect={handleSubOptionSelect}
        />
        <Dashboard
          selectedSidebarItem={selectedSidebarItem}
          selectedSubOption={selectedSubOption}
        />
        {(selectedSubOption === 'Pending' || selectedSubOption === 'Completed') && (
          <EmployeeTable
            data={employeeData.filter((employee) => employee.inQueueFor === selectedSubOption)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
