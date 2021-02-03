function AbrirOnClick()
{
    document.getElementById('carreras-desp').style="visibility:visible";
    document.getElementById('carreras-desp').style="opacity:1";
    document.getElementById('tecnologias').style="visibility:visible";
    document.getElementById('mecatronica').style="visibility:visible";




    document.getElementById('carreras-abrir').style="display:none";
    document.getElementById('carreras-cerrar').style="display:block";

}
function CerrarOnClick()
{
    document.getElementById('carreras-desp').style="opacity:0";

    document.getElementById('tecnologias').style="visibility:hidden";
    document.getElementById('mecatronica').style="visibility:hidden";

    document.getElementById('carreras-cerrar').style="display:none";
    document.getElementById('carreras-abrir').style="display:block";

}