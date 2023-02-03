
   function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

   value.topics = data.getAll("topics");

    console.log({ value });
    form.submit();
  }
  var input = "form";
  const form = document.querySelector(input);
  form.addEventListener("submit", handleSubmit);