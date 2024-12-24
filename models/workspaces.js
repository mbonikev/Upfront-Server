const mongoose = require('mongoose');
// Define the user schema
const workspaceSchema = new mongoose.Schema({
  workspace_name: { type: String, required: false },
  user_email: { type: String, required: true },
  workspace_type: {type: String, required: true}
});
// Create the model
const Workspace = mongoose.model('Workspace', workspaceSchema);
// Export the model
module.exports = Workspace;