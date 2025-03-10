import { getDatabase, initializeDatabase } from "../db/database";

/**
 * Fixes game IDs in the connection_game_submissions table by:
 * 1. Deleting all rows with game_id = '47'
 * 2. Updating all rows with game_id = '48' to have game_id = '47'
 */
async function fixConnectionGameIds() {
  try {
    console.log("Starting database fix...");

    // Initialize and get database connection
    await initializeDatabase();
    const db = await getDatabase();

    // Start a transaction for data consistency
    await db.exec("BEGIN TRANSACTION");

    try {
      // Step 1: Count rows to be affected (for logging)
      const rowsToDelete = await db.get(`SELECT COUNT(*) as count FROM connection_game_submissions WHERE game_id = ?`, ["47"]);

      const rowsToUpdate = await db.get(`SELECT COUNT(*) as count FROM connection_game_submissions WHERE game_id = ?`, ["48"]);

      console.log(`Found ${rowsToDelete.count} rows to delete with game_id = '47'`);
      console.log(`Found ${rowsToUpdate.count} rows to update from game_id = '48' to '47'`);

      // Step 2: Delete all rows with game_id = '47'
      const deleteResult = await db.run(`DELETE FROM connection_game_submissions WHERE game_id = ?`, ["47"]);

      console.log(`Deleted ${deleteResult.changes} rows with game_id = '47'`);

      // Step 3: Update all rows with game_id = '48' to game_id = '47'
      const updateResult = await db.run(`UPDATE connection_game_submissions SET game_id = ? WHERE game_id = ?`, ["47", "48"]);

      console.log(`Updated ${updateResult.changes} rows from game_id = '48' to '47'`);

      // Commit the transaction
      await db.exec("COMMIT");
      console.log("Database fix completed successfully!");
    } catch (error) {
      // Rollback transaction if any error occurs
      await db.exec("ROLLBACK");
      throw error;
    }
  } catch (error) {
    console.error("Database fix failed:", error);
    process.exit(1);
  }
}

// Run the fix
fixConnectionGameIds();
