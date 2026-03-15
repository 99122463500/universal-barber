// Set minimum date to today
const dateInput = document.getElementById("appointmentDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Auto-fill amount based on service
const serviceSelect = document.getElementById("serviceSelect");
const amountInput = document.getElementById("amount");

serviceSelect.addEventListener("change", function() {
  let amount = 0;
  switch(this.value){
    case "Haircut": amount=150; break;
    case "Shave": amount=100; break;
    case "Styling": amount=200; break;
  }
  amountInput.value = amount;
});
