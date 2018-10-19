const Diccionario = (function() {
    function Diccionario() {
        this.diccionarioNormal      = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    Diccionario.prototype.validarIndexCaracter = function(indexCaracter) {
        if (indexCaracter < 0)
            return false;
        return true;
    }

    Diccionario.prototype.convertirVocales = function(caracter){
        switch (caracter) {
            case 'A':
                return '4';
            case 'E':
                return '3';
            case 'I':
                return '1';
            case 'O':
                return '0';
            case 'U':
                return '6';
            default:
                return caracter;
        }
    }

    Diccionario.prototype.revertirVocales = function(caracter){
        switch (caracter) {
            case '4':
                return 'A';
            case '3':
                return 'E';
            case '1':
                return 'I';
            case '0':
                return 'O';
            case '6':
                return 'U';
            default:
                return caracter;
        }
    }

    Diccionario.prototype.convertirCaracter = function(caracter) {
        const caracterMayuscula = caracter.toUpperCase();
        const diccLength = this.diccionarioNormal.length;
        const indexCaracter = this.diccionarioNormal.indexOf(caracterMayuscula);
        if (this.validarIndexCaracter(indexCaracter)) {
            let indexCaracterConvertido = indexCaracter - 14;
            if (indexCaracterConvertido < 0) {
                indexCaracterConvertido = diccLength + indexCaracterConvertido;
            }
            const letraConvertida = this.diccionarioNormal[indexCaracterConvertido];
            return this.convertirVocales(letraConvertida);
        } else {
            return caracter;
        }
     }

    Diccionario.prototype.revertirCaracter = function(caracter) {
        const caracterMayuscula = caracter.toUpperCase();
        const diccLength = this.diccionarioNormal.length;
        const caracterVocalRevertida = this.revertirVocales(caracterMayuscula);
        const indexCaracter = this.diccionarioNormal.indexOf(caracterVocalRevertida);
        if (this.validarIndexCaracter(indexCaracter)) {
            let indexCaracterRevertido = indexCaracter - 13;
            if (indexCaracterRevertido < 0) {
                indexCaracterRevertido = diccLength + indexCaracterRevertido;
            }
            const letraConvertida = this.diccionarioNormal[indexCaracterRevertido];
            return letraConvertida;
        } else {
            return caracter;
        }
     }

    Diccionario.prototype.encriptar = function(texto) {
        const arrayCaracteres = texto.split('');
        const arrayCaracteresNuevos = arrayCaracteres.map((caracter) => {
            return this.convertirCaracter(caracter);
        });
        return arrayCaracteresNuevos.join('');
    } 

    Diccionario.prototype.desencriptar = function(texto) {
        const arrayCaracteres = texto.split('');
        const arrayCaracteresNuevos = arrayCaracteres.map((caracter) => {
            return this.revertirCaracter(caracter);
        });
        return arrayCaracteresNuevos.join('');
    } 

    return Diccionario;
})();