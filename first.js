function Redirect() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let letter = /[a-zA-Z]/;
  let Number = /[0-9]/;
  // console.log(username, password);
  if (
    username != password ||
    !letter.test(password) ||
    !Number.test(username)
  ) {
    window.location.href = "second.html";
  } else {
    alert("Invalid Data");
    return;
  }
}
