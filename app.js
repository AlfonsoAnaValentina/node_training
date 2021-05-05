const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {
    const busquedas = new Busquedas();
    let opt = '';
    
    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // crear opcion
                const desc = await leerInput('Descripción:');
                opt = 0;
            break;

            case 2:
                console.log('opcion 2');
            break;
        
        }

        if (opt != 0) await pausa();

    } while( opt !== 0 );

}

main();