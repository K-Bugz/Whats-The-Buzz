// Function
async function downvoteClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/posts/downvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
            vote: false // In downvote it will be false!!!
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
document.querySelector('.downvote-btn').addEventListener('click', downvoteClickHandler);
