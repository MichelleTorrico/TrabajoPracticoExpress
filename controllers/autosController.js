let fs = require ('fs');

let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = autosController = {
    index: function (req, res){
        res.set({'content-type':'text/plain; charset=utf-8'});
        let totalAutos = []
        res.write('-----------------------------'+ '\n');
        res.write('  Todos nuestros vehiculos:   ' + '\n');
        res.write('-----------------------------' + '\n\n');


        db.forEach(concesionaria =>{
                   concesionaria.autos.forEach(auto =>{
                       totalAutos.push(auto);
                       
                      res.write ('•'+ 'Marca: ' + auto.marca + '\n' + '°'+'Modelo: ' + auto.modelo + '\n'+ '°'+'Año: ' + auto.anio + '\n\n');
                       });


                    });
                    let cantidadAutos = totalAutos.length;
                    res.write('-----------------------------'+ '\n');
                    res.write('   CANTIDAD DE AUTOS: ' + cantidadAutos + '\n');
                    res.write('-----------------------------'+ '\n');
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
                                listaAutos.push(marcas);
                                datos.push(marcas.marca, marcas.modelo, marcas.anio, marcas.color);
                                res.write('•'+'Marca: ' + datos[0] + '\n');
                                res.write('°'+'Modelo: ' + datos[1] + '\n');
                                res.write('°'+'Año: ' + datos[2] + '\n');
                                res.write('°'+'Color: ' + datos[3] + '\n\n');
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
    