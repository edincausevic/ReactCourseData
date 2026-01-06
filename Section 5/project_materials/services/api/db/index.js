
import {apartments} from "./apartments"
import {apartmentData} from "./apartment"


const dbName = 'DB_123';

// Database initialization
function initializeDB() {
  // Check if database exists in localStorage
  if (!localStorage.getItem(dbName)) {
    // Initialize with empty database structure
    const initialDB = {
      users: [],
      apartments: apartments,
      apartmentData: apartmentData
    };
    localStorage.setItem(dbName, JSON.stringify(initialDB));
    console.log('Database initialized successfully!');
  } else {
    console.log('Database already exists!');
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