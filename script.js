//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter valid details");
    return;
  }

  checkVotingEligibility(name, parseInt(age))
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});

function checkVotingEligibility(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });
}
