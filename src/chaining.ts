const button = document.getElementById("#btn");

button?.addEventListener("click", () => {
  alert("hola mundo");
});

const user2 = {
    name: undefined,
    email: ''
}

if (user2?.name) {
    // code
}