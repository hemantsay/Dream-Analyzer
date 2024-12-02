// Simulated AI logic
function simulateDreamAnalysis(dreamText, emotion){
    const keywords = ["love", "death", "running", "falling", "flying"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];


    let analysis = "";

    if (emotion === "fear") {
        analysis = `Your dream reflects anxiety, possibly about "${randomKeyword}". Consider what challenges you’re facing.`;
      } else if (emotion === "happy") {
        analysis = `Your dream shows a sense of fulfillment. "${randomKeyword}" might symbolize a recent achievement.`;
      } else if (emotion === "sad") {
        analysis = `This dream may indicate emotional processing. "${randomKeyword}" could represent something unresolved.`;
      } else {
        analysis = `Dreams are complex. "${randomKeyword}" might be significant to you.`;
      }
      
       // Add some randomness for uniqueness
       const tips = [
        "Keep a dream journal for more insights.",
        "This could relate to recent events in your life.",
        "Sometimes dreams show us what we subconsciously value."
      ];

      const randomTip = tips[Math.floor(Math.random() * tips.length)];

      return `${analysis} Tip: ${randomTip}`;

}

 // Handle form submission
 document.getElementById('dreamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dreamText = document.getElementById('dreamInput').value;
    const emotion = document.getElementById('emotionSelect').value;

    const result = simulateDreamAnalysis(dreamText, emotion);

    document.getElementById('resultDisplay').innerText = result;
  });

