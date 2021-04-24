const $ = document;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée"); //andiamo a vedere se la pagina si è caricata nella console log nel sito cmd+opt+i

  $.addEventListener("click", () => {
    console.log("CLICCHETE !! "); //verifica i click sulla pagina
  });

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    // la fonction preventDefault() annula il refresh della pagina
    event.preventDefault();

    const data = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);

    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
    alert("Merci pour le form !");
  });
});
