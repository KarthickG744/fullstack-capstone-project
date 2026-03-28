const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase() {
    const client = new MongoClient(process.env.MONGO_URL);
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
        db = client.db(process.env.MONGO_DB_NAME);
        return db;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

function getDb() {
    if (!db) {
        throw new Error('Database not initialized. Call connectToDatabase first.');
    }
    return db;
}

module.exports = { connectToDatabase, getDb };
```

4. Click **"Commit changes"** → **"Commit directly to main"** → **"Commit changes"**

---

### Step 3 — Submit this URL:
```
https://github.com/KarthickG744/Final-Project/blob/main/db.js
