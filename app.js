const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;




const getInfo = async(direccion) => {

    await lugar.getLugarLatLng(direccion)
        .then((dir) => {

            clima.getClima(dir.lat, dir.lng)
                .then((temp) => {
                    console.log(`La temperatura en ${ direccion } es de ${ temp }º`)
                })
                .catch((err) => {
                    console.log(`No se pudo obtener la temperatura de ${ direccion }`);
                });

        })
        .catch((err) => {
            console.log(`No se pudo obtener la direccion ${ direccion }`);
        });

}

getInfo(argv.direccion)
    .then()
    .catch();