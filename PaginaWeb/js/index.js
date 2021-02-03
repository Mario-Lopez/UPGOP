function AbrirOnClick()
{
    document.getElementById('carreras-desp').style="opacity:1";
    document.getElementById('tecnologias').style="visibility:visible";
    document.getElementById('mecatronica').style="visibility:visible";




    document.getElementById('carreras-abrir').style="display:none";
    document.getElementById('carreras-cerrar').style="display:block";

}
function CerrarOnClick()
{
    document.getElementById('carreras-desp').style="display:grid";
    document.getElementById('carreras-desp').style="opacity:0";

    document.getElementById('tecnologias').style="visibility:hidden";
    document.getElementById('mecatronica').style="visibility:hidden";

    document.getElementById('carreras-cerrar').style="display:none";
    document.getElementById('carreras-abrir').style="display:block";

}

function EventMouseover()
{
    document.getElementById('texto-info').style="height:100%";
    document.getElementById('texto-p').style="visibility:visible";
}
function EventMouseDown()
{
    document.getElementById('texto-info').style="height:10%";
    document.getElementById('texto-p').style="visibility:hidden";
}
function EventMouseover2()
{
    document.getElementById('texto-info2').style="height:100%";
    document.getElementById('texto-p2').style="visibility:visible";
}
function EventMouseDown2()
{
    document.getElementById('texto-info2').style="height:10%";
    document.getElementById('texto-p2').style="visibility:hidden";
}

// function EventMenuRes()
// {
//     document.getElementById('menu-res').style="display:block";
//     document.getElementById('menu-res-a').style="display:none";
//     document.getElementById('menu-res-c').style="display:block";
// }
// function EventMenuResCerrar()
// {
//     document.getElementById('menu-res').style="display:none";
//     document.getElementById('menu-res-a').style="display:block";
//     document.getElementById('menu-res-c').style="display:none";
// }