const FormularioEncriptacion = (function() {
    function FormularioEncriptacion() {
        this.diccionario = new Diccionario();
        this.btnEncriptar = document.getElementById("btnEncriptar");
        this.btnDesencriptar = document.getElementById("btnDesencriptar");
        this.inputTexto = document.getElementById("texto");
        this.pResultado = document.getElementById("resultado");
        this.eventoEncriptar();
        this.eventoDesencriptar();
    }

    FormularioEncriptacion.prototype.eventoEncriptar = function(){
        this.btnEncriptar.addEventListener("click", (e) => {
            e.preventDefault();
            const texto = this.inputTexto.value;
            const textoEncriptado = this.diccionario.encriptar(texto);
            this.pResultado.innerText = `Texto encriptado: ${textoEncriptado}`;
        });
    }

    FormularioEncriptacion.prototype.eventoDesencriptar = function(){
        this.btnDesencriptar.addEventListener("click", (e) => {
            e.preventDefault();
            const texto = this.inputTexto.value;
            const textoDesencriptado = this.diccionario.desencriptar(texto);
            this.pResultado.innerText = `Texto desencriptado: ${textoDesencriptado}`;
        });
    }

    return FormularioEncriptacion;
})();

new FormularioEncriptacion();