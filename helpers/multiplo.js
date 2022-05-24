const fs = require('fs');
const colors = require('colors');

const fileCreate = async (base = 5, l = false, h = 50) => {

    try {
        let salida = "";
        let consola = "";

        for (let index = 1; index <= h; index++) {
            salida += `${base} x ${index} =${base * index}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
        }

        if(l){
            console.log("============".green);
            console.log('Tabla del'.green, colors.blue(base));
            console.log("============".green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }


}

module.exports = {
    fileCreate
}