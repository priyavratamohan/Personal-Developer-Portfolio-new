// Personal Access Token (replace 'YOUR_TOKEN' with your actual token)
const token = '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';

// Base URL for GitHub API
const baseUrl = 'https://api.github.com';

// Headers with authorization token
const headers = {
  'Authorization': `token ${token}`,
  'Accept': 'application/vnd.github.v3+json'
};

// API endpoint for fetching user repositories
const endpoint = '/user/repos';

// Make GET request to fetch repositories
fetch(baseUrl + endpoint, { headers })
  .then(response => {
    // Check if request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(repositories => {
    // Display repository names
    repositories.forEach(repo => {
      console.log(repo.name);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
