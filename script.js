function Mostrar ()
{
    texto = email.value;
    alert(texto);
}
function MostrarJanelinha()
{
    texto = email.value; 
    txt.innerHTML = texto;
    janelinha.style.display = "block"
}
s=0
function Somar()
{
    s = s + 1
    resultado.innerHTML = s
    email.value = s
}
function Imprimir()
{
    window.print()
}
function Fechar()
{
    janelinha.style.display = "none";
}