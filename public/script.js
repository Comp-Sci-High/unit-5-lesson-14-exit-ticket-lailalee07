base = "https://obscure-umbrella-97j7rp6jj54ghx5rx-3000.app.github.dev/"
// Create a function that tests the post route handler [2 pts]
async function postPotion(po) {
    try {
        // fill in the path
        const response = await fetch(base +"/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
           
            },
                body: JSON.stringify({
                
                })
                
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }
// Call the function [1 pt]
postPotion()
// Show us the successful POST fetch [1 pt]

