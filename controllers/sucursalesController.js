let fs = require ('fs');

let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = sucursalesController = {
    index: function (req, res){
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        res.write('----------------------------');
        res.write('\n');
        res.write( 'Nuestras sucursales son: ');
        res.write('\n');
        res.write('----------------------------');
        res.write('\n');
        
        
        db.forEach(concesionaria =>{
            res.write('\n');
            res.write ('•'+ concesionaria.sucursal +'•'+ '\n' +'°'+ 'Dirección: ' + concesionaria.direccion + '\n'+ '°'+'Telefono: ' +concesionaria.telefono);
            res.write('\n');
        
            });
            res.end();
    },


    detalle: function (req, res){
        let idSucursal = req.params.sucursal
        res.set({'content-type':'text/plain; charset=utf-8'});
        db.forEach(concesionaria =>{
               if(concesionaria.sucursal.toLowerCase() == idSucursal.toLowerCase()){
                   res.write ('•'+ 'Sucursal '+concesionaria.sucursal + '•'+'\n\n' + '°'+ 'Dirección: ' + concesionaria.direccion + '\n'+ '°'+ 'Telefono: ' +concesionaria.telefono);
                   res.write ('\n\n' +'•'+ 'Nuestros autos disponibles son: ' + '\n\n');

                   concesionaria.autos.forEach((auto)=>{
                       
                       res.write ('🔹'+'Marca: ' + auto.marca + '\n' +'🔹'+ 'Modelo: ' + auto.modelo + '\n'+'🔹'+ 'Año: ' + auto.anio + '\n\n');
                       
                   });
                   let cantidadAutos = (concesionaria.autos).length
                   res.write ('-----------------------' + '\n');
                   res.write ('CANTIDAD DE AUTOS: ' + cantidadAutos + '\n');
                   res.write ('-----------------------' + '\n');
                   res.end();
                  
               }
              
               
            });
       res.end("Sucursal no encontrada");
       }
    }