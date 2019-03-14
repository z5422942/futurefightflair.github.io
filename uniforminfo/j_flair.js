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





"Agent1301 uniform sharon1" : "Agent 13 [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Agent#",
"AgentVenom01 uniform agentvenom1" : "Agent Venom [Agent Anti-Venom] #Super Hero# #Hero# #Combat# #Male# #Human# #Symbiote# #Leadership# #Agent# #Potential#",
"AncientOne01 uniform ancient1" : "Ancient One [Marvel's Doctor Strange] #Super Hero# #Hero# #Blast# #Female# #Human# #MCU# #Leadership# #Magic# #Support#",
"Angel01 uniform angel1" : "Archangel [X-Force] #Super Hero# #Hero# #Speed# #Male# #Mutant# #X-Force# #Leadership# #Fast Movement# #Support# #Potential#",
"Angela01 uniform angela1" : "Angela [Secret Wars: 1602 Witch Hunter Angela] #Super Hero# #Hero# #Universal# #Female# #Alien# #Weapons Master#",
"Angela02 uniform angela2" : "Angela [All-New, All-Different] #Super Hero# #Hero# #Universal# #Female# #Alien# #Weapons Master#",
"Antman01 uniform ant1" : "Ant-Man [Marvel's Ant-Man] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Agility# #Potential# #Tier3#",
"Antman02 uniform ant2" : "Ant-Man [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Agility# #Potential# #Tier3#",
"Antman03 uniform ant3" : "Ant-Man [Marvel's Ant-Man and the Wasp] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Agility# #Potential# #Tier3#",
"BaronMordo01 uniform mordo1" : "Mordo [Marvel's Doctor Strange] #Super Villain# #Villain# #Speed# #Male# #Human# #MCU# #Heightened Senses# #Agility#",
"Beast01 uniform beast1" : "Beast [Age of Apocalypse] #Super Villain# #Villain# #Combat# #Male# #Mutant# #Agility# #Strong# #Support#",
"BlackBolt01 uniform bolt1" : "Black Bolt [All-New, All-Different] #Super Hero# #Hero#  #Universal# #Male# #Inhuman# #Energy Projection# #Fast Movement#",
"BlackBolt02 uniform bolt2" : "Black Bolt [Inhumans: Attilan Rising] #Super Hero# #Hero#  #Universal# #Male# #Inhuman# #Energy Projection# #Fast Movement#",
"BlackCat01 uniform cat1" : "Black Cat [Claws] #Super Villain# #Villain# #Speed# #Female# #Human# #Agility#",
"BlackCat02 uniform cat2" : "Black Cat [All-New, All-Different] #Super Villain# #Villain# #Speed# #Female# #Human# #Agility#",
"BlackDwarf01 uniform dwarf1" : "Cull Obsidian [Marvel's Avengers: Infinity War] #Super Villain# #Villain# #Universal# #Male# #Human# #MCU# #Black Order# #Durability# #Strong# #Potential#",
"BlackPanther01 uniform panther1" : "Black Panther [Captain America: Civil War] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Command# #Agility# #Potential# #Tier3#",
"BlackPanther02 uniform panther2" : "Black Panther [Marvel's Black Panther] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Command# #Agility# #Potential# #Tier3#",
"BlackWidow01 uniform widow1" : "Black Widow [Avengers: Age of Ultron] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Avengers# #Agent# #Agility# #Potential#",
"BlackWidow02 uniform widow2" : "Black Widow [Secret Wars: 2099] #Super Hero# #Hero# #Speed# #Female# #Human# #Avengers# #Agent# #Agility# #Potential#",
"BlackWidow03 uniform widow3" : "Black Widow [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Avengers# #Agent# #Agility# #Potential#",
"BlackWidow04 uniform widow4" : "Black Widow [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Avengers# #Agent# #Agility# #Potential#",
"Blade01 uniform blade1" : "Blade [70's Classic] #Super Hero# #Hero# #Combat# #Male# #Human# #Weapons Master# #Healing#",
"Bullseye01 uniform bullseye1" : "Bullseye [Secret Wars: 1872] #Super Villain# #Villain# #Combat# #Male# #Human# #Pure Evil# #Weapons Master#",
"Cable01 uniform cable1" : "Cable [X-Force] #Super Hero# #Hero# #Blast# #Male# #Mutant# #X-Force# #Leadership# #Weapons Master# #Potential#",
"CaptainAmerica01 uniform cap1" : "Captain America [Avengers: Age of Ultron] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Avengers# #Command# #Leadership# #Potential# #Tier3#",
"CaptainAmerica02 uniform cap2" : "Captain America [Secret Wars: 2099] #Super Hero# #Hero# #Combat# #Female# #Human# #Command# #Leadership# #Potential# #Tier3#",
"CaptainAmerica03 uniform cap3" : "Captain America [Captain America: The Winter Soldier] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Avengers# #Command# #Leadership# #Potential# #Tier3#",
"CaptainAmerica04 uniform cap4" : "Captain America [Captain America: Civil War] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Avengers# #Command# #Leadership# #Potential# #Tier3#",
"CaptainAmerica05 uniform cap5" : "Captain America [Marvel NOW!] #Super Hero# #Hero# #Combat# #Male# #Human# #Command# #Leadership# #Potential# #Tier3#",
"CaptainAmerica06 uniform cap6" : "Captain America [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Avengers# #Command# #Leadership# #Potential# #Tier3#",
"CaptainAmericaSharonRogers01 uniform sharonrogers1" : "Captain America (Sharon Rogers) [Starlight Armor] #Super Hero# #Hero# #Blast# #Female# #Human# #Original# #Energy Projection# #Leadership# #Potential# #Tier3#",
"CaptainAmericaSharonRogers02 uniform sharonrogers2" : "Captain America (Sharon Rogers) [Dark Star Armor] #Super Hero# #Hero# #Blast# #Female# #Human# #Original# #Energy Projection# #Leadership# #Potential# #Tier3#",
"CaptainMarvel01 uniform danvers1" : "Captain Marvel [Secret Wars: Captain Marvel & The Carol Corps] #Super Hero# #Hero# #Universal# #Female# #Human# #Energy Projection# #Fast Movement# #Leadership#",
"CaptainMarvel02 uniform danvers2" : "Captain Marvel [Ms. Marvel] #Super Hero# #Hero# #Universal# #Female# #Human# #Energy Projection# #Fast Movement# #Leadership#",
"CaptainMarvel03 uniform danvers3" : "Captain Marvel [Captain Marvel] #Super Hero# #Hero# #Universal# #Female# #Human# #MCU# #Energy Projection# #Fast Movement# #Leadership# #Potential# #Tier3# #New#",
"Colossus01 uniform colossus1" : "Colossus [X-Force] #Super Hero# #Hero# #Combat# #Male# #Mutant# #X-Force# #Leadership# #Strong# #Support# #Potential#",
"CorvusGlaive01 uniform corvus1" : "Corvus Glaive [Marvel's Avengers: Infinity War] #Super Villain# #Villain# #Universal# #Male# #Alien# #MCU# #Black Order# #Fast Movement# #Agility# #Potential#",
"Crossbones01 uniform crossbones1" : "Crossbones [Modern] #Super Villain# #Villain# #Combat# #Male# #Human# #Weapons Master#",
"Crystal01 uniform crystal1" : "Crystal [Royal Suit] #Super Hero# #Hero#  #Blast# #Female# #Inhuman# #Energy Projection# #Command# #Potential#",
"Crystal02 uniform crystal2" : "Crystal [Fantastic Four] #Super Hero# #Hero#  #Blast# #Female# #Inhuman# #Fantastic Four# #Energy Projection# #Command# #Potential#",
"Cyclops01 uniform cyclops1" : "Cyclops [Age of Apocalypse] #Super Villain# #Villain# #Blast# #Male# #Mutant# #Command# #Energy Projection# #Support#",
"Cyclops02 uniform cyclops2" : "Cyclops [Marvel NOW!] #Super Hero# #Hero# #Blast# #Male# #Mutant# #X-Men# #Command# #Energy Projection# #Support#",
"DaisyJohnson01 uniform daisy1" : "Quake [Modern] #Super Hero# #Hero# #Blast# #Female# #Inhuman# #Shield# #Agent# #Mind Resist# #Support#",
"DaisyJohnson02 uniform daisy2" : "Daisy Johnson [Marvel's Agents of S.H.I.E.L.D. (Quake] #Super Hero# #Hero# #Blast# #Female# #Inhuman# #MCU# #Shield# #Agent# #Mind Resist# #Support#",
"Daredevil01 uniform devil1" : "Daredevil [Devil of Hell's Kitchen] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Defenders# #Leadership# #Heightened Senses# #Agility#",
"Daredevil02 uniform devil2" : "Daredevil [All-New, All-Different] #Super Hero# #Hero# #Speed# #Male# #Human# #Defenders# #Leadership# #Heightened Senses# #Agility#",
"Deadpool01 uniform deadpool1" : "Deadpool [X-Force] #Super Hero# #Hero# #Speed# #Male# #Mutant# #X-Force# #Healing# #Weapons Master# #Potential# #Tier3# #New#",
"Deathlok01 uniform deathlok1" : "Deathlok [Modern] #Super Hero# #Hero# #Blast# #Male# #Human# #Shield# #Agent# #Machine#",
"Destroyer01 uniform destroyer1" : "Destroyer [Prometheus] #Neutral# #Universal# #Genderless# #Creature# #Asgard# #Flame#",
"DoctorOctopus01 uniform ock1" : "Doctor Octopus [Superior Spider-Man] #Super Hero# #Hero# #Combat# #Male# #Human# #Spidey# #Agility# #Machine# #Spider-Sense#",
"DoctorStrange01 uniform strange1" : "Doctor Strange [Marvel's Doctor Strange] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Fast Movement# #Magic# #Potential#",
"DoctorStrange02 uniform strange2" : "Doctor Strange [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Avengers# #Fast Movement# #Magic# #Potential#",
"Drax01 uniform drax1" : "Drax [All-New, All-Different] #Super Hero# #Hero# #Combat# #Male# #Alien# #Guardians# #Healing#",
"EbonyMaw01 uniform maw1" : "Ebony Maw [Marvel's Avengers: Infinity War] #Super Villain# #Villain# #Universal# #Male# #Alien# #MCU# #Black Order# #Fast Movement# #Mind Resist# #Pure Evil# #Support# #Potential#",
"Elektra01 uniform elektra1" : "Elektra [Marvel's Daredevil] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Defenders# #Weapons Master#",
"ElsaBloodstone01 uniform elsa1" : "Elsa Bloodstone [Secret Wars: Marvel Zombies] #Super Hero# #Hero# #Speed# #Female# #Human# #Weapons Master#",
"ElsaBloodstone02 uniform elsa2" : "Elsa Bloodstone [Monsters Unleashed! (MFF Variant)] #Super Hero# #Hero# #Speed# #Female# #Human# #Weapons Master#",
"EmmaFrost01 uniform emma1" : "Emma Frost [Marvel NOW!] #Super Hero# #Hero# #Blast# #Female# #Mutant# #Durability# #Mind Resist# #Potential#",
"Falcon01 uniform falcon1" : "Falcon [All-New Captain America] #Super Hero# #Hero# #Speed# #Male# #Human# #Leadership# #Fast Movement#",
"Falcon02 uniform falcon2" : "Falcon [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Leadership# #Fast Movement#",
"Falcon03 uniform falcon3" : "Falcon [Marvel Legacy] #Super Hero# #Hero# #Speed# #Male# #Human# #Leadership# #Fast Movement#",
"Gamora01 uniform gamora1" : "Gamora [All-New, All-Different] #Super Hero# #Hero# #Speed# #Female# #Alien# #Guardians# #Agility# #Weapons Master#",
"Gamora02 uniform gamora2" : "Gamora [Guardians of the Galaxy 2] #Super Hero# #Hero# #Speed# #Female# #Alien# #MCU# #Guardians# #Agility# #Weapons Master#",
"Ghost01 uniform ghost1" : "Ghost [Marvel's Ant-Man and the Wasp] #Super Villain# #Villain# #Speed# #Female# #Human# #MCU# #Machine# #Weapons Master# #Support# #Potential#",
"GhostRider01 uniform rider1" : "Ghost Rider [70's Classic] #Super Hero# #Hero# #Universal# #Male# #Human# #Flame# #Leadership#",
"GhostRider02 uniform rider2" : "Ghost Rider [Inhumans: Attilan Rising] #Super Hero# #Hero# #Universal# #Male# #Human# #Flame# #Leadership#",
"GiantMan01 uniform giant1" : "Goliath [Modern] #Super Hero# #Hero# #Combat# #Male# #Human# #Strong# #Potential#",
"GiantMan02 uniform giant2" : "Giant-Man [Ultron Pym] #Super Villain# #Villain# #Universal# #Male# #Human# #Strong# #Potential#",
"GreenGoblin01 uniform goblin1" : "Green Goblin [Ultimate] #Super Villain# #Villain# #Combat# #Male# #Human# #Sinister Six# #Fast Movement# #Flame#",
"Groot01 uniform groot1" : "Groot [Secret Wars: Thors] #Super Hero# #Hero# #Universal# #Male# #Alien# #Guardians# #Healing# #Support# #Potential#",
"Groot02 uniform groot2" : "Groot [Guardians of the Galaxy 2] #Super Hero# #Hero# #Speed# #Male# #Alien# #MCU# #Guardians# #Healing# #Support# #Potential#",
"Groot03 uniform groot3" : "Groot [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Combat# #Male# #Alien# #MCU# #Avengers# #Guardians# #Healing# #Support# #Potential#",
"Gwenpool01 uniform gwenpool1" : "Gwenpool [Gwen Poole] #Super Hero# #Hero# #Speed# #Female# #Human# #Agility#",
"Hawkeye01 uniform hawkeye1" : "Hawkeye [Avengers: Age of Ultron] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Avengers# #Agent# #Weapons Master#",
"Hawkeye02 uniform hawkeye2" : "Hawkeye [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Avengers# #Agent# #Weapons Master#",
"Hawkeye03 uniform hawkeye3" : "Hawkeye [Classic] #Super Hero# #Hero# #Speed# #Male# #Human# #Avengers# #Agent# #Weapons Master#",
"Hela01 uniform hela1" : "Hela [Marvel's Thor: Ragnarok] #Super Villain# #Villain# #Universal# #Female# #Alien# #MCU# #Asgard# #Pure Evil# #Command# #Support#",
"Hulk01 uniform hulk1" : "Hulk [Secret Wars: Future Imperfect] #Super Hero# #Hero# #Combat# #Male# #Human# #Durability# #Strong#",
"Hulk02 uniform hulk2" : "Hulk [World War Hulk] #Super Hero# #Hero# #Combat# #Male# #Human# #Durability# #Strong#",
"Hulk03 uniform hulk3" : "Hulk [Marvel's Thor: Ragnarok] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Avengers# #Durability# #Strong#",
"HulkAmadeusCho01 uniform cho1" : "Hulk (Amadeus Cho) [Monsters Unleashed! (MFF Variant)] #Super Hero# #Hero# #Combat# #Male# #Human# #Durability# #Strong#",
"Hulkbuster01 uniform hb1" : "Hulkbuster (Iron Mark Mark 43) [Heavy Duty Armor] #Super Hero# #Hero# #Combat# #Male# #Creature# #Avengers# #Machine# #Strong#",
"Hulkbuster02 uniform hb2" : "Hulkbuster 2.0 [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Combat# #Male# #Creature# #MCU# #Avengers# #Machine# #Strong#",
"Hyperion01 uniform hyperion1" : "Hyperion [Classic] #Super Hero# #Hero# #Universal# #Male# #Alien# #Energy Projection# #Leadership# #Potential#",
"Inferno01 uniform inferno1" : "Inferno [Modern] #Super Hero# #Hero#  #Blast# #Male# #Inhuman# #Flame#",
"IronFist01 uniform fist1" : "Iron Fist [New Avengers] #Super Hero# #Hero# #Combat# #Male# #Human# #Defenders# #Healing# #Agility#",
"IronFist02 uniform fist2" : "Iron Fist [All-New, All-Different] #Super Hero# #Hero# #Combat# #Male# #Human# #Defenders# #Healing# #Agility#",
"IronFist03 uniform fist3" : "Iron Fist [Marvel's Iron Fist] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Defenders# #Healing# #Agility#",
"IronMan01 uniform im1" : "Iron Man [Avengers: Age of Ultron] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Avengers# #Energy Projection# #Machine# #Potential# #Tier3#",
"IronMan02 uniform im2" : "Iron Man [Secret Wars: 2099] #Super Hero# #Hero# #Blast# #Male# #Human# #Energy Projection# #Machine# #Potential# #Tier3#",
"IronMan03 uniform im3" : "Iron Man [Captain America: Civil War] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Avengers# #Energy Projection# #Machine# #Potential# #Tier3#",
"IronMan04 uniform im4" : "Iron Man [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Avengers# #Energy Projection# #Machine# #Potential# #Tier3#",
"Karnak01 uniform karnak1" : "Karnak [All-New, All-Different] #Super Hero# #Hero#  #Speed# #Male# #Inhuman# #Heightened Senses#",
"KidKaiju01 uniform kaiju1" : "Kid Kaiju [Monsters Unleashed! (MFF Variant)] #Super Hero# #Hero# #Speed# #Male# #Inhuman# #Command# #Support#",
"Killmonger01 uniform killmonger1" : "Erik Killmonger [Black Panther] #Super Villain# #Villain# #Combat# #Male# #Human# #MCU# #Command# #Strong#",
"Kingpin01 uniform kingpin1" : "Kingpin [Secret Wars: Armor Wars] #Super Villain# #Villain# #Blast# #Male# #Human# #Command# #Strong# #Machine#",
"Lash01 uniform lash1" : "Lash [Modern] #Super Villain# #Villain#  #Blast# #Male# #Inhuman# #Energy Projection#",
"Loki01 uniform loki1" : "Loki [Lady Loki] #Super Villain# #Villain# #Universal# #Female# #Alien# #Asgard# #Chill# #Mind#",
"Loki02 uniform loki2" : "Loki [Marvel's Thor: Ragnarok] #Super Villain# #Villain# #Universal# #Male# #Alien# #MCU# #Asgard# #Chill# #Mind#",
"Loki03 uniform loki3" : "Loki [Classic] #Super Villain# #Villain# #Universal# #Male# #Alien# #Asgard# #Chill# #Mind#",
"LukeCage01 uniform luke1" : "Luke Cage [All-New, All-Different] #Super Hero# #Hero# #Combat# #Male# #Human# #Defenders# #Durability# #Strong#",
"LukeCage02 uniform luke2" : "Luke Cage [Marvel's Luke Cage] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Defenders# #Durability# #Strong#",
"LunaSnow01 uniform luna1" : "Luna Snow [Andromeda Suit] #Super Hero# #Hero# #Speed# #Female# #Human# #Cold Blooded# #Leadership# #Support# #Potential# #Tier3#",
"M.O.D.O.K.01 uniform modok1" : "M.O.D.O.K. [SPIDOC] #Super Villain# #Villain# #Blast# #Male# #Human# #Spidey# #Pure Evil# #Machine# #Mind#",
"M.O.D.O.K.02 uniform modok2" : "M.O.D.O.K. [CAPDOC] #Super Villain# #Villain# #Blast# #Male# #Human# #Pure Evil# #Machine# #Mind#",
"Magneto01 uniform magneto1" : "Magneto [Marvel NOW!] #Super Villain# #Villain# #Blast# #Male# #Mutant# #Brotherhood# #Mind Resist# #Energy Projection #Potential# #Tier3#",
"Malekith01 uniform malekith1" : "Malekith [All-New, All-Different] #Super Villain# #Villain# #Blast# #Male# #Alien# #Asgard# #Pure Evil#",
"Medusa01 uniform medusa1" : "Medusa [Monsters Unleashed! (MFF Variant)] #Super Hero# #Hero#  #Universal# #Female# #Inhuman# #Command# #Potential#",
"Minn-Erva01 uniform erva1" : "Minn-Erva [Captain Marvel] #Super Villain# #Villain# #Combat# #Female# #Alien# #MCU# #Pure Evil# #Durability# #Strong# #Potential# #New#",
"Mockingbird01 uniform mockingbird1" : "Bobbi Morse [Marvel's Agents of S.H.I.E.L.D.] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Shield# #Agent# #Agility#",
"Mockingbird02 uniform mockingbird2" : "Mockingbird [All-New, All-Different] #Super Hero# #Hero# #Speed# #Female# #Human# #Shield# #Agent# #Agility#",
"MoonGirl01 uniform moongirl1" : "Moon Girl [Monsters Unleashed!] #Super Hero# #Hero#  #Blast# #Female# #Inhuman# #Leadership# #Weapons Master# #Potential#",
"MoonKnight01 uniform moonknight1" : "Moon Knight [Armored] #Super Hero# #Hero# #Combat# #Male# #Human# #Leadership# #Weapons Master#",
"MsMarvelKamalaKhan01 uniform kamala1" : "Ms. Marvel (Kamala Khan) [Karachi Costume] #Super Hero# #Hero# #Speed# #Female# #Inhuman# #Healing# #Strong#",
"Nebula01 uniform nebula1" : "Nebula [Classic] #Super Villain# #Villain# #Combat# #Female# #Alien# #Weapons Master# #Shock#",
"NickFury01 uniform fury1" : "Nick Fury [Captain America] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Shield# #Weapons Master# #Leadership# #Agent# #Support# #Potential# #New#",
"Nightcrawler01 uniform nightcrawler1" : "Nightcrawler [X-Force] #Super Hero# #Hero# #Speed# #Male# #Mutant# #X-Force# #Leadership# #Agility# #Potential# #New#",
"PhilCoulson01 uniform coulson1" : "Phil Coulson [A.O.S. Season 3] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Shield# #Agent# #Command# #Support#",
"ProximaMidnight01 uniform proxima1" : "Proxima Midnight [Marvel's Avengers: Infinity War] #Super Villain# #Villain# #Universal# #Female# #Alien# #MCU# #Black Order# #Fast Movement# #Agility#",
"Punisher01 uniform punisher1" : "Punisher [Noir] #Super Hero# #Hero# #Combat# #Male# #Human# #Defenders# #Weapons Master# #Leadership#",
"Punisher02 uniform punisher2" : "Punisher [War Journal] #Super Hero# #Hero# #Combat# #Male# #Human# #Defenders# #Weapons Master# #Leadership#",
"Punisher03 uniform punisher3" : "Punisher [Marvel's Daredevil] #Super Hero# #Hero# #Combat# #Male# #Human# #MCU# #Defenders# #Weapons Master# #Leadership#",
"Punisher04 uniform punisher4" : "Punisher [Marvel Legacy] #Super Hero# #Hero# #Combat# #Male# #Human# #Defenders# #Leadership# #Weapons Master# #Machine#",
"Quicksilver01 uniform quicksilver1" : "Quicksilver [Marvel Legacy] #Super Hero# #Hero# #Speed# #Male# #Other# #Agility# #Fast Movement#",
"RedHulk01 uniform rulk1" : "Red Hulk [Marvel NOW!] #Super Hero# #Hero# #Combat# #Male# #Human# #Flame# #Durability#",
"RedSkull01 uniform skull1" : "Red Skull [Secret Wars: Red Skull] #Super Villain# #Villain# #Speed# #Male# #Human# #Command# #Pure Evil#",
"RocketRaccoon01 uniform rocket1" : "Rocket Raccoon [All-New, All-Different] #Super Hero# #Hero# #Blast# #Male# #Alien# #Guardians# #Weapons Master# #Potential#",
"RocketRaccoon02 uniform rocket2" : "Rocket Raccoon [Guardians of the Galaxy 2] #Super Hero# #Hero# #Blast# #Male# #Alien# #MCU# #Guardians# #Weapons Master# #Potential#",
"RocketRaccoon03 uniform rocket3" : "Rocket Raccoon [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Blast# #Male# #Alien# #MCU# #Avengers# #Guardians# #Weapons Master# #Potential#",
"Rogue01 uniform rogue1" : "Rogue [Age of Apocalypse] #Super Hero# #Hero# #Speed# #Female# #Mutant# #X-Men# #Fast Movement# #Healing#",
"Ronan01 uniform ronan1" : "Ronan [Annihilation] #Super Villain# #Villain# #Universal# #Male# #Alien# #Guardians# #Command# #Mind Resist# #Support#",
"Ronan02 uniform ronan2" : "Ronan [Captain Marvel] #Super Villain# #Villain# #Universal# #Male# #Alien# #MCU# #Guardians# #Command# #Mind Resist# #Support# #Potential# #New#",
"Satana01 uniform satana1" : "Satana [Marvel Legacy] #Super Hero# #Hero# #Universal# #Female# #Human# #Flame# #Magic#",
"ScarletWitch01 uniform scarletwitch1" : "Scarlet Witch [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Blast# #Female# #Other# #MCU# #Avengers# #Fast Movement# #Chaos Magic# #Potential#",
"SheHulk01 uniform shulk1" : "She-Hulk [All-New] #Super Hero# #Hero# #Combat# #Female# #Human# #Durability# #Strong# #Potential#",
"SheHulk02 uniform shulk2" : "She-Hulk [Fantastic Four] #Super Hero# #Hero# #Combat# #Female# #Human# #Fantastic Four# #Durability# #Strong# #Potential#",
"Shuri01 uniform shuri1" : "Shuri [Marvel's Black Panther] #Super Hero# #Hero# #Speed# #Female# #Human# #MCU# #Leadership# #Heightened Senses# #Support#",
"Sif01 uniform sif1" : "Sif [Modern] #Super Hero# #Hero# #Combat# #Female# #Alien# #Asgard# #Agility#",
"Silk01 uniform silk1" : "Silk [Web Suit] #Super Hero# #Hero# #Speed# #Female# #Human# #Spidey# #Agility# #Spider-Sense#",
"SisterGrimm01 uniform grimm1" : "Sister Grimm [All-New, All-Different] #Super Hero# #Hero# #Blast# #Female# #Human# #Magic#",
"SpiderGwen01 uniform gwen1" : "Spider-Gwen [Gwendolyne Stacy] #Super Hero# #Hero# #Speed# #Female# #Human# #Spidey# #Leadership# #Agility# #Spider-Sense#",
"SpiderMan01 uniform spidey1" : "Spider-Man [Secret Wars: Renew Your Vows] #Super Hero# #Hero# #Speed# #Male# #Human# #Spidey# #Agility# #Leadership# #Spider-Sense# #Potential# #Tier3#",
"SpiderMan02 uniform spidey2" : "Spider-Man [All-New, All-Different] #Super Hero# #Hero# #Speed# #Male# #Human# #Spidey# #Agility# #Leadership# #Spider-Sense# #Potential# #Tier3#",
"SpiderMan03 uniform spidey3" : "Spider-Man [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Spidey# #Agility# #Leadership# #Spider-Sense# #Potential# #Tier3#",
"SpiderMan04 uniform spidey4" : "Spider-Man [Spider-Man: Homecoming Homemade Suit] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Spidey# #Agility# #Leadership# #Spider-Sense# #Potential# #Tier3#",
"SpiderMan05 uniform spidey5" : "Spider-Man [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Spidey# #Avengers# #Agility# #Leadership# #Spider-Sense# #Potential# #Tier3#",
"SpiderManMilesMorales01 uniform miles1" : "Spider-Man (Miles Morales) [Into The Spider-Verse] #Super Hero# #Hero# #Speed# #Male# #Human# #Spidey# #Leadership# #Agility# #Spider-Sense# #Potential#",
"SquirrelGirl01 uniform squirrel1" : "Squirrel Girl [Marvel NOW!] #Super Hero# #Hero# #Speed# #Female# #Human# #Agility#",
"StarLord01 uniform star1" : "Star-Lord [Space Armor] #Super Hero# #Hero# #Blast# #Male# #Alien# #Guardians# #Command# #Weapons Master# #Potential#",
"StarLord02 uniform star2" : "Star-Lord [Guardians of the Galaxy 2] #Super Hero# #Hero# #Blast# #Male# #Alien# #MCU# #Guardians# #Command# #Weapons Master# #Potential#",
"StarLord03 uniform star3" : "Star-Lord [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Blast# #Male# #Alien# #MCU# #Avengers# #Guardians# #Command# #Weapons Master# #Potential#",
"Thanos01 uniform thanos1" : "Thanos [Secret Wars: Infinity] #Super Villain# #Villain# #Universal# #Male# #Alien# #Pure Evil# #Durability# #Strong# #Potential#",
"Thanos02 uniform thanos2" : "Thanos [Marvel's Avengers: Infinity War] #Super Villain# #Villain# #Universal# #Male# #Alien# #MCU# #Pure Evil# #Durability# #Strong# #Potential#",
"Thor01 uniform thor1" : "Thor [Avengers: Age of Ultron] #Super Hero# #Hero# #Universal# #Male# #Alien# #MCU# #Avengers# #Asgard# #Leadership# #Shock# #Potential# #Tier3#",
"Thor02 uniform thor2" : "Thor [Unworthy] #Super Hero# #Hero# #Universal# #Male# #Alien# #Asgard# #Leadership# #Shock# #Potential# #Tier3#",
"Thor03 uniform thor3" : "Thor [Marvel's Thor: Ragnarok] #Super Hero# #Hero# #Universal# #Male# #Alien# #MCU# #Avengers# #Asgard# #Leadership# #Shock# #Potential# #Tier3#",
"Thor04 uniform thor4" : "Thor [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Universal# #Male# #Alien# #MCU# #Avengers# #Asgard# #Leadership# #Shock# #Potential# #Tier3#",
"Ultron01 uniform ultron1" : "Ultron Prime [Avengers: Age of Ultron] #Super Villain# #Villain# #Universal# #Male# #Creature# #MCU# #Pure Evil# #Machine#",
"Ultron02 uniform ultron2" : "Ultron Mark 1 [Avengers: Age of Ultron] #Super Villain# #Villain# #Universal# #Male# #Creature# #MCU# #Pure Evil# #Machine#",
"Ultron03 uniform ultron3" : "Ultron Mark 3 [Avengers: Age of Ultron] #Super Villain# #Villain# #Universal# #Male# #Creature# #MCU# #Pure Evil# #Machine#",
"Venom01 uniform venom1" : "Venom [Secret Wars: Marvel Zombies] #Super Villain# #Villain# #Combat# #Male# #Human# #Symbiote# #Healing#",
"Venom02 uniform venom2" : "Venom [Anti-Venom] #Super Hero# #Hero# #Combat# #Male# #Human# #Symbiote# #Healing# #Support#",
"Vision01 uniform vision1" : "Vision [Avengers: Age of Ultron] #Super Hero# #Hero# #Universal# #Male# #Creature# #MCU# #Avengers# #Durability# #Fast Movement# #Machine#",
"Vulture01 uniform vulture1" : "Vulture [Spider-Man: Homecoming] #Super Villain# #Villain# #Speed# #Male# #Human# #MCU# #Sinister Six# #Agility# #Fast Movement#",
"WarMachine01 uniform wm1" : "War Machine [Iron Patriot] #Super Hero# #Hero# #Blast# #Male# #Human# #Avengers# #Leadership# #Machine# #Potential#",
"WarMachine02 uniform wm2" : "War Machine [Avengers: The Initiative] #Super Hero# #Hero# #Blast# #Male# #Human# #Avengers# #Leadership# #Machine# #Potential#",
"WarMachine03 uniform wm3" : "War Machine [Captain America: Civil War] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Avengers# #Leadership# #Machine# #Potential#",
"WarMachine04 uniform wm4" : "War Machine [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Blast# #Male# #Human# #MCU# #Avengers# #Leadership# #Machine# #Potential#",
"Wasp01 uniform wasp1" : "Wasp [All-New, All-Different] #Super Hero# #Hero# #Blast# #Female# #Human# #Fast Movement# #Support# #Potential#",
"Wasp02 uniform wasp2" : "Wasp [Marvel's Ant-Man and the Wasp] #Super Hero# #Hero# #Blast# #Female# #Human# #MCU# #Fast Movement# #Support# #Potential#",
"WinterSoldier01 uniform bucky1" : "Winter Soldier [Captain America: Civil War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Weapons Master# #Support# #Potential#",
"WinterSoldier02 uniform bucky2" : "Winter Soldier [Captain America] #Super Hero# #Hero# #Speed# #Male# #Human# #Weapons Master# #Support# #Potential#",
"WinterSoldier03 uniform bucky3" : "Winter Soldier [Marvel's Avengers: Infinity War] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Avengers# #Weapons Master# #Support# #Potential#",
"Wolverine01 uniform wolverine1" : "Wolverine [Age of Apocalypse] #Super Hero# #Hero# #Combat# #Male# #Mutant# #X-Men# #Healing# #Weapons Master#",
"Wolverine02 uniform wolverine2" : "Wolverine [All-New Marvel NOW!] #Super Hero# #Hero# #Combat# #Male# #Mutant# #X-Men# #Healing# #Weapons Master#",
"Wolverine03 uniform wolverine3" : "Wolverine [X-Force] #Super Hero# #Hero# #Combat# #Male# #Mutant# #X-Force# #Healing# #Weapons Master# #New#",
"Wong01 uniform wong1" : "Wong [Marvel's Doctor Strange] #Super Hero# #Hero# #Speed# #Male# #Human# #MCU# #Weapons Master#",
"X2301 uniform laura1" : "X-23 [X-Force] #Super Hero# #Hero# #Speed# #Female# #Mutant# #X-Force# #Healing# #Agility# #Potential#",
"Yellowjacket01 uniform yj1" : "Yellowjacket [Marvel NOW!] #Super Villain# #Villain# #Blast# #Male# #Human# #Machine# #Pure Evil#",
"Yondu01 uniform yondu1" : "Yondu [All-New, All-Different] #Super Hero# #Hero# #Speed# #Male# #Alien# #Weapons Master# #Command#",
"Yondu02 uniform yondu2" : "Yondu [Guardians of the Galaxy 2] #Super Hero# #Hero# #Speed# #Male# #Alien# #MCU# #Guardians# #Weapons Master# #Command#",

};