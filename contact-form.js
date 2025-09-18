const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput.value.trim().length < 2) {
    alert("Будь ласка, введіть ім'я мінімум з 2 символів!");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Будь ласка, введіть email!");
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Будь ласка, напишіть повідомлення!");
    return;
  }

  const params = new URLSearchParams({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Повідомлення відправлено!");
      console.log(data);
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    })
    .catch(() => alert("Сталася помилка при відправці. Спробуйте пізніше."));
});
