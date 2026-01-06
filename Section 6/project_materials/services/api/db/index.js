
import { dashboardData } from "./data/dashboard"
import { generalKnowledge } from "./data/generalKnowledge"
import { scienceChallenge } from "./data/scienceChallenge"
import { travelGeography } from "./data/travelGeography"


const dbName = 'DB_243';

// Database initialization
function initializeDB() {
  // Check if database exists in localStorage
  if (!localStorage.getItem(dbName)) {
    // Initialize with empty database structure
    const initialDB = {
      users: [],
      dashboardData: dashboardData,
      generalKnowledge: generalKnowledge,
      scienceChallenge: scienceChallenge,
      travelGeography: travelGeography
    };
    localStorage.setItem(dbName, JSON.stringify(initialDB));
    console.log('Database initialized successfully!');
  } 
}

initializeDB()

// Get the database instance
function getDB() {
  const dbData = localStorage.getItem(dbName);
  return dbData ? JSON.parse(dbData) : null;
}

// Update the database
function updateDB(updatedData) {

  localStorage.setItem(dbName, JSON.stringify(updatedData));
}

export {getDB, updateDB}