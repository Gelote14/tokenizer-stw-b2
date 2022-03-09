function Tokenizer(){
    this.dictionary = [];
    console.log("El diccionari es : " + this.dictionary);

    this.run = function(llista){
      console.log("S'ha introduit la llista : " + llista);
      llista.forEach(i => this.searchItem(i));
      };

    this.searchItem = function(i){
      if(this.diccionari[i]==undefined){
        console.log("Funció indefinida : " + this.diccionari[i]);
        this.onDefault();
      }else{
        console.log("Funció trobada : " + this.diccionari[i]);
        this.diccionari[i]();
      };
    }
    
    this.on = ......................
    this.onDefault = ...............

}


function testTokenizer(){

  var t = ........;
  var countA = 0;
  var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?'];


  t.on('a', .....);

  t.onDefault(......);

  //here goes the code to run the test over testString

  console.log("numero de a's: " + countA);
  console.log("numero de c's: " + .............);
  console.log("numero d'altres caracters: " + ................);
}

testTokenizer();
