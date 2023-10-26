// Application des conventions de marges pour D3.
// Application of margin conventions for D3.

console.log("It is d3 project");

var margin = {top: 20, right: 20, bottom: 20, left: 20};

var width  = 450 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Données à afficher.
// Data to display.
bleu  = [ 86, 51, 42, 29, 89, 56, 73, 37, 81, 57, 54, 74, 72, 85, 56, 60, 72,
          75, 57, 89, 53, 77, 97, 77, 60, 86, 86, 60, 53, 77, 74, 50, 64, 90,
          51, 90, 73, 86, 55, 74, 64, 57, 75, 66, 58, 79, 55, 65, 62, 68, 20,
          50, 82, 76, 79, 71, 63, 78, 69, 76, 53, 91, 92, 83, 47, 72, 91, 80,
          51, 71, 64, 75, 78, 49, 92, 52, 82, 78, 57, 41, 28];
rouge = [ 56, 77, 74, 50, 64, 90, 51, 90, 67, 98, 100, 54, 65];
vert  = [ 62, 68, 50, 11, 63, 18, 69, 16, 53] ;

// Affichage de données avec un diagramme de boîte dans un élément svg.
// Paramètres: svg : élément où on affiche
//             donnees: tableau de nombres entre 0 et 100
//             y : position verticale de la ligne horizontale
//             h : hauteur de la boîte
//             strokeC: couleur du trait des lignes
//             fillC: couleur de remplissage de la boite
//             y : fonction de transformation des données pour l'horizontale

// Displaying data with a box plot in an svg element.
// Parameters: svg: element where we display
//             data: array of numbers between 0 and 100
//             y: vertical position of the horizontal line
//             h: height of the box
//             strokeC: line stroke color
//             fillC: box fill color
//             y: data transformation function for horizontal
function moustache(svg,donnees,y,h,strokeC,fillC,x){
    ///// À compléter!
}

d3.select(window).on("load",
  function (){
      // Mettre en place la surface de dessin.
      // Set up the drawing surface.
      ///// À compléter!
      ///// To be completed!
      
      // Définir la fonction d'échelle (en utilisant d3.scale).
      // Define the scale function (using d3.scale).
      ///// À compléter!
      ///// To be completed!
      
      // Afficher l'axe des x.
      // Show x axis.
      ///// À compléter!
      ///// To be completed!
      
      // Afficher les données.
      // Show data.
      moustache(svg,bleu,50,30,"blue","lightblue",x);
      moustache(svg,vert,130,30,"green","lightgreen",x);
      moustache(svg,rouge,210,30,"red","pink",x);
  }
);
