(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtns.forEach((btn) =>
    btn.addEventListener("click", toggleModal)
  );
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закриття по кліку на фон
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) toggleModal();
  });

  // Закриття по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("is-open")) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    document.body.style.overflow = refs.modal.classList.contains("is-open")
      ? "hidden"
      : "";
  }
})();
