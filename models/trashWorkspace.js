const mongoose = require("mongoose");
// Define the user schema
const trashWorkspaceSchema = new mongoose.Schema({
  workspace_name: { type: String, required: false },
  user_email: { type: String, required: true },
  workspace_type: { type: String, required: true },
});
// Create the model
const TrashWorkspace = mongoose.model("trashWorkspace", trashWorkspaceSchema);
// Export the model
module.exports = TrashWorkspace;
