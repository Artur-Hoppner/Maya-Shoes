  const { createClient } = require('@sanity/client');
  // Future fix: Tokens that is stored in .env file
  export default createClient({
    projectId: 'fslabh9u',
    dataset: 'production',
    apiVersion: '2022-01-12',
    // token: process.env.SANITY_AUTH_TOKEN,
    useCdn: false // Remove message in console
  });