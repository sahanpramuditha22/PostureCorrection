// src/Profile.js
import React from 'react';
import LinearGraph from './GraphCom/LinearGraph';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.header}>Graphical Representation Of The Patient</h2>
      <div style={styles.graphContainer}>
        <LinearGraph />
      </div>
      <Footer style={styles.footer} />
    </div>
  );
};

const styles = {
  dashboardContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    color: 'white',
    marginBottom: '20px',
  },
  graphContainer: {
    marginBottom: '20px',
  },
  footer: {
    marginTop: '20px',
  },
  // Media query for small screens
  '@media (max-width: 768px)': {
    dashboardContainer: {
      padding: '10px',
    },
    header: {
      fontSize: '1.5rem',
    },
  },
};

export default Dashboard;
