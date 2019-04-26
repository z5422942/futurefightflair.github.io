/* FLAIR MASTER CONFIG | auto-generated at 2017-12-01T11:35:10-0800 (ISO-8601) */
flair.load__by_id = function () {
	for (var key in flair.names) {
		if (flair.names.hasOwnProperty(key)) {
			var data = key.split(' ');

			var orig_id = data[2];

			if (orig_id.substring(0, 'a'.length) === 'a') {
				orig_id = orig_id.substring(1);
			}
			if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
				orig_id = orig_id.substring(0, orig_id.length - 1);
			}
			if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
				orig_id = orig_id.substring(0, orig_id.length - 1);
			}
			if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
				orig_id = orig_id.substring(0, orig_id.length - 1);
			}
			if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
				orig_id = orig_id.substring(0, orig_id.length - 1);
			}
			if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
				orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
				orig_id = orig_id.substring(0, orig_id.length - 1);
			}

			var flair_class = '';
			for (var i = 0; i < data.length; i++) {
				flair_class += 'flair-' + data[i] + ' ';
			}

			flair_class = flair_class.slice(0, -1);


			flair.by_id[data[2]] = {
				key: key,
				heropos: data[0],
				sheet: data[1],
				hero_id: data[2],
				orig_id: orig_id,
				hero_name: flair.names[key],
				flair_class: flair_class,
			}
		}
	}
};
flair.by_id = {};
flair.names = {
	/* [STANDARD] */



"logo tierlist logo" : "Logo [] #Combat# ",
"stanlee tierlist stanlee" : "Stan Lee [Excelsior] #None# ",
"absorbingman tierlist absorbingman" : "Absorbing Man [] #Combat# ",
"adamwarlock tierlist adamwarlock" : "Adam Warlock [] #Blast# #Regeneration#",
"agentvenom tierlist agentvenom" : "Agent Venom [Agent Anti-Venom] #Combat# #Rage#",
"amadeuscho tierlist amadeuscho" : "Amadeus Cho [Monsters Unleashed] #Combat# ",
"americachavez tierlist americachavez" : "America Chavez [] #Combat# #Leader# ",
"ancientone tierlist ancientone" : "Ancient One [Doctor Strange] #Blast# #Support# #Leader# ",
"angel tierlist angel" : "Archangel [X-Force] #Speed# #Leader# #Authority#",
"angela tierlist angela" : "Angela [All-New, All-Different] #Universal# ",
"antiman tierlist antiman" : "Anti-Man [] #Universal# #Leader# #Energy#",
"antman-t2 tierlist antman-t2" : "Ant-Man [Endgame] #Speed# #Synergy##Refinement#",
"antman-t3 tierlist antman-t3" : "Ant-Man [Endgame] #Speed# #Synergy##Refinement#",
"apocalypse tierlist apocalypse" : "Apocalypse [] #Combat# #Energy#",
"arachknight tierlist arachknight" : "Arachknight [] #Speed# ",
"mordo tierlist mordo" : "Baron Mordo [] #Blast# ",
"beast tierlist beast" : "Beast [Age of Apocalypse] #Combat# #Buff# #Support# #Leader# #Refinement#",
"blackbolt tierlist blackbolt" : "Black Bolt [Attilan Rising] #Universal# ",
"blackcat tierlist blackcat" : "Black Cat [All-New, All-Different] #Speed# ",
"blackdwarf tierlist blackdwarf" : "Cull Obsidian [Infinity War] #Universal# #Refinement#",
"blackpanther-t2 tierlist blackpanther-t2" : "Black Panther [Black Panther] #Combat# #Energy#",
"blackpanther-t3 tierlist blackpanther-t3" : "Black Panther [Black Panther] #Combat# #Energy#",
"blackwidow tierlist blackwidow" : "Black Widow [Endgame] #Speed# #Synergy##Authority#",
"blade tierlist blade" : "Blade [70's Classic] #Combat# ",
"bluemarvel tierlist bluemarvel" : "Blue Marvel [] #Universal# #Leader# #Authority#",
"bullseye tierlist bullseye" : "Bullseye [Secret Wars: 1872] #Combat# #Leader# ",
"cable tierlist cable" : "Cable [X-Force] #Blast# #Leader# #Energy#",
"captainamerica-t2 tierlist captainamerica-t2" : "Captain America [Endgame] #Combat# #Synergy##Energy#",
"captainamerica-t3 tierlist captainamerica-t3" : "Captain America [Endgame] #Combat# #Synergy##Energy#",
"captainmarvel-t2 tierlist captainmarvel-t2" : "Captain Marvel [Captain Marvel] #Universal# #Rage#",
"captainmarvel-t3 tierlist captainmarvel-t3" : "Captain Marvel [Captain Marvel] #Universal# #Rage#",
"carnage tierlist carnage" : "Carnage [] #Combat# #Rage#",
"clea tierlist clea" : "Clea [] #Universal# ",
"colossus tierlist colossus" : "Colossus [X-Force] #Combat# #Support# #Refinement#",
"corvus tierlist corvus" : "Corvus Glaive [Infinity War] #Universal# #Authority#",
"crescent tierlist crescent" : "Crescent [] #Combat# #Leader# #Transcendence#",
"crossbones tierlist crossbones" : "Crossbones [Modern] #Combat# ",
"crystal tierlist crystal" : "Crystal [Fantastic Four] #Blast# #Destruction#",
"cyclops tierlist cyclops" : "Cyclops [Age of Apocalypse] #Blast# #Support# #Leader# #Destruction#",
"daisy tierlist daisy" : "Daisy Johnson [Agents of Shield (Quake)] #Blast# #Buff# ",
"daredevil tierlist daredevil" : "Daredevil [All-New, All-Different] #Speed# ",
"deadpool-t2 tierlist deadpool-t2" : "Deadpool [X-Force] #Speed# #Energy#",
"deadpool-t3 tierlist deadpool-t3" : "Deadpool [X-Force] #Speed# #Energy#",
"deathlok tierlist deathlok" : "Deathlok [Modern] #Blast# ",
"destroyer tierlist destroyer" : "Destroyer [Prometheus] #Universal# ",
"doctordoom tierlist doctordoom" : "Doctor Doom [] #Universal# #Leader# #Energy#",
"doctoroctopus tierlist doctoroctopus" : "Doctor Octopus [Superior Spider-Man] #Combat# ",
"drstrange tierlist drstrange" : "Dr Strange [Infinity War] #Blast# #Authority#",
"domino tierlist domino" : "Domino [] #Speed# #Leader# #Energy#",
"dormammu tierlist dormammu" : "Dormammu [] #Universal# #Authority#",
"drax tierlist drax" : "Drax [All-New, All-Different] #Combat# ",
"ebonymaw tierlist ebonymaw" : "Ebony Maw [Infinity War] #Universal# #Support# #Destruction#",
"elektra tierlist elektra" : "Elektra [Daredevil] #Speed# ",
"elsabloodstone tierlist elsabloodstone" : "Elsa Bloodstone [Monsters Unleashed] #Speed# ",
"emmafrost tierlist emmafrost" : "Emma Frost [Marvel Now] #Blast# #Authority#",
"enchantress tierlist enchantress" : "Enchantress [] #Blast# ",
"falcon tierlist falcon" : "Falcon [Marvel Legacy] #Speed# ",
"fandral tierlist fandral" : "Fandral [] #Speed# ",
"fantomex tierlist fantomex" : "Fantomex [] #Speed# #Refinement#",
"gambit tierlist gambit" : "Gambit [] #Blast# #Energy#",
"gamora tierlist gamora" : "Gamora [Guardians of the Galaxy 2] #Speed# ",
"ghost tierlist ghost" : "Ghost [Ant-Man and the Wasp] #Speed# #Support# #Leader# ",
"ghostpanther tierlist ghostpanther" : "Ghost Panther [] #Universal# #Support# #Leader# #Energy#",
"ghostrider tierlist ghostrider" : "Ghost Rider [Attilan Rising] #Universal# ",
"giantman tierlist giantman" : "Giant-Man [Ultron Pym] #Universal# ",
"goliath tierlist goliath" : "Goliath [] #Combat# #Leader# ",
"gorgon tierlist gorgon" : "Gorgon [] #Combat# #Leader# ",
"greengoblin tierlist greengoblin" : "Green Goblin [] #Speed# ",
"groot tierlist groot" : "Groot [Infinity War] #Combat# #Support# ",
"gwenpool tierlist gwenpool" : "Gwenpool [Gwen Poole] #Speed# ",
"hawkeye tierlist hawkeye" : "Ronin [Endgame] #Speed# ",
"heimdall tierlist heimdall" : "Heimdall [] #Universal# ",
"hela tierlist hela" : "Hela [Ragnarok] #Universal# #Leader# ",
"hellcat tierlist hellcat" : "Hellcat [] #Speed# ",
"hellstorm tierlist hellstorm" : "Hellstorm [] #Universal# ",
"hogun tierlist hogun" : "Hogun [] #Combat# ",
"hulk tierlist hulk" : "Hulk [Endgame] #Combat# #Synergy##Regeneration#",
"hulkbuster tierlist hulkbuster" : "Hulkbuster 2.0 [Infinity War] #Combat# #Refinement#",
"hulkling tierlist hulkling" : "Hulkling [] #Combat# ",
"humantorch tierlist humantorch" : "Human Torch [] #Blast# #Energy#",
"hyperion tierlist hyperion" : "Hyperion [Classic] #Universal# #Leader# #Destruction#",
"inferno tierlist inferno" : "Inferno [Modern] #Blast# ",
"invisiblewoman tierlist invisiblewoman" : "Invisible Woman [] #Blast# #Support# #Authority#",
"ironfist tierlist ironfist" : "Iron Fist [Iron Fist] #Combat# ",
"ironhammer tierlist ironhammer" : "Iron Hammer [] #Universal# #Leader# #Energy#",
"ironheart tierlist ironheart" : "Ironheart [] #Blast# #Leader# ",
"ironman-t2 tierlist ironman-t2" : "Iron Man [Endgame] #Blast# #Synergy##Energy#",
"ironman-t3 tierlist ironman-t3" : "Iron Man [Endgame] #Blast# #Synergy##Energy#",
"janefoster tierlist janefoster" : "Jane Foster [] #Universal# ",
"jeangrey tierlist jeangrey" : "Jean Grey [] #Blast# #Leader# #Energy#",
"jessicajones tierlist jessicajones" : "Jessica Jones [] #Combat# ",
"kaecilius tierlist kaecilius" : "Kaecilius [] #Blast# ",
"msmarvel tierlist msmarvel" : "Ms. Marvel [Karachi Costume] #Speed# ",
"karnak tierlist karnak" : "Karnak [All-New, All-Different] #Speed# ",
"katebishop tierlist katebishop" : "Kate Bishop [] #Speed# ",
"kidkaiju tierlist kidkaiju" : "Kid Kaiju [Monsters Unleashed] #Speed# ",
"erikkillmonger tierlist erikkillmonger" : "Erik Killmonger [Black Panther] #Combat# #Refinement#",
"kingpin tierlist kingpin" : "Kingpin [] #Combat# ",
"kraven tierlist kraven" : "Kraven the Hunter [] #Speed# ",
"lash tierlist lash" : "Lash [Modern] #Blast# ",
"lincoln tierlist lincoln" : "Lincoln [] #Blast# #Leader# ",
"lizard tierlist lizard" : "Lizard [] #Combat# ",
"loki tierlist loki" : "Loki [Ragnarok] #Universal# #Energy#",
"lukecage tierlist lukecage" : "Luke Cage [Luke Cage] #Combat# ",
"lunasnow-t2 tierlist lunasnow-t2" : "Luna Snow [Andromeda Suit] #Speed# #Rage#",
"lunasnow-t3 tierlist lunasnow-t3" : "Luna Snow [Andromeda Suit] #Speed# #Rage#",
"magik tierlist magik" : "Magik [] #Blast# #Refinement#",
"magneto-t2 tierlist magneto-t2" : "Magneto [Marvel Now] #Blast# #Leader# #Energy#",
"magneto-t3 tierlist magneto-t3" : "Magneto [Marvel Now] #Blast# #Leader# #Energy#",
"malekith tierlist malekith" : "Malekith [All-New, All-Different] #Blast# ",
"mantis tierlist mantis" : "Mantis [] #Blast# #Support# ",
"maximus tierlist maximus" : "Maximus [] #Blast# ",
"medusa tierlist medusa" : "Medusa [Monsters Unleashed] #Universal# #Leader# #Energy#",
"milesmorales tierlist milesmorales" : "Miles Morales [Into the Spider-Verse] #Speed# #Energy#",
"misterfantastic-t2 tierlist misterfantastic-t2" : "Mister Fantastic [] #Combat# #Leader# #Energy#",
"misterfantastic-t3 tierlist misterfantastic-t3" : "Mister Fantastic [] #Combat# #Leader# #Energy#",
"mistyknight tierlist mistyknight" : "Misty Knight [] #Speed# ",
"mockingbird tierlist mockingbird" : "Mockingbird [All-New, All-Different] #Speed# ",
"modok tierlist modok" : "M.O.D.O.K [CAPDOC] #Blast# ",
"moongirl tierlist moongirl" : "Moon Girl [Monsters Unleashed] #Blast# #Leader# ",
"moonknight tierlist moonknight" : "Moon Knight [Armored] #Combat# ",
"morganlafey tierlist morganlafey" : "Morgan Le Fay [] #Universal# #Energy#",
"mysterio tierlist mysterio" : "Mysterio [] #Blast# ",
"nadiavandyne tierlist nadiavandyne" : "Nadia Van Dyne [] #Blast# #Support# ",
"nebula tierlist nebula" : "Nebula [Endgame] #Combat# #Synergy##Transcendence#",
"nightcrawler tierlist nightcrawler" : "Nightcrawler [X-Force] #Speed# ",
"nova tierlist nova" : "Nova [] #Universal# #Energy#",
"odin tierlist odin" : "Odin [] #Universal# #Leader# #Authority#",
"philcoulson tierlist philcoulson" : "Phil Coulson [A.O.S Season 3] #Blast# #Support# ",
"proximamidnight tierlist proximamidnight" : "Proxima Midnight [Infinity War] #Universal# #Destruction#",
"psylocke tierlist psylocke" : "Psylocke [] #Blast# #Authority#",
"punisher tierlist punisher" : "Punisher [Marvel Legacy] #Combat# #Destruction#",
"quasar tierlist quasar" : "Quasar [] #Universal# ",
"quicksilver tierlist quicksilver" : "Quicksilver [Marvel Legacy] #Speed# #Energy#",
"redhulk tierlist redhulk" : "Red Hulk [Marvel Now] #Combat# #Leader# ",
"redskull tierlist redskull" : "Red Skull [] #Blast# ",
"rhino tierlist rhino" : "Rhino [] #Combat# #Leader# ",
"robbiereyes tierlist robbiereyes" : "Robbie Reyes [] #Universal# #Leader# ",
"rocketraccoon tierlist rocketraccoon" : "Rocket Raccoon [Endgame] #Blast# #Synergy##Destruction#",
"rogue tierlist rogue" : "Rogue [] #Speed# ",
"ronan tierlist ronan" : "Ronan [Captain Marvel] #Universal# #Support# #Leader# #Authority#",
"sandman tierlist sandman" : "Sandman [] #Combat# ",
"satana tierlist satana" : "Satana [Marvel Legacy] #Universal# #Leader# ",
"scarletwitch tierlist scarletwitch" : "Scarlet Witch [Infinity War] #Blast# #Leader# #Authority#",
"sentinel tierlist sentinel" : "Sentinel [] #Universal# #Leader# #Authority#",
"shangchi tierlist shangchi" : "Shang Chi [] #Combat# ",
"agent13 tierlist agent13" : "Agent 13 [Civil War] #Speed# ",
"sharonrogers-t2 tierlist sharonrogers-t2" : "Sharon Rogers [Dark Star Armor] #Blast# #Energy#",
"sharonrogers-t3 tierlist sharonrogers-t3" : "Sharon Rogers [Dark Star Armor] #Blast# #Energy#",
"shehulk tierlist shehulk" : "She Hulk [Fantastic Four] #Combat# #Leader# #Refinement#",
"shuri tierlist shuri" : "Shuri [Black Panther] #Speed# #Support# #Authority#",
"sif tierlist sif" : "Sif [Modern] #Combat# ",
"silk tierlist silk" : "Silk [Web Suit] #Speed# ",
"sin tierlist sin" : "Sin [] #Speed# ",
"singularity tierlist singularity" : "Singularity [] #Universal# ",
"sistergrimm tierlist sistergrimm" : "Sister Grimm [All-New, All-Different] #Blast# ",
"skurge tierlist skurge" : "Skurge [] #Combat# ",
"songbird tierlist songbird" : "Songbird [] #Blast# ",
"spidergwen tierlist spidergwen" : "Spider Gwen [Gwendolyne Stacy] #Speed# ",
"spiderman-t2 tierlist spiderman-t2" : "Spider-Man [Infinity War] #Speed# #Authority#",
"spiderman-t3 tierlist spiderman-t3" : "Spider-Man [Infinity War] #Speed# #Authority#",
"spiderman2099 tierlist spiderman2099" : "Spider-Man 2099 [] #Speed# #Leader# #Authority#",
"squirrelgirl tierlist squirrelgirl" : "Squirrel Girl [Marvel Now] #Speed# ",
"starlord tierlist starlord" : "Star Lord [Infinity War] #Blast# #Leader# #Energy#",
"storm tierlist storm" : "Storm [] #Blast# ",
"stryfe tierlist stryfe" : "Stryfe [] #Blast# #Leader# #Authority#",
"supergiant tierlist supergiant" : "Supergiant [] #Universal# #Leader# ",
"thanos-t2 tierlist thanos-t2" : "Thanos [Endgame] #Universal# #Leader# #Authority#",
"thanos-t3 tierlist thanos-t3" : "Thanos [Endgame] #Universal# #Leader# #Authority#",
"thing tierlist thing" : "Thing [] #Combat# #Support# #Refinement#",
"thor-t2 tierlist thor-t2" : "Thor [Infinity War] #Universal# #Rage#",
"thor-t3 tierlist thor-t3" : "Thor [Infinity War] #Universal# #Rage#",
"titania tierlist titania" : "Titania [] #Combat# #Leader# ",
"ulik tierlist ulik" : "Ulik [] #Combat# ",
"ultron tierlist ultron" : "Ultron Mark 3 [Age of Ultron] #Universal# ",
"ulyssesklaue tierlist ulyssesklaue" : "Ulysses Klaue [] #Blast# #Support# ",
"valkyrie tierlist valkyrie" : "Valkyrie [] #Combat# #Support# #Patience#",
"venom tierlist venom" : "Venom [Anti-Venom] #Combat# #Support# ",
"victorious tierlist victorious" : "Victorious [] #Universal# #Leader# #Rage#",
"vision tierlist vision" : "Vision [Age of Ultron] #Universal# ",
"volstagg tierlist volstagg" : "Volstagg [] #Combat# #Support# ",
"vulture tierlist vulture" : "Vulture [Homecoming] #Speed# ",
"warmachine tierlist warmachine" : "War Machine [Endgame] #Blast# #Synergy##Destruction#",
"warwolf tierlist warwolf" : "Warwolf [] #Combat# #Buff# #Support# #Leader# ",
"wasp tierlist wasp" : "Wasp [Ant-Man and the Wasp] #Blast# #Support# #Leader# #Authority#",
"weaponhex tierlist weaponhex" : "Weapon Hex [] #Blast# #Support# #Destruction#",
"whiplash tierlist whiplash" : "Whiplash [] #Blast# ",
"whitefox tierlist whitefox" : "White Fox [] #Speed# #Support# #Destruction#",
"whitetiger tierlist whitetiger" : "White Tiger [] #Combat# ",
"wiccan tierlist wiccan" : "Wiccan [] #Blast# ",
"wintersoldier tierlist wintersoldier" : "Winter Soldier [Infinity War] #Speed# #Energy#",
"Wolverine-t2 tierlist Wolverine-t2" : "Wolverine [X-Force] #Combat# #Rage#",
"Wolverine-t3 tierlist Wolverine-t3" : "Wolverine [X-Force] #Combat# #Rage#",
"wong tierlist wong" : "Wong [Doctor Strange] #Speed# ",
"x23 tierlist x23" : "X-23 [X-Force] #Speed# #Authority#",
"yellowjacket tierlist yellowjacket" : "Yellow Jacket [Marvel Now] #Blast# ",
"yondu tierlist yondu" : "Yondu [Guardians of the Galaxy 2] #Speed# ",
"nickfury tierlist nickfury" : "Nick Fury [Captain Marvel] #Speed# #Support# #Leader# #Energy#",
"minnerva-t2 tierlist minnerva-t2" : "Minn-Erva [Captain Marvel] #Combat# #Energy#",
"minnerva-t3 tierlist minnerva-t3" : "Minn-Erva [Captain Marvel] #Combat# #Energy#",
"korath tierlist korath" : "Korath [] #Speed# #Energy#",
"juggernaut tierlist juggernaut" : "Juggernaut [] #Combat# #Rage#",
"warpath tierlist warpath" : "Warpath [] #Combat# #Rage#",
"sabretooth tierlist sabretooth" : "Sabretooth [] #Combat# #Rage#",






};
