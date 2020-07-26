let fs = require ('fs');

let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = marcasController = {
    index: function (req, res){
        res.set({'content-type':'text/plain; charset=utf-8'});
        let totalDeAutos= [];
        let listaDeMarcas = [];

        res.write('----------------------------------' + '\n');
        res.write(' Nuestras marcas disponibles son: ' + '\n');
        res.write('----------------------------------' + '\n');

        db.forEach(concesionaria => {
            concesionaria.autos.forEach(auto =>{
                totalDeAutos.push(auto);
                listaDeMarcas.push(auto.marca);
            });
        });

        let marcasUnicas = Array.from(new Set(listaDeMarcas));
        marcasUnicas.forEach(autoMarca =>{
            res.write('\n'+ '•' +  autoMarca);
        });

        let cantidadAutos = totalDeAutos.length
        let cantidadMarcas = marcasUnicas.length

        res.write('\n \n' + '----------------------------------' + '\n');
        res.write('     CANTIDAD DE MARCAS: ' + cantidadMarcas);
        res.write('\n' + '----------------------------------' + '\n');
        res.write('\n \n' + '----------------------------------' + '\n');
        res.write('     CANTIDAD DE AUTOS: ' + cantidadAutos);
        res.write('\n' + '----------------------------------' + '\n');

        res.end();
    
    }, 

    detalle: (req, res) => {
        res.set({'content-type':'text/plain; charset=utf-8'});
            let idMarca = req.params.marca
            let listaAutos = [];
            res.write ('---------------------------------------------------------' + '\n');
            res.write ('   Los autos disponibles de la marca que ingresó son: ' + '\n');
            res.write ('---------------------------------------------------------' + '\n');
                db.forEach(auto => { 
                     auto.autos.forEach(marcas => {
                        let datos = []
                        if(idMarca.toLowerCase() == marcas.marca.toLowerCase()) {
                            listaAutos.push(marcas)
                            datos.push( marcas.marca, marcas.modelo, marcas.anio, );  
                            res.write('•'+'Marca: ' + datos[0] + '\n');
                            res.write('°'+'Modelo: ' + datos[1] + '\n');
                            res.write('°'+'Año: ' + datos[2] + '\n\n');
                        } 
                    }) 
                })
                let cantidadAutos = listaAutos.length;
                res.write('-----------------------------'+ '\n');
                res.write('   CANTIDAD DE AUTOS: ' + cantidadAutos + '\n');
                res.write('-----------------------------'+ '\n');
                res.end();
    }

}