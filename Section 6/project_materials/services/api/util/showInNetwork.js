export function showInNetwork(endpoint) {
  // Make a real fetch request to a non-existent endpoint
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: "Hello from my fake API!",
      timestamp: new Date().toISOString(),
      data: { quizzes: 5, users: 10 }
    })
  }).catch(error => {
    // This will fail (404) but still show in Network tab
    console.log('Request shown in Network tab - check DevTools!');
  });
}
