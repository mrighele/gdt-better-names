var GameNameMod = {};
(function() {

    var topicWords = {
        Airplane: {
            'nouns': ['Flight', 'Helicopter', 'Wings', 'Pacific', 'Plane'],
            'adjectives': ['Flying']
        },
        Aliens: {
            'nouns': ['Alien'],
            'adjectives': ['Xeno']
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
            'nouns': ['City', 'Town', 'Mayor', 'Cars'],
            'adjectives': []
        },
        'Comedy': {
            'nouns': ['Fun'],
            'adjectives': ['Funny', 'Hilarious']
        },
        'Cyberpunk': {
            'nouns': ['System', 'Transistor', 'Synapse'],
            'adjectives': ['Electric', 'Punk', 'Dystopian' ]
        },
        'Dance': {
            'nouns': ['Dance', 'Floor', 'Stage'],
            'adjectives': ['Dancing', 'Moving' ]
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
            'nouns': ['Knight', 'Mage', 'Beholder' ],
            'adjectives': ['Mystic', 'Magic', ]
        },
        'Fashion': {
            'nouns': [],
            'adjectives': []
        },
        'Game Dev': {
            'nouns': ['Game',],
            'adjectives': []
        },
        'Government': {
            'nouns': ['Democracy', 'Despotism', 'Communist'],
            'adjectives': ['Anarchic']
        },
        'Hacking': {
            'nouns': ['Firewall', 'Bug', 'Code'],
            'adjectives': [ 'Hacking']
        },
        'History': {
            'nouns': [],
            'adjectives': []
        },
        'Horror': {
            'nouns': ['Horror', 'Scream'],
            'adjectives': ['Horrific']
        },
        'Hospital': {
            'nouns': [],
            'adjectives': []
        },
        'Hunting': {
            'nouns': [],
            'adjectives': []
        },
        'Law': {
            'nouns': [],
            'adjectives': []
        },
        'Life': {
            'nouns': [],
            'adjectives': []
        },
        'Martial Arts': {
            'nouns': [],
            'adjectives': []
        },
        'Medieval': {
            'nouns': [],
            'adjectives': []
        },
        'Military': {
            'nouns': [],
            'adjectives': []
        },
        'Movies': {
            'nouns': [],
            'adjectives': []
        },
        'Music': {
            'nouns': [],
            'adjectives': []
        },
        'Mystery': {
            'nouns': [],
            'adjectives': []
        },
        'Ninja': {
            'nouns': ['Ninja', 'Shinobi', ],
            'adjectives': ['Invisible', ]
        },
        'Pirate': {
            'nouns': ['Pirate', 'Caribbean', 'Galeon', 'Treasure'],
            'adjectives': ['Caraibic']
        },
        'Post Apocalyptic': {
            'nouns': [],
            'adjectives': []
        },
        'Prison': {
            'nouns': [],
            'adjectives': []
        },
        'Racing': {
            'nouns': [],
            'adjectives': []
        },
        'Romance': {
            'nouns': [],
            'adjectives': []
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
            'nouns': [],
            'adjectives': []
        },
        'Surgery': {
            'nouns': [],
            'adjectives': []
        },
        'Time Travel': {
            'nouns': [],
            'adjectives': []
        },
        'Transport': {
            'nouns': ['Transport', 'Railroad', 'Ship'],
            'adjectives': []
        },
        'UFO': {
            'nouns': ['UFO'],
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
            'nouns': ['Word', 'Letter', 'Alphabet', 'Grammar', 'Anagram', 'Crossword', 'Puzzle', 'Dictionary' ],
            'adjectives': ['Mispelled' ]
        },
        'Werewolf': {
            'nouns': ['Werewolf', 'Lycanthrope', 'Wolf Man', ],
            'adjectives': ['Hideous']
        },
        'Wild West': {
            'nouns': ['West', 'Cowboy', 'Sheriff', 'Revolver'],
            'adjectives': ['Wild']
        },

        'Zombies': {
            'nouns': ['Zombie'],
            'adjectives': ['Undead', 'Dead']
        }
    };

    var genreWords= {
        'Action': {'nouns' : ['Action', 'Run', 'Theft' ]},
        'Adventure': {'nouns': ['Adventure', 'Tales'] },
        'RPG': { 'nouns' : ['Scrolls'] },
        'Simulation': {'nouns': ['Simulator', 'Manager']},
        'Strategy': {'nouns': ['Campaign', ]},
        'Casual':{'nouns':['Party']}
    };
        
    var self = this;

    var randInt = function(max) {
        return Math.floor(Math.random()*max);
    };

    var randElement = function(items) {
        return items[ randInt(items.length) ];
    };
    
    var randomTopicAdjective = function(topics) {
        var topic = randElement(topics);
        if (!topicWords[topic] || Math.random() < 0.2)
            return null;
        return randElement(topicWords[topic].adjectives);
    };

    var randomTopicNoun = function(topics) {
        var topic = randElement(topics);
        if (!topicWords[topic] )
            return null;
        return randElement(topicWords[topic].nouns);
    };

    var randomGenreNoun = function(genres) {
        var genre = randElement(genres);
        if (!genreWords[genre] )
            return null;
        return randElement(genreWords[genre].nouns);
    };
                
    var makeRandomGameName = function(topics, genres, platform) {
        if (topics === [] || genres === [] ) {
            return null;
        }
        var words = [randomTopicAdjective(topics), randomTopicNoun(topics), randomGenreNoun(genres)];
        var title = words.join(' ');
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
        var tokens = parent.title.split(' ');
        if (isNaN(tokens.last())) {
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
        if (a && a!=="research") {
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
