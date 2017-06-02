// setup app and pass ui.bootstrap as dep
var myApp = angular.module("assessorament", ["ui.bootstrap", "ngResource"]);

// define factory for data source
myApp.factory("Towns", function(){
  var towns = ["Abella de la Conca", "Abrera", "Àger", "Agramunt", "Aguilar de Segarra", "Agullana", "Aiguafreda", "Aiguamúrcia", "Aiguaviva", "Aitona", "Alamús, els", "Alàs i Cerc", "Albagés, l'", "Albanyà", "Albatàrrec", "Albesa", "Albi, l'", "Albinyana", "Albiol, l'", "Albons", "Alcanar", "Alcanó", "Alcarràs", "Alcoletge", "Alcover", "Aldea, l'", "Aldover", "Aleixar, l'", "Alella", "Alfara de Carles", "Alfarràs", "Alfés", "Alforja", "Algerri", "Alguaire", "Alins", "Alió", "Almacelles", "Almatret", "Almenar", "Almoster", "Alòs de Balaguer", "Alp", "Alpens", "Alpicat", "Alt Àneu", "Altafulla", "Amer", "Ametlla de Mar, l'", "Ametlla del Vallès, l'", "Ampolla, l'", "Amposta", "Anglès", "Anglesola", "Arbeca", "Arboç, l'", "Arbolí", "Arbúcies", "Arenys de Mar", "Arenys de Munt", "Argelaguer", "Argençola", "Argentera, l'", "Argentona", "Armentera, l'", "Arnes", "Arres", "Arsèguel", "Artés", "Artesa de Lleida", "Artesa de Segre", "Ascó", "Aspa", "Avellanes i Santa Linya, les", "Avià", "Avinyó", "Avinyonet de Puigventós", "Avinyonet del Penedès", "Badalona", "Badia del Vallès", "Bagà", "Baix Pallars", "Balaguer", "Balenyà", "Balsareny", "Banyeres del Penedès", "Banyoles", "Barbens", "Barberà de la Conca", "Barberà del Vallès", "Barcelona", "Baronia de Rialb, la", "Bàscara", "Bassella", "Batea", "Bausen", "Begues", "Begur", "Belianes", "Bell-lloc d'Urgell", "Bellaguarda", "Bellcaire d'Empordà", "Bellcaire d'Urgell", "Bellmunt d'Urgell", "Bellmunt del Priorat", "Bellprat", "Bellpuig", "Bellvei", "Bellver de Cerdanya", "Bellvís", "Benavent de Segrià", "Benifallet", "Benissanet", "Berga", "Besalú", "Bescanó", "Beuda", "Bigues i Riells", "Biosca", "Bisbal d'Empordà, la", "Bisbal de Falset, la", "Bisbal del Penedès, la", "Biure", "Blancafort", "Blanes", "Boadella i les Escaules", "Bolvir", "Bonastre", "Bòrdes, Es", "Bordils", "Borges Blanques, les", "Borges del Camp, les", "Borrassà", "Borredà", "Bossòst", "Bot", "Botarell", "Bovera", "Bràfim", "Breda", "Bruc, el", "Brull, el", "Brunyola", "Cabacés", "Cabanabona", "Cabanelles", "Cabanes", "Cabanyes, les", "Cabó", "Cabra del Camp", "Cabrera d'Anoia", "Cabrera de Mar", "Cabrils", "Cadaqués", "Calaf", "Calafell", "Calders", "Caldes d'Estrac", "Caldes de Malavella", "Caldes de Montbui", "Calella", "Calldetenes", "Callús", "Calonge", "Calonge de Segarra", "Camarasa", "Camarles", "Cambrils", "Camós", "Campdevànol", "Campelles", "Campins", "Campllong", "Camprodon", "Canejan", "Canet d'Adri", "Canet de Mar", "Canonja, la", "Canovelles", "Cànoves i Samalús", "Cantallops", "Canyelles", "Capafonts", "Capçanes", "Capellades", "Capmany", "Capolat", "Cardedeu", "Cardona", "Carme", "Caseres", "Cassà de la Selva", "Casserres", "Castell de l'Areny", "Castell de Mur", "Castell-Platja d'Aro", "Castellar de la Ribera", "Castellar de n'Hug", "Castellar del Riu", "Castellar del Vallès", "Castellbell i el Vilar", "Castellbisbal", "Castellcir", "Castelldans", "Castelldefels", "Castellet i la Gornal", "Castellfollit de la Roca", "Castellfollit de Riubregós", "Castellfollit del Boix", "Castellgalí", "Castellnou de Bages", "Castellnou de Seana", "Castelló d'Empúries", "Castelló de Farfanya", "Castellolí", "Castellserà", "Castellterçol", "Castellvell del Camp", "Castellví de la Marca", "Castellví de Rosanes", "Catllar, el", "Cava", "Cellera de Ter, la", "Celrà", "Centelles", "Cercs", "Cerdanyola del Vallès", "Cervelló", "Cervera", "Cervià de les Garrigues", "Cervià de Ter", "Cistella", "Ciutadilla", "Clariana de Cardener", "Cogul, el", "Colera", "Coll de Nargó", "Collbató", "Colldejou", "Collsuspina", "Colomers", "Coma i la Pedra, la", "Conca de Dalt", "Conesa", "Constantí", "Copons", "Corbera d'Ebre", "Corbera de Llobregat", "Corbins", "Corçà", "Cornellà de Llobregat", "Cornellà del Terri", "Cornudella de Montsant", "Creixell", "Crespià", "Cruïlles, Monells i Sant Sadurní de l'Heura", "Cubelles", "Cubells", "Cunit", "Darnius", "Das", "Deltebre", "Dosrius", "Duesaigües", "Escala, l'", "Esparreguera", "Espinelves", "Espluga Calba, l'", "Espluga de Francolí, l'", "Esplugues de Llobregat", "Espolla", "Esponellà", "Espot", "Espunyola, l'", "Esquirol, l'", "Estamariu", "Estany, l'", "Estaràs", "Esterri d'Àneu", "Esterri de Cardós", "Falset", "Far d'Empordà, el", "Farrera", "Fatarella, la", "Febró, la", "Figaró-Montmany", "Fígols", "Fígols i Alinyà", "Figuera, la", "Figueres", "Figuerola del Camp", "Flaçà", "Flix", "Floresta, la", "Fogars de la Selva", "Fogars de Montclús", "Foixà", "Folgueroles", "Fondarella", "Fonollosa", "Font-rubí", "Fontanals de Cerdanya", "Fontanilles", "Fontcoberta", "Foradada", "Forallac", "Forès", "Fornells de la Selva", "Fortià", "Franqueses del Vallès, les", "Freginals", "Fuliola, la", "Fulleda", "Gaià", "Galera, la", "Gallifa", "Gandesa", "Garcia", "Garidells, els", "Garriga, la", "Garrigàs", "Garrigoles", "Garriguella", "Gavà", "Gavet de la Conca", "Gelida", "Ger", "Gimenells i el Pla de la Font", "Ginestar", "Girona", "Gironella", "Gisclareny", "Godall", "Golmés", "Gombrèn", "Gósol", "Granada, la", "Granadella, la", "Granera", "Granja d'Escarp, la", "Granollers", "Granyanella", "Granyena de les Garrigues", "Granyena de Segarra", "Gratallops", "Gualba", "Gualta", "Guardiola de Berguedà", "Guiamets, els", "Guils de Cerdanya", "Guimerà", "Guingueta d'Àneu, la", "Guissona", "Guixers", "Gurb", "Horta de Sant Joan", "Hospitalet de Llobregat, l'", "Hostalets de Pierola, els", "Hostalric", "Igualada", "Isona i Conca Dellà", "Isòvol", "Ivars d'Urgell", "Ivars de Noguera", "Ivorra", "Jafre", "Jonquera, la", "Jorba", "Josa i Tuixén", "Juià", "Juncosa", "Juneda", "Les", "Linyola", "Llacuna, la", "Lladó", "Lladorre", "Lladurs", "Llagosta, la", "Llagostera", "Llambilles", "Llanars", "Llançà", "Llardecans", "Llavorsí", "Lleida", "Llers", "Lles de Cerdanya", "Lliçà d'Amunt", "Lliçà de Vall", "Llimiana", "Llinars del Vallès", "Llívia", "Lloar, el", "Llobera", "Llorac", "Llorenç del Penedès", "Lloret de Mar", "Llosses, les", "Lluçà", "Maçanet de Cabrenys", "Maçanet de la Selva", "Madremanya", "Maià de Montcal", "Maials", "Maldà", "Malgrat de Mar", "Malla", "Manlleu", "Manresa", "Marçà", "Margalef", "Marganell", "Martorell", "Martorelles", "Mas de Barberans", "Masarac", "Masdenverge", "Masies de Roda, les", "Masies de Voltregà, les", "Masllorenç", "Masnou, el", "Masó, la", "Maspujols", "Masquefa", "Masroig, el", "Massalcoreig", "Massanes", "Massoteres", "Matadepera", "Mataró", "Medinyà", "Mediona", "Menàrguens", "Meranges", "Mieres", "Milà, el", "Miralcamp", "Miravet", "Moià", "Molar, el", "Molins de Rei", "Mollerussa", "Mollet de Peralada", "Mollet del Vallès", "Molló", "Molsosa, la", "Monistrol de Calders", "Monistrol de Montserrat", "Mont-ral", "Mont-ras", "Mont-roig del Camp", "Montagut i Oix", "Montblanc", "Montbrió del Camp", "Montcada i Reixac", "Montclar", "Montellà i Martinet", "Montesquiu", "Montferrer i Castellbò", "Montferri", "Montgai", "Montgat", "Montmajor", "Montmaneu", "Montmell, el", "Montmeló", "Montoliu de Lleida", "Montoliu de Segarra", "Montornès de Segarra", "Montornès del Vallès", "Montseny", "Móra d'Ebre", "Móra la Nova", "Morell, el", "Morera de Montsant, la", "Muntanyola", "Mura", "Nalec", "Naut Aran", "Navarcles", "Navàs", "Navata", "Navès", "Nou de Berguedà, la", "Nou de Gaià, la", "Nulles", "Odèn", "Òdena", "Ogassa", "Olèrdola", "Olesa de Bonesvalls", "Olesa de Montserrat", "Oliana", "Oliola", "Olius", "Olivella", "Olost", "Olot", "Oluges, les", "Olvan", "Omellons, els", "Omells de na Gaia, els", "Ordis", "Organyà", "Orís", "Oristà", "Orpí", "Òrrius", "Os de Balaguer", "Osor", "Ossó de Sió", "Pacs del Penedès", "Palafolls", "Palafrugell", "Palamós", "Palau d'Anglesola, el", "Palau de Santa Eulàlia", "Palau-sator", "Palau-saverdera", "Palau-solità i Plegamans", "Pallaresos, els", "Pallejà", "Palma d'Ebre, la", "Palma de Cervelló, la", "Palol de Revardit", "Pals", "Papiol, el", "Pardines", "Parets del Vallès", "Parlavà", "Passanant i Belltall", "Pau", "Paüls", "Pedret i Marzà", "Penelles", "Pera, la", "Perafita", "Perafort", "Peralada", "Peramola", "Perelló, el", "Piera", "Piles, les", "Pineda de Mar", "Pinell de Brai, el", "Pinell de Solsonès", "Pinós", "Pira", "Pla de Santa Maria, el", "Pla del Penedès, el", "Planes d'Hostoles, les", "Planoles", "Plans de Sió, els", "Poal, el", "Pobla de Cérvoles, la", "Pobla de Claramunt, la", "Pobla de Lillet, la", "Pobla de Mafumet, la", "Pobla de Massaluca, la", "Pobla de Montornès, la", "Pobla de Segur, la", "Poboleda", "Polinyà", "Pont d'Armentera, el", "Pont de Bar, el", "Pont de Molins", "Pont de Suert, el", "Pont de Vilomara i Rocafort, el", "Pontils", "Pontons", "Pontós", "Ponts", "Porqueres", "Porrera", "Port de la Selva, el", "Portbou", "Portella, la", "Pradell de la Teixeta", "Prades", "Prat de Comte", "Prat de Llobregat, el", "Pratdip", "Prats de Lluçanès", "Prats de Rei, els", "Prats i Sansor", "Preixana", "Preixens", "Premià de Dalt", "Premià de Mar", "Preses, les", "Prullans", "Puig-reig", "Puigcerdà", "Puigdàlber", "Puiggròs", "Puigpelat", "Puigverd d'Agramunt", "Puigverd de Lleida", "Pujalt", "Quar, la", "Quart", "Queralbs", "Querol", "Rabós", "Rajadell", "Rasquera", "Regencós", "Rellinars", "Renau", "Reus", "Rialp", "Riba-roja d'Ebre", "Riba, la", "Ribera d'Ondara", "Ribera d'Urgellet", "Ribes de Freser", "Riells i Viabrea", "Riera de Gaià, la", "Riner", "Ripoll", "Ripollet", "Riu de Cerdanya", "Riudarenes", "Riudaura", "Riudecanyes", "Riudecols", "Riudellots de la Selva", "Riudoms", "Riumors", "Roca del Vallès, la", "Rocafort de Queralt", "Roda de Berà", "Roda de Ter", "Rodonyà", "Roquetes", "Roses", "Rosselló", "Rourell, el", "Rubí", "Rubió", "Rupià", "Rupit i Pruit", "Sabadell", "Sagàs", "Salàs de Pallars", "Saldes", "Sales de Llierca", "Sallent", "Salomó", "Salou", "Salt", "Sanaüja", "Sant Adrià de Besòs", "Sant Agustí de Lluçanès", "Sant Andreu de la Barca", "Sant Andreu de Llavaneres", "Sant Andreu Salou", "Sant Aniol de Finestres", "Sant Antoni de Vilamajor", "Sant Bartomeu del Grau", "Sant Boi de Llobregat", "Sant Boi de Lluçanès", "Sant Carles de la Ràpita", "Sant Cebrià de Vallalta", "Sant Celoni", "Sant Climent de Llobregat", "Sant Climent Sescebes", "Sant Cugat del Vallès", "Sant Cugat Sesgarrigues", "Sant Esteve de la Sarga", "Sant Esteve de Palautordera", "Sant Esteve Sesrovires", "Sant Feliu de Buixalleu", "Sant Feliu de Codines", "Sant Feliu de Guíxols", "Sant Feliu de Llobregat", "Sant Feliu de Pallerols", "Sant Feliu Sasserra", "Sant Ferriol", "Sant Fost de Campsentelles", "Sant Fruitós de Bages", "Sant Gregori", "Sant Guim de Freixenet", "Sant Guim de la Plana", "Sant Hilari Sacalm", "Sant Hipòlit de Voltregà", "Sant Iscle de Vallalta", "Sant Jaume d'Enveja", "Sant Jaume de Frontanyà", "Sant Jaume de Llierca", "Sant Jaume dels Domenys", "Sant Joan de les Abadesses", "Sant Joan de Mollet", "Sant Joan de Vilatorrada", "Sant Joan Despí", "Sant Joan les Fonts", "Sant Jordi Desvalls", "Sant Julià de Cerdanyola", "Sant Julià de Ramis", "Sant Julià de Vilatorta", "Sant Julià del Llor i Bonmatí", "Sant Just Desvern", "Sant Llorenç d'Hortons", "Sant Llorenç de la Muga", "Sant Llorenç de Morunys", "Sant Llorenç Savall", "Sant Martí d'Albars", "Sant Martí de Centelles", "Sant Martí de Llémena", "Sant Martí de Riucorb", "Sant Martí de Tous", "Sant Martí Sarroca", "Sant Martí Sesgueioles", "Sant Martí Vell", "Sant Mateu de Bages", "Sant Miquel de Campmajor", "Sant Miquel de Fluvià", "Sant Mori", "Sant Pau de Segúries", "Sant Pere de Ribes", "Sant Pere de Riudebitlles", "Sant Pere de Torelló", "Sant Pere de Vilamajor", "Sant Pere Pescador", "Sant Pere Sallavinera", "Sant Pol de Mar", "Sant Quintí de Mediona", "Sant Quirze de Besora", "Sant Quirze del Vallès", "Sant Quirze Safaja", "Sant Ramon", "Sant Sadurní d'Anoia", "Sant Sadurní d'Osormort", "Sant Salvador de Guardiola", "Sant Vicenç de Castellet", "Sant Vicenç de Montalt", "Sant Vicenç de Torelló", "Sant Vicenç dels Horts", "Santa Bàrbara", "Santa Cecília de Voltregà", "Santa Coloma de Cervelló", "Santa Coloma de Farners", "Santa Coloma de Gramenet", "Santa Coloma de Queralt", "Santa Cristina d'Aro", "Santa Eugènia de Berga", "Santa Eulàlia de Riuprimer", "Santa Eulàlia de Ronçana", "Santa Fe del Penedès", "Santa Llogaia d'Àlguema", "Santa Margarida de Montbui", "Santa Margarida i els Monjos", "Santa Maria d'Oló", "Santa Maria de Besora", "Santa Maria de Martorelles", "Santa Maria de Merlès", "Santa Maria de Miralles", "Santa Maria de Palautordera", "Santa Oliva", "Santa Pau", "Santa Perpètua de Mogoda", "Santa Susanna", "Santpedor", "Sarral", "Sarrià de Ter", "Sarroca de Bellera", "Sarroca de Lleida", "Saus, Camallera i Llampaies", "Savallà del Comtat", "Secuita, la", "Selva de Mar, la", "Selva del Camp, la", "Senan", "Sénia, la", "Senterada", "Sentiu de Sió, la", "Sentmenat", "Serinyà", "Seròs", "Serra de Daró", "Setcases", "Seu d'Urgell, la", "Seva", "Sidamon", "Sils", "Sitges", "Siurana", "Sobremunt", "Soleràs, el", "Solivella", "Solsona", "Sora", "Soriguera", "Sort", "Soses", "Subirats", "Sudanell", "Sunyer", "Súria", "Susqueda", "Tagamanent", "Talamanca", "Talarn", "Talavera", "Tallada d'Empordà, la", "Taradell", "Tarragona", "Tàrrega", "Tarrés", "Tarroja de Segarra", "Tavèrnoles", "Tavertet", "Teià", "Térmens", "Terrades", "Terrassa", "Tiana", "Tírvia", "Tiurana", "Tivenys", "Tivissa", "Tona", "Torà", "Tordera", "Torelló", "Torms, els", "Tornabous", "Torre de Cabdella, la", "Torre de Claramunt, la", "Torre de Fontaubella, la", "Torre de l'Espanyol, la", "Torre-serona", "Torrebesses", "Torredembarra", "Torrefarrera", "Torrefeta i Florejacs", "Torregrossa", "Torrelameu", "Torrelavit", "Torrelles de Foix", "Torrelles de Llobregat", "Torrent", "Torres de Segre", "Torroella de Fluvià", "Torroella de Montgrí", "Torroja del Priorat", "Tortellà", "Tortosa", "Toses", "Tossa de Mar", "Tremp", "Ullà", "Ullastrell", "Ullastret", "Ulldecona", "Ulldemolins", "Ultramort", "Urús", "Vacarisses", "Vajol, la", "Vall d'en Bas, la", "Vall de Bianya, la", "Vall de Boí, la", "Vall de Cardós", "Vall-llobrega", "Vallbona d'Anoia", "Vallbona de les Monges", "Vallcebre", "Vallclara", "Vallfogona de Balaguer", "Vallfogona de Ripollès", "Vallfogona de Riucorb", "Vallgorguina", "Vallirana", "Vallmoll", "Vallromanes", "Valls", "Valls d'Aguilar, les", "Valls de Valira, les", "Vandellòs i l'Hospitalet de l'Infant", "Vansa i Fórnols, la", "Veciana", "Vendrell, el", "Ventalló", "Verdú", "Verges", "Vespella de Gaià", "Vic", "Vidrà", "Vidreres", "Vielha e Mijaran", "Vila-rodona", "Vila-sacra", "Vila-sana", "Vila-seca", "Vilabella", "Vilabertran", "Vilablareix", "Vilada", "Viladamat", "Viladasens", "Viladecans", "Viladecavalls", "Vilademuls", "Viladrau", "Vilafant", "Vilafranca del Penedès", "Vilagrassa", "Vilajuïga", "Vilalba dels Arcs", "Vilalba Sasserra", "Vilaller", "Vilallonga de Ter", "Vilallonga del Camp", "Vilamacolum", "Vilamalla", "Vilamaniscle", "Vilamòs", "Vilanant", "Vilanova d'Escornalbou", "Vilanova de Bellpuig", "Vilanova de l'Aguda", "Vilanova de la Barca", "Vilanova de Meià", "Vilanova de Prades", "Vilanova de Sau", "Vilanova de Segrià", "Vilanova del Camí", "Vilanova del Vallès", "Vilanova i la Geltrú", "Vilaplana", "Vilassar de Dalt", "Vilassar de Mar", "Vilaür", "Vilaverd", "Vilella Alta, la", "Vilella Baixa, la", "Vilobí d'Onyar", "Vilobí del Penedès", "Vilopriu", "Vilosell, el", "Vimbodí i Poblet", "Vinaixa", "Vinebre", "Vinyols i els Arcs", "Viver i Serrateix", "Xerta"];
  return towns;
});
myApp.factory("Structures", function(){
  var structures = ["Associació sense ànim de lucre", "Fundació", " Cooperativa d'iniciativa social sense ànim de lucre"];
  return structures;
});
myApp.factory("Areas", function(){
  var areas = ["serveis socials", "serveis sanitaris", "famílies", "associacionisme educatiu", "oci i lleure", "cultura", "esport", "justícia global", "DDHH", "pau i cooperació ", "voluntariat internacional", "medi ambient", "igualtat de gènere i LGBT", "joventut", "gent gran", "cohesió social", "comunitari i veïnal", "moviments ateneistes", "protecció dels animals"];
  return areas;
});
myApp.factory("Hows", function(){
  var hows = ["xarxanet.org", "voluntariat.org", "butlletí A l'Abast", "presentació en el territori", "punt de voluntariat", "administració municipal", "Generalitat de Catalunya", "una altra entitat", "altres"];
  return hows;
});

