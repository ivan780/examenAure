var mStoreApp;
var mUtils;
console.log('ssssshey');


function GetRandom(pMax){
    return pMax*Math.random()
}


window.onload= function(){

    if (document.readyState=="complete"){
        console.log("Hey");
        mStoreApp= new clsStoreApp(window,document);
   
    }
    /**
     * Por hacer
     *
     * Pantalla forget password
     *
     * Mostrar hora local
     *
     * Crear la Initial Screen(dashboard)
     *
     * Login 2 pasos
     */
    /**
     * Hecho
     * Validate Password(8 char, 1Uper, 1Lowe, 1Sym)
     *
     *
     */
  
}