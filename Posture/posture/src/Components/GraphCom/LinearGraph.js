import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { db } from '../../firebaseConfig';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LinearGraph = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = db.ref('/');
      dataRef.on('value', (snapshot) => {
        const newData = snapshot.val();
        console.log('Fetched data:', newData); // Debug log to check fetched data
        setData(newData);
      });

      // Clean up listener when component unmounts
      return () => dataRef.off();
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs only once on mount

  const prepareChartData = () => {
    if (!data || Object.keys(data).length === 0) {
      return { labels: [], datasets: [] };
    }

    // Extract numeric keys and sort them numerically
    const numericKeys = Object.keys(data)
      .filter(key => !isNaN(parseInt(key))) // Filter out non-numeric keys
      .sort((a, b) => parseInt(a) - parseInt(b));

    // Map numeric keys to labels and datasets
    const labels = numericKeys.map(key => data[key].time.toString()); // Convert time to string if needed
    const channelColors = [
      'rgba(255, 99, 132, 1)', // Red
      'rgba(54, 162, 235, 1)', // Blue
      'rgba(75, 192, 192, 1)', // Green
      'rgba(153, 102, 255, 1)', // Purple
     // 'rgba(255, 159, 64, 0.5)', // Orange
      // Add more colors if there are more channels
    ];

    const datasets = Object.keys(data[numericKeys[0]]) // Assuming all numeric keys have the same channels
      .filter(key => key !== 'time')
      .map((channel, index) => ({
        label: channel,
        data: numericKeys.map(key => data[key][channel]),
        fill: false,
        borderColor: channelColors[index % channelColors.length], // Cycle through the color array
        backgroundColor: channelColors[index % channelColors.length], // Use same color for points
      }));

    return { labels, datasets };
  };

  const chartData = prepareChartData();

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Linear Graph</h2>
      <div style={styles.chartContainer}>
        {chartData.labels.length > 0 && chartData.datasets.length > 0 ? (
          <Line
            data={{
              labels: chartData.labels,
              datasets: chartData.datasets,
            }}
            options={{
              scales: {
                x: {
                  type: 'category', // Use 'category' scale for categorical data
                  labels: chartData.labels,
                },
                y: {
                  type: 'linear', // Use 'linear' scale for numeric data
                  // Additional configuration if needed
                },
              },
            }}
          />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    color: 'white',
  },
  chartContainer: {
    height: '500px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  '@media (max-width: 768px)': {
    chartContainer: {
      height: '300px',
      width: '100%',
    },
  },
};

export default LinearGraph;
