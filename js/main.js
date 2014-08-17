var GameNameMod = {};
(function() {

    var topicWords = {
        Airplane: {
            'nouns': ['Flight', 'Helicopter', 'Wings', 'Pacific', 'Plane'],
            'adjectives': ['Flying']
        },
        Aliens: {
            'nouns': ['Alien'],
            'adjectives': ['Xeno', 'Space']
        },
        'Alternate history': {
            'nouns': ['New World'],
            'adjectives': ['Steam', 'Past', 'Future', 'Alternative']
        },
        'Business': {
            'nouns': ['Cargo', 'Shop', 'Factory', 'Inc.', ],
            'adjectives': ['Trading', 'Shipping']
        },
        'City': {
            'nouns': ['City', 'Town', 'Mayor', 'Building', 'Architect'],
            'adjectives': ['Modern', 'Ancient']
        },
        'Comedy': {
            'nouns': ['Fun'],
            'adjectives': ['Funny', 'Hilarious']
        },
        'Cyberpunk': {
            'nouns': ['System', 'Transistor', 'Synapse'],
            'adjectives': ['Electric', 'Punk', 'Dystopian']
        },
        'Dance': {
            'nouns': ['Dance', 'Floor', 'Stage', 'Jump', 'Ballet'],
            'adjectives': ['Dancing', 'Moving']
        },
        'Detective': {
            'nouns': ['Inquiry', 'Investigator'],
            'adjectives': ['Mysterious']
        },
        'Dungeon': {
            'nouns': ['Dungeon', 'Cave', 'Labrinth'],
            'adjectives': ['Underground']
        },
        'Evolution': {
            'nouns': ['DNA', 'Clone', ],
            'adjectives': ['Genetic', 'Mutating']
        },
        'Fantasy': {
            'nouns': ['Knight', 'Mage', 'Beholder'],
            'adjectives': ['Mystic', 'Magic', ]
        },
        'Fashion': {
            'nouns': ['Fashion', 'Dress'],
            'adjectives': ['']
        },
        'Game Dev': {
            'nouns': ['Game'],
            'adjectives': ['']
        },
        'Government': {
            'nouns': ['Democracy', 'Despotism', 'Communist'],
            'adjectives': ['Anarchic']
        },
        'Hacking': {
            'nouns': ['Firewall', 'Bug', 'Code'],
            'adjectives': ['Hacking']
        },
        'History': {
            'nouns': ['Middle Ages', 'Egypt', ],
            'adjectives': ["Caesar's", ]
        },
        'Horror': {
            'nouns': ['Horror', 'Scream'],
            'adjectives': ['Horrific']
        },
        'Hospital': {
            'nouns': ['Hospital', 'Doctor', 'Nurse'],
            'adjectives': []
        },
        'Hunting': {
            'nouns': ['Hunt', 'Hunter'],
            'adjectives': ['Deer', 'Wood', 'Desert']
        },
        'Law': {
            'nouns': ['Law', 'Jury', 'Trial'],
            'adjectives': ['Criminal']
        },
        'Life': {
            'nouns': ['Life', 'Family'],
            'adjectives': ['']
        },
        'Martial Arts': {
            'nouns': ['Karate', 'Ju-jitsu', 'Tae-Kwon-Do', 'Boxing', 'Judo', 'Thai-boxe', 'Dojo'],
            'adjectives': ['Lethal', 'Furious', 'Final']
        },
        'Medieval': {
            'nouns': ['Castle', 'King', 'Princess', 'Prince', 'Queen'],
            'adjectives': ['']
        },
        'Military': {
            'nouns': ['Duty', 'Honor', 'War', 'Conflict', 'Hero', 'Glory', 'Stalingrad', 'Vietnam', 'Apocalypse'],
            'adjectives': ['Medal of', 'Bloody', 'Pacific', 'Desert',  ]
        },
        'Movies': {
            'nouns': ['Cinema', 'Movie', 'Star', 'Hollywood', 'Lumiere', ],
            'adjectives': ['']
        },
        'Music': {
            'nouns': ['Music', 'Rock', 'Metal', 'Band', 'Sound', 'Guitar', 'Drums', 'Piano', 'DJ'],
            'adjectives': ['']
        },
        'Mystery': {
            'nouns': ['Mysteries', 'Events'],
            'adjectives': ['Silent', 'Foggy', 'Unknown']
        },
        'Ninja': {
            'nouns': ['Ninja', 'Shinobi', 'Secret', 'Katana', 'Shuriken', 'Kunai', 'Seal'],
            'adjectives': ['Invisible', 'Hidden']
        },
        'Pirate': {
            'nouns': ['Pirate', 'Galeon', 'Treasure', 'Gold', 'Frigate', 'Admiral'],
            'adjectives': ['Caribbean', 'Cursed', ]
        },
        'Post Apocalyptic': {
            'nouns': ['Fallout', 'Winter', 'Waste', ],
            'adjectives': ['Nuclear']
        },
        'Prison': {
            'nouns': ['Alcatraz', 'Prisoner', 'Prison', 'Escape'],
            'adjectives': ['Framed']
        },
        'Racing': {
            'nouns': ['Car', 'Bike', 'Race'],
            'adjectives': ['Hi-speed', 'Fast', 'Furious']
        },
        'Romance': {
            'nouns': ['Love', 'Girlfriend', 'Boyfriend', 'Honey', 'Sugar'],
            'adjectives': ['Lovely']
        },
        'Rhythm': {
            'nouns': [],
            'adjectives': []
        },
        'Sci-Fi': {
            'nouns': [],
            'adjectives': []
        },
        'School': {
            'nouns': [],
            'adjectives': []
        },
        'Space': {
            'nouns': [],
            'adjectives': []
        },
        'Sports': {
            'nouns': [],
            'adjectives': []
        },
        'Spy': {
            'nouns': [],
            'adjectives': []
        },
        'Startups': {
            'nouns': [],
            'adjectives': []
        },
        'Superheroes': {
            'nouns': ['Man', 'Woman', 'Boy', 'Girl', 'Men', 'Women', 'Boys', 'Girls', 'Child', 'Children', ],
            'adjectives': ['Super', 'Y-', 'Wonder', 'Hyper', 'Rat', 'Dog', 'Cat', 'Lizard', 'Mermaid', 'Shark']
        },
        'Surgery': {
            'nouns': ['Surgeon', 'Nurse', 'Doctor'],
            'adjectives': []
        },
        'Time Travel': {
            'nouns': ['Timeshift'],
            'adjectives': ['Chrono']
        },
        'Transport': {
            'nouns': ['Transport', 'Railroad', 'Ship'],
            'adjectives': []
        },
        'UFO': {
            'nouns': ['UFO', 'Space', 'Invasion', ],
            'adjectives': ['Alien']
        },
        'Vampire': {
            'nouns': ['Dracula', 'Vampire', 'Transilvania'],
            'adjectives': ['Bloody']
        },
        'Virtual Pet': {
            'nouns': ['Pet'],
            'adjectives': []
        },
        'Vocabulary': {
            'nouns': ['Word', 'Letter', 'Alphabet', 'Grammar', 'Anagram', 'Crossword', 'Puzzle', 'Dictionary'],
            'adjectives': ['Mispelled', 'Scrambled']
        },
        'Werewolf': {
            'nouns': ['Werewolf', 'Lycanthrope', 'Wolf Man', 'Full Moon'],
            'adjectives': ['Hideous', 'Cursed']
        },
        'Wild West': {
            'nouns': ['West', 'Cowboy', 'Sheriff', 'Revolver', 'Apache', 'Sioux', 'Comanche', 'Buffalo', 'Guns', 'Saloon', 'Geronimo', 'Ranch', 'Poker', 'Outlaw', 'Trail'],
            'adjectives': ['Wild', 'Old', 'Indian', 'Wanted', 'Texas']
        },

        'Zombies': {
            'nouns': ['Zombie', 'Darkness', 'Hunger', 'Graveyard', 'Cemetery', 'Night', 'Flesh', 'Horror', 'Bite', 'Nightmare', 'Plague', 'Quarantine' ],
            'adjectives': ['Undead', 'Dead', 'Deadly', 'Living', 'Decaying' ]
        }
    };

    var genreWords = {
        'Action': {
            'nouns': ['Action', 'Run', 'Theft', 'Shooter', 'Massacre'],
            'adjectives': []
        },
        'Adventure': {
            'nouns': ['Adventure', 'Tales', 'Story'],
            'adjectives': ['Mysterious']
        },
        'RPG': {
            'nouns': ['Scrolls'],
            'adjectives': []
        },
        'Simulation': {
            'nouns': ['Simulator', 'Manager', 'Tycoon'],
            'adjectives': []
        },
        'Strategy': {
            'nouns': ['Campaign', 'Siege'],
            'adjectives': ['Strategic']
        },
        'Casual': {
            'nouns': ['Party'],
            'adjectives': ['Family', 'Sugar', 'Candy']
        }
    };

    var self = this;

    var randInt = function(max) {
        return Math.floor(Math.random() * max);
    };

    var randElement = function(items) {
        return items[randInt(items.length)];
    };

    var randomTopicAdjective = function(topics) {
        var topic = randElement(topics);
        if (!topicWords[topic] || Math.random() < 0.2)
            return null;
        return randElement(topicWords[topic].adjectives);
    };

    var randomTopicNoun = function(topics) {
        var topic = randElement(topics);
        if (!topicWords[topic])
            return null;
        return randElement(topicWords[topic].nouns);
    };

    var randomGenreNoun = function(genres) {
        var genre = randElement(genres);
        if (!genreWords[genre])
            return null;
        return randElement(genreWords[genre].nouns);
    };
    
    var removeEmpty = function(array) {
        var result = [];
        for (var i=0; i<array.length; ++i) {
            if (array[i] !== null && array[i].trim() !== '')
                result.push(array[i]);
        }
        return result;
    };

    var makeRandomGameName = function(topics, genres, platform) {
        if (topics === [] || genres === []) {
            return null;
        }
        var words = [randomTopicAdjective(topics), randomTopicNoun(topics), randomGenreNoun(genres)];
        words = removeEmpty(words);
        var title = words.join(' ').trim();
        if (title == '')
            return null;
        return title;
    };



    var selectedTopic;
    var selectedPlatform;
    var selectedGenre;
    var updateTitle;

    var updateGameTitle = function(currentGame, title) {
        if (!updateTitle)
            return;
        currentGame.title = title;
        $('.simplemodal-data').find('#gameTitle').attr('value', title);
    };

    var makeSequelTitle = function(parent) {
        var tokens = parent.title.strip().split(' ');
        var last = tokens.last().strip();
        if (last == '' || isNaN(last)) {
            tokens.push("2");
        } else {
            var n = parseInt(tokens.last()) + 1;
            tokens[tokens.length - 1] = n;
        };
        var title = tokens.join(' ');
        return title;
    };

    var findParent = function(game) {
        return GameManager.company.getGameById(game.sequelTo);
    };

    var isSequel = function(game) {
        return game.sequelTo;
    };

    var currentGame;

    var oldShowGameDefinition = UI.showGameDefinition;
    UI.showGameDefinition = function(c, f) {
        var company = c;
        currentGame = c.currentGame;
        updateTitle = true;
        if (isSequel(currentGame)) {
            var parent = findParent(currentGame);
            var title = makeSequelTitle(parent);
            updateGameTitle(currentGame, title);
            updateTitle = false;

        } else {
            updateTitle = true;
        }
        selectedTopic = null;
        selectedPlatform = null;
        oldShowGameDefinition(c, f);
    };

    var oldPickGenreClick = UI.pickGenreClick;
    UI.pickGenreClick = function(a) {
        var result = oldPickGenreClick(a);
        if (a) {
            console.log(a);
        }
        return result;
    };
    var oldPickTopicClick = UI.pickTopicClick;
    UI.pickTopicClick = function(a) {
        var result = oldPickTopicClick(a);
        if (a && a !== "research") {
            selectedTopic = a.innerText.split('\n')[0];
            var title = makeRandomGameName([selectedTopic], [selectedGenre], selectedPlatform);
            updateGameTitle(currentGame, title);
        }
        return result;
    };

    var oldPickPlatformClick = UI.pickPlatformClick;
    UI.pickPlatformClick = function(a) {
        var result = oldPickPlatformClick(a);
        if (a) {
            var title = makeRandomGameName([selectedTopic], [selectedGenre], selectedPlatform);
            updateGameTitle(currentGame, title);
        }
        return result;
    };
})();
