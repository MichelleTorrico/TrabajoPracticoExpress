

let fs = require ('fs')

let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = homeController = {
    index: function (req, res){
        res.set({ 'content-type': 'text/plain; charset=utf-8' })
        res.write('------------------------------------')
        res.write('\n')
        res.write('   •'+'Bienvenidos a nuestra página'+'•')
        res.write('\n')
        res.write('------------------------------------')
        res.write('\n')
        res.write( '•'+'Nuestras sucursales son: ')
        res.write('\n')

        db.forEach(concesionaria =>{
            res.write('\n')
            res.write ('🔹'+ concesionaria.sucursal)
            res.write('\n')
        
            })
            res.end()
    }
}

