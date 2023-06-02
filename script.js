document.getElementById("secure-message-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var senderEmail = document.getElementById("sender-email").value;
  var recipientEmail = document.getElementById("recipient-email").value;
  var message = document.getElementById("message").value;

  // Construct the request payload
  var payload = {
    attachments: [],
    bcc: [],
    cc: [],
    htmlBody: "",
    subject: "Secure Message",
    textBody: message,
    to: [recipientEmail],
    notificationTemplate: "",
    attributes: {
      crmCustomId: ""
    }
  };

  // Make an API call to retrieve the DataMotion access token
  fetch("https://api.datamotion.com/SMC/Messaging/v3/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: "janellep@datamotion.com",
      client_secret: "devDemo*55"
    })
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to retrieve DataMotion access token");
    }
  })
  .then(function(data) {
    var accessToken = data.access_token;

    // Make an API call to send the secure message using DataMotion's API
    fetch("https://api.datamotion.com/SMC/Messaging/v3/content/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      },
      body: JSON.stringify(payload)
    })
    .then(function(response) {
      if (response.ok) {
        alert("Secure message sent successfully!");
        // Reset form after successful submission
        document.getElementById("secure-message-form").reset();
      } else {
        throw new Error("Failed to send secure message");
      }
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
  })
  .catch(function(error) {
    alert("Error: " + error.message);
  });
});
