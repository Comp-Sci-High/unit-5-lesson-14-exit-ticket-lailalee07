// Create a function that tests the post route handler [2 pts]
async function postPotion() {
    try {
        // fill in the path
        const response = await fetch(base +"/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                label: "" ,
                effect: "",
                ingredents:"",
                color: "",
                isExplosive: ""



// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

