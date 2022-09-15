// Biblioteca "Matias Fernandez Burzaco" | Museo Barrio de Flores



class libro {
    constructor ( titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}


// Stock de Libros Actuales en la Biblioteca

const libroJueves = new libro ("Las Viudad de los Jueves", "Pinero" );
const libroSombras= new libro ("De Amor y de Sombras", "Allende");
const libroFlores= new libro ("Flores siempre es Bello", "Danna");
const libroOrwell= new libro ("1984", "Orwell");
const libroComedia= new libro ("Divina Comedia", "Alighieri");
const libroVioleta= new libro ("Violeta", "Allende");
const libroInfinito= new libro ("El Plan Infinito", "Allende");
const libroMunicipales= new libro ("Vivir en una ex casita Municipal", "Danna");

const arrayLibros=[];

arrayLibros.push (libroJueves);
arrayLibros.push (libroSombras);
arrayLibros.push (libroFlores);
arrayLibros.push (libroOrwell);
arrayLibros.push (libroComedia);
arrayLibros.push (libroVioleta);
arrayLibros.push (libroInfinito);
arrayLibros.push (libroMunicipales);


console.log (arrayLibros);


alert ("Bienvenido/a a la Biblioteca -->> Matias Fernandez Burzaco del Museo Barrio de Flores <-- ");
let nombre= prompt ("Ingrese su nombre: ")

alert ("Hola! " + nombre + " ¿En qué podemos ayudarte?" )

// Menu de Bienvenida a la Biblioteca 
function menu ()  {
    let opcion = parseInt ( prompt ( "Ingrese una opción: \n 1) Conozca todos los libros que tenemos actualmente disponibles  \n 2) Buscar Libro por titulo \n 3) Buscar Libro por autor \n 4) Agregar un nuevo titulo "));

    return opcion;


}


// Mostrar el array con todos los libros actuales 
function todosLosLibros (){
    console.log (arrayLibros);
}


// Sumar un nuevo elemento al Array
function agregarLibros (){
    let titulo = prompt ("Ingrese el nombre del libro: ");
    let autor = prompt ("Ingrese el autor del libro: ");
    let librosnuevos = new libro ( titulo, autor);
    arrayLibros.push (librosnuevos);
    console.log = arrayLibros;
    alert ("Gracias! " + nombre + " por la donacion!" )
}

// Buscar mediante filter el autor del libro

function consultarLibros (){
    let tituloLibro = prompt ("Ingrese el titulo del Libro:  ");
    let libro = arrayLibros.filter ( libro => libro.titulo === tituloLibro );

    console.log (libro);
    alert ("Gracias " + nombre + "por consultar la Bilblioteca del Museo! ");

}


// Buscar por autor

function consultarAutor (){
    let autorLibro = prompt ("Ingrese el nombre del Autor: ");
    let libro = arrayLibros.filter ( libro => libro.autor === autorLibro);

    console.log (libro);
    alert ("Gracias " + nombre + " por consultar la Bilblioteca del Museo! ");

}




// Menu para donar nuevos libros

function menudonacion (){
    let donacion = parseInt ( prompt ( "Ingrese una opción: \n 1) Si!  \n 2) No! Quiero Salir!  "));

    return donacion;

}


// Alert que aparece al momento de elegir No donar un nuevo libro

function salirDeLaBiblioteca (){
    alert ("Ayudanos " + nombre + "!" + " a difundir la biblioteca." );
    
}


//Menu

let opcion = menu();
switch (opcion){
    case 1:
        todosLosLibros();
        alert ( "¿Queres donar libros y sumarlos a la colección de la biblioteca del Museo ?")
        let donacion = menudonacion();
        
        switch (donacion){
            case 1:
                agregarLibros();
                break;
            case 2:
                salirDeLaBiblioteca();
                break;
        }
        break;
    case 2:
        consultarLibros();
        break;
    case 3:
        consultarAutor();
        
        break;  
    case 4:
        agregarLibros();
        break;

    default:
        alert("La opción ingresada es incorrecta. ");
        break;
}