// define factories for REST elements
myApp.factory("CustomerCompany", function($resource){
  return $resource('http://infyotrs.xarxanet.org/public/api/v1/customer_companies/:customer_id', {customer_id:''});
});
myApp.factory("CustomerUser", function($resource){
    return $resource('http://infyotrs.xarxanet.org/public/api/v1/customer_users/:login', {login:''});
});

// setup controller and pass data source
myApp.controller("FormCtrl", function($http, $scope, Towns, Structures, Hows, Areas, CustomerCompany, CustomerUser){

  $scope.customer_company = new CustomerCompany();
  $scope.customer_user = new CustomerUser();

  // Init data
  $scope.data = {};
  $scope.towns = Towns;
  $scope.structures = Structures;
  $scope.hows = Hows;
  $scope.areas = Areas;
  $scope.enviat = false;

  $http.get('data/municipis.json').then(function(res){
    $scope.town_tree = res.data;
  });

  $scope.restart = function() {
	  $scope.data = {};
    $scope.enviat = false;
  }

  $scope.send = function() {
    var date =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    //Customer company
    var customer_id = $scope.data.altres_dades.dni_nif + ' - ' + $scope.data.altres_dades.town;
    var name = ($scope.data.altres_dades.personal_entitat == 'personal') ? $scope.data.dades_personals.nom + ' ' + $scope.data.dades_personals.cognom : $scope.data.altres_dades.nom_entitat;

    $scope.customer_company.customer_id = customer_id;
    $scope.customer_company.name = name;
    $scope.customer_company.CIF = $scope.data.altres_dades.dni_nif;
    $scope.customer_company.city = $scope.data.altres_dades.town;
    $scope.customer_company.comarca = $scope.town_tree[$scope.data.altres_dades.town].comarca;
    $scope.customer_company.provincia = $scope.town_tree[$scope.data.altres_dades.town].provincia;
    $scope.customer_company.ambit_actuacio = ($scope.data.altres_dades.personal_entitat == 'personal') ? 'Particular' : $scope.data.altres_dades.area;
    $scope.customer_company.forma_juridica = ($scope.data.altres_dades.personal_entitat == 'personal') ? 'Particular' : $scope.data.altres_dades.structure;
    $scope.customer_company.via_coneixement = $scope.data.conegut;
    $scope.customer_company.valid_id = 1;
    $scope.customer_company.create_time = date;
    $scope.customer_company.create_by = 2;
    $scope.customer_company.change_time = date;
    $scope.customer_company.change_by = 2;

    //Customer user
    var login = $scope.data.altres_dades.email;

    $scope.customer_user.id = 0;
    $scope.customer_user.login = login;
    $scope.customer_user.email = $scope.data.altres_dades.email;
    $scope.customer_user.customer_id = $scope.data.altres_dades.dni_nif + ' - ' + $scope.data.altres_dades.town;
    $scope.customer_user.pw = null;
    $scope.customer_user.title = null;
    $scope.customer_user.first_name = $scope.data.dades_personals.nom;
    $scope.customer_user.last_name = $scope.data.dades_personals.cognom;
    $scope.customer_user.phone = $scope.data.altres_dades.tel;
    $scope.customer_user.mobile = null;
    $scope.customer_user.email_ext00 = '-';
    $scope.customer_user.email_ext01 = '-';
    $scope.customer_user.comments = null;
    $scope.customer_user.valid_id = 1;
    $scope.customer_user.create_time = date;
    $scope.customer_user.create_by = 2;
    $scope.customer_user.change_time = date;
    $scope.customer_user.change_by = 2;

    $scope.customer_company.$get({customer_id: customer_id}, function(data){ console.log('customer company found');
      $scope.customer_user.$get({login: login}, function(data){
        console.log('customer user found');
      },function(error){ console.log('customer user not found');
        $scope.customer_user.$save(function(data){
          console.log('customer user created');
        });
      });
    }, function(error){ console.log('customer company not found');
      $scope.customer_company.$save(function(data){ console.log('customer company created');
        $scope.customer_user.$get({login: login}, function(data){
          console.log('customer user found');
        },function(error){ console.log('customer user not found');
          $scope.customer_user.$save(function(data){
            console.log('customer user created');
          });
        });
      }, function(error){ console.log('error on customer company creation'); $scope.error = error;
      });
    });
    $scope.enviat = true;
  }
});
