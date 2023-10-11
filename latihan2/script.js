function validateForm() {
  var nama_lengkap = document.getElementById("nama_lengkap").value.trim();
  var email = document.getElementById("email").value.trim();
  var alamat = document.getElementById("alamat").value.trim();

  if (nama_lengkap == "" || email == "" || alamat == "") {
    alert("Anda harus mengisi data dengan lengkap");
    return false;
  }

  return true;
}
document.addEventListener("DOMContentLoaded", function (event) {
  var form = document.querySelector("form");
  var submitButton = form.querySelector("input[type=submit]");
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Terima kasih telah mendaftar!");
      form.submit();
    }
  });
});
