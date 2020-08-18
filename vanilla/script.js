$(document).ready(initializeApp);

function initializeApp() {
  $("#emailContainer").hover(emailModal);
  $("#emailContainer").on("click", emailModal);
}

const emailModal = () => {
  $("#emailModal").toggleClass("hidden");
}
