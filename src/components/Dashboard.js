// src/components/Dashboard.js
import React, { useState } from 'react';
import PendingBox from './Pendingbox';
import CompletedBox from './Completedbox';

const Dashboard = ({ selectedSidebarItem, selectedSubOption }) => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="dashboard">
      <h2>{selectedSidebarItem}</h2>
      {selectedSubOption === 'Pending' && (
        <PendingBox selectedStatus={selectedStatus} />
      )}
      {selectedSubOption === 'Completed' && (
        <CompletedBox selectedStatus={selectedStatus} />
      )}
    </div>
  );
};

export default Dashboard;
