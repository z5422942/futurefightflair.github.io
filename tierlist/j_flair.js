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
"stanlee tierlist stanlee" : "Stan Lee [Forever] #None# ",
"absorbingman tierlist absorbingman" : "Absorbing Man [] #Combat# ",
"adamwarlock tierlist adamwarlock" : "Adam Warlock [] #Blast# ",
"agentvenom tierlist agentvenom" : "Agent Venom [Agent Anti-Venom] #Combat# ",
"amadeuscho tierlist amadeuscho" : "Amadeus Cho [Monsters Unleashed] #Combat# ",
"americachavez tierlist americachavez" : "America Chavez [] #Combat# #Leader# ",
"ancientone tierlist ancientone" : "Ancient One [Doctor Strange] #Blast# #Buff# #Support# #Leader# ",
"angel tierlist angel" : "Archangel [X-Force] #Speed# #Leader# ",
"angela tierlist angela" : "Angela [All-New, All-Different] #Universal# ",
"antiman tierlist antiman" : "Anti-Man [] #Universal# #Leader# ",
"antman-t2 tierlist antman-t2" : "Ant-Man [Endgame] #Speed# #Synergy#",
"antman-t3 tierlist antman-t3" : "Ant-Man [Endgame] #Speed# #PVE4##PVP2##Synergy#",
"apocalypse tierlist apocalypse" : "Apocalypse [] #Combat# ",
"arachknight tierlist arachknight" : "Arachknight [] #Speed# ",
"mordo tierlist mordo" : "Baron Mordo [] #Blast# ",
"beast tierlist beast" : "Beast [Uncanny X-Men] #Combat# #Buff# #Support# #Leader# ",
"blackbolt tierlist blackbolt" : "Black Bolt [Attilan Rising] #Universal# ",
"blackcat tierlist blackcat" : "Black Cat [All-New, All-Different] #Speed# ",
"blackdwarf tierlist blackdwarf" : "Cull Obsidian [Infinity War] #Universal# ",
"blackpanther-t2 tierlist blackpanther-t2" : "Black Panther [Black Panther] #Combat# ",
"blackpanther-t3 tierlist blackpanther-t3" : "Black Panther [Black Panther] #Combat# ",
"blackwidow tierlist blackwidow" : "Black Widow [Endgame] #Speed# #Synergy#",
"blade tierlist blade" : "Blade [70's Classic] #Combat# ",
"bluemarvel tierlist bluemarvel" : "Blue Marvel [] #Universal# ",
"bullseye tierlist bullseye" : "Bullseye [Secret Wars: 1872] #Combat# #Leader# ",
"cable tierlist cable" : "Cable [X-Force] #Blast# #PVE4##PVP1##Leader# ",
"captainamerica-t2 tierlist captainamerica-t2" : "Captain America [Endgame] #Combat# #PVE3##PVP1##Synergy#",
"captainamerica-t3 tierlist captainamerica-t3" : "Captain America [Endgame] #Combat# #PVE4##PVP2##Synergy#",
"captainmarvel-t2 tierlist captainmarvel-t2" : "Captain Marvel [Endgame] #Universal# #PVE4##PVP4##Synergy#",
"captainmarvel-t3 tierlist captainmarvel-t3" : "Captain Marvel [Endgame] #Universal# #PVE5##PVP5##Synergy#",
"carnage tierlist carnage" : "Carnage [] #Combat# ",
"clea tierlist clea" : "Clea [] #Universal# ",
"colossus tierlist colossus" : "Colossus [Phoenix Five] #Combat# #PVE3##PVP4##Support# ",
"corvus tierlist corvus" : "Corvus Glaive [Infinity War] #Universal# ",
"crescent tierlist crescent" : "Crescent [] #Combat# #Leader# ",
"crossbones tierlist crossbones" : "Crossbones [Modern] #Combat# ",
"crystal tierlist crystal" : "Crystal [Fantastic Four] #Blast# ",
"cyclops-t2 tierlist cyclops-t2" : "Cyclops [Phoenix Five] #Blast# #Support# #Leader# ",
"cyclops-t3 tierlist cyclops-t3" : "Cyclops [Phoenix Five] #Blast# #PVE5##PVP1##Support# #Leader# ",
"daisy tierlist daisy" : "Daisy Johnson [Agents of Shield (Quake)] #Blast# #Buff# ",
"daredevil tierlist daredevil" : "Daredevil [All-New, All-Different] #Speed# ",
"deadpool-t2 tierlist deadpool-t2" : "Deadpool [X-Force] #Speed# #PVE4##PVP4#",
"deadpool-t3 tierlist deadpool-t3" : "Deadpool [X-Force] #Speed# #PVE5##PVP5#",
"deathlok tierlist deathlok" : "Deathlok [Modern] #Blast# ",
"destroyer tierlist destroyer" : "Destroyer [Prometheus] #Universal# ",
"doctordoom-t2 tierlist doctordoom-t2" : "Doctor Doom [] #Universal# #PVE4##PVP4##Leader# ",
"doctordoom-t3 tierlist doctordoom-t3" : "Doctor Doom [] #Universal# #PVE4##PVP4##Leader# ",
"doctoroctopus tierlist doctoroctopus" : "Doctor Octopus [Superior Spider-Man] #Combat# ",
"drstrange-t2 tierlist drstrange-t2" : "Dr Strange [Infinity War] #Blast# #Leader# ",
"drstrange-t3 tierlist drstrange-t3" : "Dr Strange [Infinity War] #Blast# #PVE5##PVP4##Leader# ",
"domino tierlist domino" : "Domino [] #Speed# #Leader# ",
"dormammu tierlist dormammu" : "Dormammu [] #Universal# ",
"drax tierlist drax" : "Drax [All-New, All-Different] #Combat# ",
"ebonymaw tierlist ebonymaw" : "Ebony Maw [Infinity War] #Universal# #Support# ",
"elektra tierlist elektra" : "Elektra [Daredevil] #Speed# ",
"elsabloodstone tierlist elsabloodstone" : "Elsa Bloodstone [Monsters Unleashed] #Speed# ",
"emmafrost tierlist emmafrost" : "Emma Frost [Phoenix Five] #Blast# ",
"enchantress tierlist enchantress" : "Enchantress [] #Blast# ",
"falcon tierlist falcon" : "Falcon [Legacy] #Speed# ",
"fandral tierlist fandral" : "Fandral [] #Speed# ",
"fantomex tierlist fantomex" : "Fantomex [] #Speed# ",
"gambit tierlist gambit" : "Gambit [] #Blast# #PVE4##PVP1##Leader# ",
"gamora tierlist gamora" : "Gamora [Guardians of the Galaxy 2] #Speed# ",
"ghost tierlist ghost" : "Ghost [Ant-Man and the Wasp] #Speed# #Support# #Leader# ",
"ghostpanther tierlist ghostpanther" : "Ghost Panther [] #Universal# #PVE3##PVP1##Support# #Leader# ",
"ghostrider tierlist ghostrider" : "Ghost Rider [Attilan Rising] #Universal# ",
"giantman tierlist giantman" : "Giant-Man [Ultron Pym] #Universal# ",
"goliath tierlist goliath" : "Goliath [] #Combat# #Leader# ",
"gorgon tierlist gorgon" : "Gorgon [] #Combat# #Leader# ",
"greengoblin tierlist greengoblin" : "Green Goblin [] #Speed# ",
"groot tierlist groot" : "Groot [Infinity War] #Combat# #Buff# #Support# ",
"gwenpool tierlist gwenpool" : "Gwenpool [Gwen Poole] #Speed# ",
"hawkeye tierlist hawkeye" : "Ronin [Endgame] #Speed# ",
"heimdall tierlist heimdall" : "Heimdall [] #Universal# ",
"hela tierlist hela" : "Hela [Ragnarok] #Universal# ",
"hellcat tierlist hellcat" : "Hellcat [] #Speed# ",
"hellstorm tierlist hellstorm" : "Hellstorm [] #Universal# ",
"hogun tierlist hogun" : "Hogun [] #Combat# ",
"hulk tierlist hulk" : "Hulk [Endgame] #Combat# #Synergy#",
"hulkbuster tierlist hulkbuster" : "Hulkbuster 2.0 [Infinity War] #Combat# ",
"hulkling tierlist hulkling" : "Hulkling [] #Combat# ",
"humantorch tierlist humantorch" : "Human Torch [Future Foundation] #Blast# ",
"hyperion tierlist hyperion" : "Hyperion [Classic] #Universal# #Leader# ",
"inferno tierlist inferno" : "Inferno [Modern] #Blast# ",
"invisiblewoman tierlist invisiblewoman" : "Invisible Woman [Future Foundation] #Blast# ",
"ironfist tierlist ironfist" : "Iron Fist [Iron Fist] #Combat# ",
"ironhammer tierlist ironhammer" : "Iron Hammer [] #Universal# #Leader# ",
"ironheart tierlist ironheart" : "Ironheart [] #Blast# #Leader# ",
"ironman-t2 tierlist ironman-t2" : "Iron Man [Endgame] #Blast# #Synergy#",
"ironman-t3 tierlist ironman-t3" : "Iron Man [Endgame] #Blast# #PVE4##PVP1##Synergy#",
"janefoster tierlist janefoster" : "Jane Foster [] #Universal# ",
"jeangrey-t2 tierlist jeangrey-t2" : "Jean Grey [X-Men Red] #Blast# #PVE3##PVP3##Leader# ",
"jeangrey-t3 tierlist jeangrey-t3" : "Jean Grey [X-Men Red] #Blast# #PVE5##PVP5##Leader# ",
"jessicajones tierlist jessicajones" : "Jessica Jones [] #Combat# ",
"kaecilius tierlist kaecilius" : "Kaecilius [] #Blast# ",
"msmarvel tierlist msmarvel" : "Ms. Marvel [Karachi Costume] #Speed# ",
"karnak tierlist karnak" : "Karnak [All-New, All-Different] #Speed# ",
"katebishop tierlist katebishop" : "Kate Bishop [] #Speed# ",
"kidkaiju tierlist kidkaiju" : "Kid Kaiju [Monsters Unleashed] #Speed# ",
"erikkillmonger tierlist erikkillmonger" : "Erik Killmonger [Black Panther] #Combat# ",
"kingpin tierlist kingpin" : "Kingpin [] #Combat# ",
"kraven tierlist kraven" : "Kraven the Hunter [] #Speed# ",
"lash tierlist lash" : "Lash [Modern] #Blast# ",
"lincoln tierlist lincoln" : "Lincoln Campbell [] #Blast# #Leader# ",
"lizard tierlist lizard" : "Lizard [] #Combat# ",
"loki tierlist loki" : "Loki [Ragnarok] #Universal# ",
"lukecage tierlist lukecage" : "Luke Cage [Luke Cage] #Combat# ",
"lunasnow-t2 tierlist lunasnow-t2" : "Luna Snow [Andromeda Suit] #Speed# #PVE4##PVP2#",
"lunasnow-t3 tierlist lunasnow-t3" : "Luna Snow [Andromeda Suit] #Speed# #PVE5##PVP3#",
"magik tierlist magik" : "Magik [] #Blast# ",
"magneto-t2 tierlist magneto-t2" : "Magneto [Now] #Blast# #Leader# ",
"magneto-t3 tierlist magneto-t3" : "Magneto [Now] #Blast# #Leader# ",
"malekith tierlist malekith" : "Malekith [All-New, All-Different] #Blast# #Leader# ",
"mantis tierlist mantis" : "Mantis [] #Blast# #Support# ",
"maximus tierlist maximus" : "Maximus [] #Blast# ",
"medusa tierlist medusa" : "Medusa [Monsters Unleashed] #Universal# #Leader# ",
"milesmorales tierlist milesmorales" : "Miles Morales [Into the Spider-Verse] #Speed# ",
"misterfantastic-t2 tierlist misterfantastic-t2" : "Mister Fantastic [Future Foundation] #Combat# #PVE3##PVP1##Leader# ",
"misterfantastic-t3 tierlist misterfantastic-t3" : "Mister Fantastic [Future Foundation] #Combat# #PVE5##PVP1##Leader# ",
"mistyknight tierlist mistyknight" : "Misty Knight [] #Speed# #Leader# ",
"mockingbird tierlist mockingbird" : "Mockingbird [All-New, All-Different] #Speed# ",
"modok tierlist modok" : "M.O.D.O.K [CAPDOC] #Blast# ",
"moongirl tierlist moongirl" : "Moon Girl [Monsters Unleashed] #Blast# #Leader# ",
"moonknight tierlist moonknight" : "Moon Knight [Armored] #Combat# ",
"morganlafey tierlist morganlafey" : "Morgan Le Fay [] #Universal# ",
"mysterio tierlist mysterio" : "Mysterio [Far From Home] #Blast# ",
"nadiavandyne tierlist nadiavandyne" : "Nadia Van Dyne [] #Blast# ",
"nebula tierlist nebula" : "Nebula [Endgame] #Combat# #Synergy#",
"nightcrawler tierlist nightcrawler" : "Nightcrawler [X-Force] #Speed# ",
"nova tierlist nova" : "Nova [] #Universal# ",
"odin tierlist odin" : "Odin [] #Universal# #Leader# ",
"philcoulson tierlist philcoulson" : "Phil Coulson [A.O.S Season 3] #Blast# #Support# ",
"proximamidnight tierlist proximamidnight" : "Proxima Midnight [Infinity War] #Universal# #Leader# ",
"psylocke tierlist psylocke" : "Psylocke [Disassembled] #Blast# #PVE4##PVP1#",
"punisher tierlist punisher" : "Punisher [Legacy] #Combat# ",
"quasar tierlist quasar" : "Quasar [] #Universal# ",
"quicksilver tierlist quicksilver" : "Quicksilver [Legacy] #Speed# #PVE3##PVP4#",
"redhulk tierlist redhulk" : "Red Hulk [Now] #Combat# #Leader# ",
"redskull tierlist redskull" : "Red Skull [] #Blast# ",
"rhino tierlist rhino" : "Rhino [] #Combat# #Leader# ",
"robbiereyes tierlist robbiereyes" : "Robbie Reyes [] #Universal# #Leader# ",
"rocketraccoon tierlist rocketraccoon" : "Rocket Raccoon [Endgame] #Blast# #Synergy#",
"rogue tierlist rogue" : "Rogue [] #Speed# ",
"ronan tierlist ronan" : "Ronan [Captain Marvel] #Universal# #Support# #Leader# ",
"sandman tierlist sandman" : "Sandman [] #Combat# ",
"satana tierlist satana" : "Satana [Legacy] #Universal# #Leader# ",
"scarletwitch tierlist scarletwitch" : "Scarlet Witch [Infinity War] #Blast# #PVE4##PVP3##Leader# ",
"sentinel tierlist sentinel" : "Sentinel [] #Universal# #Leader# ",
"shangchi tierlist shangchi" : "Shang Chi [] #Combat# ",
"agent13 tierlist agent13" : "Agent 13 [Civil War] #Speed# ",
"sharonrogers-t2 tierlist sharonrogers-t2" : "Sharon Rogers [Dark Star Armor] #Blast# #PVE4##PVP1#",
"sharonrogers-t3 tierlist sharonrogers-t3" : "Sharon Rogers [Dark Star Armor] #Blast# #PVE5##PVP2#",
"shehulk tierlist shehulk" : "She Hulk [Fantastic Four] #Combat# #Leader# ",
"shuri tierlist shuri" : "Shuri [Black Panther] #Speed# #Support# ",
"sif tierlist sif" : "Sif [Modern] #Combat# ",
"silk tierlist silk" : "Silk [Web Suit] #Speed# ",
"sin tierlist sin" : "Sin [] #Speed# ",
"singularity tierlist singularity" : "Singularity [] #Universal# ",
"sistergrimm tierlist sistergrimm" : "Sister Grimm [All-New, All-Different] #Blast# ",
"skurge tierlist skurge" : "Skurge [] #Combat# ",
"songbird tierlist songbird" : "Songbird [] #Blast# ",
"spidergwen tierlist spidergwen" : "Spider Gwen [Gwendolyne Stacy] #Speed# ",
"spiderman-t2 tierlist spiderman-t2" : "Spider-Man [Far From Home (Stealth Suit)] #Speed# #Synergy#",
"spiderman-t3 tierlist spiderman-t3" : "Spider-Man [Far From Home (Stealth Suit)] #Speed# #PVE2##PVP3##Synergy#",
"spiderman2099 tierlist spiderman2099" : "Spider-Man 2099 [All-New, All-Different] #Speed# #PVE3##PVP3##Leader# ",
"squirrelgirl tierlist squirrelgirl" : "Squirrel Girl [Now] #Speed# ",
"starlord tierlist starlord" : "Star Lord [Infinity War] #Blast# #Leader# ",
"storm tierlist storm" : "Storm [X-Men Red] #Blast# ",
"stryfe tierlist stryfe" : "Stryfe [] #Blast# #PVE3##PVP3##Leader# ",
"supergiant tierlist supergiant" : "Supergiant [] #Universal# #Leader# ",
"thanos-t2 tierlist thanos-t2" : "Thanos [Endgame] #Universal# #PVE3##PVP4##Leader# ",
"thanos-t3 tierlist thanos-t3" : "Thanos [Endgame] #Universal# #PVE4##PVP5##Leader# ",
"thing tierlist thing" : "Thing [Future Foundation] #Combat# #Support# ",
"thor-t2 tierlist thor-t2" : "Thor [Endgame] #Universal# #Synergy#",
"thor-t3 tierlist thor-t3" : "Thor [Endgame] #Universal# #PVE4##PVP2##Synergy#",
"titania tierlist titania" : "Titania [] #Combat# #Leader# ",
"ulik tierlist ulik" : "Ulik [] #Combat# ",
"ultron tierlist ultron" : "Ultron Mark 3 [Age of Ultron] #Universal# ",
"ulyssesklaue tierlist ulyssesklaue" : "Ulysses Klaue [] #Blast# #Support# ",
"valkyrie tierlist valkyrie" : "Valkyrie [] #Combat# #Support# ",
"venom tierlist venom" : "Venom [Anti-Venom] #Combat# #Buff# #Support# ",
"victorious tierlist victorious" : "Victorious [] #Universal# #PVE2##PVP1##Leader# ",
"vision tierlist vision" : "Vision [Age of Ultron] #Universal# ",
"volstagg tierlist volstagg" : "Volstagg [] #Combat# #Support# ",
"vulture tierlist vulture" : "Vulture [Homecoming] #Speed# ",
"warmachine tierlist warmachine" : "War Machine [Endgame] #Blast# #Synergy#",
"warwolf tierlist warwolf" : "Warwolf [] #Combat# #Buff# #Support# #Leader# ",
"wasp tierlist wasp" : "Wasp [Ant-Man and the Wasp] #Blast# #Support# #Leader# ",
"weaponhex tierlist weaponhex" : "Weapon Hex [] #Blast# #Support# ",
"whiplash tierlist whiplash" : "Whiplash [] #Blast# ",
"whitefox tierlist whitefox" : "White Fox [] #Speed# #Support# ",
"whitetiger tierlist whitetiger" : "White Tiger [] #Combat# ",
"wiccan tierlist wiccan" : "Wiccan [] #Blast# #Buff# #Leader# ",
"wintersoldier tierlist wintersoldier" : "Winter Soldier [Infinity War] #Speed# ",
"wolverine-t2 tierlist wolverine-t2" : "Wolverine [X-Force] #Combat# #PVE2##PVP2#",
"wolverine-t3 tierlist wolverine-t3" : "Wolverine [X-Force] #Combat# #PVE3##PVP3#",
"wong tierlist wong" : "Wong [Doctor Strange] #Speed# ",
"x23 tierlist x23" : "X-23 [X-Force] #Speed# ",
"yellowjacket tierlist yellowjacket" : "Yellow Jacket [Now] #Blast# ",
"yondu tierlist yondu" : "Yondu [Guardians of the Galaxy 2] #Speed# ",
"nickfury tierlist nickfury" : "Nick Fury [Captain Marvel] #Speed# #PVE2##PVP4##Buff# #Support# #Leader# ",
"minnerva-t2 tierlist minnerva-t2" : "Minn-Erva [Captain Marvel] #Combat# #PVE4##PVP1#",
"minnerva-t3 tierlist minnerva-t3" : "Minn-Erva [Captain Marvel] #Combat# #PVE4##PVP1#",
"korath tierlist korath" : "Korath [] #Speed# ",
"juggernaut tierlist juggernaut" : "Juggernaut [] #Combat# ",
"warpath tierlist warpath" : "Warpath [] #Combat# ",
"sabretooth tierlist sabretooth" : "Sabretooth [] #Combat# ",
"rescue tierlist rescue" : "Rescue [] #Blast# ",
"jubilee tierlist jubilee" : "Jubilee [] #Blast# ",
"iceman tierlist iceman" : "Iceman [] #Blast# ",
"bishop tierlist bishop" : "Bishop [] #Blast# ",
"moltenman tierlist moltenman" : "Molten Man [] #Combat# ",
"hydroman tierlist hydroman" : "Hydro-Man [] #Blast# ",
"electro tierlist electro" : "Electro [] #Speed# #Leader# ",
"namor-t2 tierlist namor-t2" : "Namor [] #Combat# #PVE4##PVP1#",
"namor-t3 tierlist namor-t3" : "Namor [] #Combat# #PVE5##PVP1#",
"wave tierlist wave" : "Wave [] #Speed# #Support# ",
"silversurfer-t2 tierlist silversurfer-t2" : "Silver Surfer [] #Universal# #PVE4##PVP4##Leader# ",
"silversurfer-t3 tierlist silversurfer-t3" : "Silver Surfer [] #Universal# #PVE4##PVP4##Leader# ",
"rachelsummers tierlist rachelsummers" : "Rachel Summers [] #Blast# ",
"kittypryde tierlist kittypryde" : "Kitty Pryde [] #Speed# #Leader# ",
"kidomega tierlist kidomega" : "Kid Omega [] #Blast# #Leader# ",








};
