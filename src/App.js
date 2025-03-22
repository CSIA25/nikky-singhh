import React from 'react';
import FacultyProfile from './components/FacultyProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <FacultyProfile />
      <footer style={styles.footer}>
        <p>Colby College | 4000 Mayflower Hill, Waterville, ME 04901 | 207-859-4000</p>
      </footer>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: '#FBF8E9', // Cream
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#1A2D38', // Blue Black
    marginTop: '40px',
  },
};

export default App;