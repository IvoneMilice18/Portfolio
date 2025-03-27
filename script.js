// Alternar entre modo escuro e claro
document.addEventListener("DOMContentLoaded", function () {
    const toggleModeBtn = document.createElement("button");
    toggleModeBtn.innerText = "Alternar Modo";
    toggleModeBtn.style.position = "fixed";
    toggleModeBtn.style.top = "10px";
    toggleModeBtn.style.right = "10px";
    toggleModeBtn.style.padding = "10px";
    toggleModeBtn.style.cursor = "pointer";
    
    document.body.appendChild(toggleModeBtn);

    toggleModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

// Efeito de rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});

// Mensagem dinâmica ao passar o mouse sobre os projetos
document.querySelectorAll("#projects a").forEach(link => {
    link.addEventListener("mouseover", function () {
        this.innerText += " - Clique para ver!";
    });

    link.addEventListener("mouseout", function () {
        this.innerText = this.innerText.replace(" - Clique para ver!", "");
    });
});

