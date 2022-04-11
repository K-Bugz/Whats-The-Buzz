// Function
async function upvoteClickHandler(event) {
  event.preventDefault();

  // Why did this print 4 show Diem Am I a weeb
  console.log(window.location.toString().split('/').length - 1);

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id,
      vote: true // In downvote it will be false!!!
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

// Calls function
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
