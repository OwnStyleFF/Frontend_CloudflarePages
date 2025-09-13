async function enviarPregunta() {
    const pregunta = document.getElementById("pregunta").value;
    const respuestaDiv = document.getElementById("chat");

    const resp = await fetch("https://backend-render-fn6z.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pregunta })
    });
    const data = await resp.json();
    respuestaDiv.innerHTML += `<p class="user"><b>Tú:</b> ${pregunta}</p>`;
    respuestaDiv.innerHTML += `<p class="ia"><b>GC AI:</b> ${data.respuesta}</p>`;
    document.getElementById("pregunta").value = "";
}