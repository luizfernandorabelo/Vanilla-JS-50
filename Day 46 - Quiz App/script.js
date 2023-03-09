const questions = [
  {
    text: 'What planet is closest to the sun?',
    a: 'Mars',
    b: 'Jupiter',
    c: 'Minas Gerais',
    d: 'Mercury',
    answer: 'd'
  },
  {
    text: 'Where did sushi originate?',
    a: 'Japan',
    b: 'China',
    c: 'South Korea',
    d: 'North Korea',
    answer: 'b'
  },
  {
    text: 'How many hearts does an octopus have?',
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'Four',
    answer: 'c'
  },
  {
    text: 'Who has the most Olympic medals?',
    a: 'Michael Phelps',
    b: 'Usain Bolt',
    c: 'Karl Lewis',
    d: 'Pelé',
    answer: 'a'
  },
  {
    text: 'How many dots appear in a dice?',
    a: '21',
    b: '22',
    c: '23',
    d: '24',
    answer: 'a'
  },
  {
    text: 'In what country was Elon Musk born?',
    a: 'United States',
    b: 'South Africa',
    c: 'Canada',
    d: 'England',
    answer: 'b'
  },
  {
    text: 'The three little pigs are:',
    a: 'Fifer Pig, Fiddler Pig and Practical Pig',
    b: 'Fun, Funny and Funniest',
    c: 'Straw Pig, Stick Pig and Brick Pig',
    d: 'Fred. Beto and Jeff',
    answer: 'a'
  },
  {
    text: 'A synonym of recursion is:',
    a: 'Reclusion',
    b: 'Fusion',
    c: 'Collision',
    d: 'A synonym of recursion',
    answer: 'd'
  },
  {
    text: 'What is the capital of Canada?',
    a: 'Toronto',
    b: 'Ottawa',
    c: 'Cold City',
    d: 'Quebec',
    answer: 'b'
  },
  {
    text: 'The only team that does not have a World cup club is:',
    a: 'Barcelona',
    b: 'Corinthians',
    c: 'Palmeiras',
    d: 'Real Madrid',
    answer: 'c'
  },
  {
    text: 'What language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    answer: 'd'
  },
  {
    text: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboards',
    answer: 'b'
  },
  {
    text: 'What year was Javascript launched?',
    a: '1997',
    b: '1996',
    c: '1995',
    d: 'None of the above',
    answer: 'c'
  },
  {
    text: 'Which five colors make the Olympic Ring?',
    a: 'Black, Green, Blue, Yellow and Red',
    b: 'Blue, Purple, Brown, Red and Green',
    c: 'Yellow, Orange, Green, Black and White',
    d: 'Red, Green, Blue, Brown and Yellow',
    answer: 'a'
  },
  {
    text: 'What is the biggest animal in the world?',
    a: 'The gorilla',
    b: 'The hipoppotamus',
    c: 'The blue whale',
    d: 'The Giraffe',
    answer: 'c'
  },
  {
    text: 'How many valves does a human heart have?',
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'Four',
    answer: 'd'
  },
  {
    text: 'What relationship were Ross and Monica in Friends?',
    a: 'Brother and Sister',
    b: 'Boyfriend and Girlfriend',
    c: 'Uncle and niece',
    d: 'Employer and Employee',
    answer: 'a'
  },
  {
    text: 'Which Harry Potter movie had the highest grossing?',
    a: 'Harry Potter and the Philosopher\'s Stone',
    b: 'Harry Potter and the Deathly Hallows - Part 1',
    c: 'Harry Potter and the Deathly Hallows - Part 2',
    d: 'Harry Potter and the Chamber of Secrets',
    answer: 'c'
  },
  {
    text: 'Who painted Monalisa?',
    a: 'Michelangelo',
    b: 'Pablo Picasso',
    c: 'Salvador Dalí',
    d: 'Leonardo da Vinci',
    answer: 'd'
  },
  {
    text: 'Which member of One Direction left the band first to pursue a solo career?',
    a: 'Harry Styles',
    b: 'Zayn Malik',
    c: 'Louis Tomlinson',
    d: 'Lewis Hamilton',
    answer: 'b'
  },
  {
    text: 'In which decade was Madonna born?',
    a: 'The 1950s',
    b: 'The 1960s',
    c: 'The 1970s',
    d: 'None of the above',
    answer: 'a'
  },
  {
    text: 'What does IPO stand for?',
    a: 'Interface of Platform Operations',
    b: 'Intern Playing Opera',
    c: 'Initial Public Offering',
    d: 'None of the above',
    answer: 'c'
  },
  {
    text: 'What was Queen Elizabeth II\'s surname?',
    a: 'Windsor',
    b: 'Watson',
    c: 'Green',
    d: 'East',
    answer: 'a'
  },
  {
    text: 'Which city had the first Fashion Week?',
    a: 'Los Angeles',
    b: 'New York',
    c: 'Hollywood',
    d: 'San Francisco',
    answer: 'b'
  },
  {
    text: 'What does He stand for on the periodic table?',
    a: 'Hydrogen',
    b: 'Hassium',
    c: 'Helium',
    d: 'Holmium',
    answer: 'c'
  },
  {
    text: 'What does Hakuna Matata mean?',
    a: 'Long life',
    b: 'Pure happiness',
    c: 'Great Food',
    d: 'No worries',
    answer: 'd'
  },
  {
    text: 'What are the three water signs in astrology?',
    a: 'Cancer, Scorpio, and Pisces',
    b: 'Scorpio, Pisces and Cancer',
    c: 'Pisces, Cancer and Scorpio',
    d: 'Cancer, Pisces and Scorpio',
    answer: 'a'
  },
  {
    text: 'Who played Gunther in Friends?',
    a: 'David Schwimmer',
    b: 'James Michael Tyler',
    c: 'Matthew Perry',
    d: 'Matt LeBlanc',
    answer: 'b'
  },
  {
    text: 'Who played Chandler in Friends?',
    a: 'David Schwimmer',
    b: 'James Michael Tyler',
    c: 'Matthew Perry',
    d: 'Matt LeBlanc',
    answer: 'c'
  },
  {
    text: 'Who played Joey in Friends?',
    a: 'David Schwimmer',
    b: 'James Michael Tyler',
    c: 'Matthew Perry',
    d: 'Matt LeBlanc',
    answer: 'd'
  },
  {
    text: 'Who played Ross in Friends?',
    a: 'David Schwimmer',
    b: 'James Michael Tyler',
    c: 'Matthew Perry',
    d: 'Matt LeBlanc',
    answer: 'a'
  },
  {
    text: 'Who played Phoebe in Friends?',
    a: 'Jennifer Aniston',
    b: 'Lisa Kudrow',
    c: 'Courteney Cox',
    d: 'Maggie Wheeler',
    answer: 'b'
  },
  {
    text: 'Who played Monica in Friends?',
    a: 'Jennifer Aniston',
    b: 'Lisa Kudrow',
    c: 'Courteney Cox',
    d: 'Maggie Wheeler',
    answer: 'c'
  },
  {
    text: 'Who played Janice in Friends?',
    a: 'Jennifer Aniston',
    b: 'Lisa Kudrow',
    c: 'Courteney Cox',
    d: 'Maggie Wheeler',
    answer: 'd'
  },
  {
    text: 'Who played Rachel in Friends?',
    a: 'Jennifer Aniston',
    b: 'Lisa Kudrow',
    c: 'Courteney Cox',
    d: 'Maggie Wheeler',
    answer: 'a'
  },
  {
    text: 'What was Sheldon Cooper\'s one-word catchphrase in The Big Bang Theory?',
    a: 'A-ha',
    b: 'Bazinga',
    c: 'Yahoo',
    d: 'None of the above',
    answer: 'b'
  },
  {
    text: 'What is the best-selling novel of all time?',
    a: 'Sherlock Holmes',
    b: 'Percy Jackson',
    c: 'Dom Quixote',
    d: 'None of the above',
    answer: 'c'
  },
  {
    text: 'Which Planet has the most moons?',
    a: 'Mars',
    b: 'Jupiter',
    c: 'Mercury',
    d: 'Saturn',
    answer: 'd'
  },
  {
    text: 'How many elements are in the periodic table?',
    a: '118',
    b: '119',
    c: '120',
    d: '121',
    answer: 'a'
  },
  {
    text: 'Where is the smallest bone in the human body located?',
    a: 'Hand',
    b: 'Ear',
    c: 'Foot',
    d: 'Leg',
    answer: 'b'
  },
  {
    text: 'Spiderman: No Way Home, launched in 2021, have 3 different spidermans. They were played by:',
    a: 'Jacob Batalon, Alfred Molina and Tom Holland',
    b: 'Jamie Fox, Willem Dafoe and Charlie Cox',
    c: 'Tom Holland, Tobey Maguire and Andrew Garfield',
    d: 'Tony Revolori, James Franco and Tobey Maguire',
    answer: 'c'
  },
  {
    text: 'Who played Iron Man in Avengers:',
    a: 'Chris Hemsworth',
    b: 'Mark Ruffalo',
    c: 'Chris Evans',
    d: 'Robert Downey Jr',
    answer: 'd'
  },
  {
    text: 'Who played Thor in Avengers:',
    a: 'Chris Hemsworth',
    b: 'Mark Ruffalo',
    c: 'Chris Evans',
    d: 'Robert Downey Jr',
    answer: 'a'
  },
  {
    text: 'Who played Hulk in Avengers:',
    a: 'Chris Hemsworth',
    b: 'Mark Ruffalo',
    c: 'Chris Evans',
    d: 'Robert Downey Jr',
    answer: 'b'
  },
  {
    text: 'Who played Captain America in Avengers:',
    a: 'Chris Hemsworth',
    b: 'Mark Ruffalo',
    c: 'Chris Evans',
    d: 'Robert Downey Jr',
    answer: 'c'
  },
  {
    text: 'Who played Loki in Avengers:',
    a: 'Don Cheadle',
    b: 'Samuel Jackson',
    c: 'Jeremy Renner',
    d: 'Tom Hiddleston',
    answer: 'd'
  },
  {
    text: 'Who played War Machine in Avengers:',
    a: 'Don Cheadle',
    b: 'Samuel Jackson',
    c: 'Jeremy Renner',
    d: 'Tom Hiddleston',
    answer: 'a'
  },
  {
    text: 'Who played Nick Fury in Avengers:',
    a: 'Don Cheadle',
    b: 'Samuel Jackson',
    c: 'Jeremy Renner',
    d: 'Tom Hiddleston',
    answer: 'b'
  },
  {
    text: 'Who played Hawkeye in Avengers:',
    a: 'Don Cheadle',
    b: 'Samuel Jackson',
    c: 'Jeremy Renner',
    d: 'Tom Hiddleston',
    answer: 'c'
  },
  {
    text: 'Who played Black Widow in Avengers:',
    a: 'Brie Larson',
    b: 'Karen Gilan',
    c: 'Gwyneth Paltrow',
    d: 'Scarlett Johansson',
    answer: 'd'
  },
  {
    text: 'Who played Captain Marvel in Avengers:',
    a: 'Brie Larson',
    b: 'Karen Gilan',
    c: 'Gwyneth Paltrow',
    d: 'Scarlett Johansson',
    answer: 'a'
  },
  {
    text: 'Who played Nebula in Avengers:',
    a: 'Brie Larson',
    b: 'Karen Gilan',
    c: 'Gwyneth Paltrow',
    d: 'Scarlett Johansson',
    answer: 'b'
  },
  {
    text: 'Who played Pepper Pots in Avengers:',
    a: 'Brie Larson',
    b: 'Karen Gilan',
    c: 'Gwyneth Paltrow',
    d: 'Scarlett Johansson',
    answer: 'c'
  },
  {
    text: 'How many fingers do Simpsons characters have?',
    a: 'Three',
    b: 'Two',
    c: 'Five',
    d: 'Four',
    answer: 'd'
  },
  {
    text: 'A DNA molecule is described as being what shape?',
    a: 'Double Helix',
    b: 'Single Helix',
    c: 'Straight Line',
    d: 'Double Spiral',
    answer: 'a'
  },
  {
    text: 'What percentage of the Earth\'s surface is made up of the Atlantic Ocean?',
    a: '10%',
    b: '20%',
    c: '30%',
    d: '40%',
    answer: 'b'
  },
  {
    text: 'How high is Mount Everest in metres?',
    a: '4848 meters',
    b: '8448 meters',
    c: '8848 meters',
    d: '8884 meters',
    answer: 'c'
  },
  {
    text: 'How many bones are there in the average adult human body?',
    a: '148',
    b: '162',
    c: '184',
    d: '206',
    answer: 'd'
  },
  {
    text: 'Who launched the Cultural Revolution in China?',
    a: 'Chairman Mao',
    b: 'Chi Jinping',
    c: 'Yanchuan County',
    d: 'Xi Zhongxun',
    answer: 'a'
  },
  {
    text: 'What is the name of Donald Duck\'s girlfriend?',
    a: 'Minie',
    b: 'Daisy Duck',
    c: 'Cindy Duck',
    d: 'Penny Duck',
    answer: 'b'
  },
  {
    text: 'How many timezones are there in mainland USA?',
    a: 'Six',
    b: 'Five',
    c: 'Four',
    d: 'Three',
    answer: 'c'
  },
  {
    text: 'How many lives is a cat said to have?',
    a: 'Nine',
    b: 'Ten',
    c: 'Eleven',
    d: 'Twelve',
    answer: 'a'
  },
  {
    text: 'What is the first name of the football player Haaland:',
    a: 'Erling',
    b: 'Lionel',
    c: 'Cristiano',
    d: 'Kylian',
    answer: 'a'
  },
  {
    text: 'What is the first name of the football player Messi:',
    a: 'Erling',
    b: 'Lionel',
    c: 'Cristiano',
    d: 'Kylian',
    answer: 'b'
  },
  {
    text: 'What is the first name of the football player Ronaldo:',
    a: 'Erling',
    b: 'Lionel',
    c: 'Cristiano',
    d: 'Kylian',
    answer: 'c'
  },
  {
    text: 'What is the first name of the football player Mbappe:',
    a: 'Erling',
    b: 'Lionel',
    c: 'Cristiano',
    d: 'Kylian',
    answer: 'd'
  },
  {
    text: 'Complete the following Beatles song: "Hey Jude, don\'t make it bad. Take a sad song and make it better..."',
    a: '"Remember to let her under your skin, then you\'ll begin to make it better."',
    b: '"Where everything was as fresh as the bright blue sky."',
    c: '"My head grew heavy and my sight grew dim. I had to stop for the night"',
    d: '"Where they play the right music. Getting in the swing, you come to look for a king."',
    answer: 'a'
  },
  {
    text: 'Complete the following Guns N\' Roses song: "She\'s got a smile that it seems to me. Reminds me of childhood memories..."',
    a: '"Remember to let her under your skin, then you\'ll begin to make it better."',
    b: '"Where everything was as fresh as the bright blue sky."',
    c: '"My head grew heavy and my sight grew dim. I had to stop for the night"',
    d: '"Where they play the right music. Getting in the swing, you come to look for a king."',
    answer: 'b'
  },
  {
    text: 'Complete the following Eagles song: "Up ahead in the distance I saw a shimmering light..."',
    a: '"Remember to let her under your skin, then you\'ll begin to make it better."',
    b: '"Where everything was as fresh as the bright blue sky."',
    c: '"My head grew heavy and my sight grew dim. I had to stop for the night"',
    d: '"Where they play the right music. Getting in the swing, you come to look for a king."',
    answer: 'c'
  },
  {
    text: 'Complete the following ABBA song: "Friday night and the lights are low. Looking out for a place to go..."',
    a: '"Remember to let her under your skin, then you\'ll begin to make it better."',
    b: '"Where everything was as fresh as the bright blue sky."',
    c: '"My head grew heavy and my sight grew dim. I had to stop for the night"',
    d: '"Where they play the right music. Getting in the swing, you come to look for a king."',
    answer: 'd'
  },
  {
    text: 'Complete the following Ed Sheeran song: "The club isn\'t the best place to find a lover, so the bar is where I go..."',
    a: '"Me and my friends at the table doing shots, drinking fast and then we talk slow."',
    b: '"I\'m not looking for somebody with some superhuman gifts."',
    c: '"And I\'ll tell you all about it when I see you again."',
    d: '"Reaching a fever pitch, it\'s bringing me out the dark"',
    answer: 'a'
  },
  {
    text: 'Complete the following Coldplay song: "But she said: Where\'d you wanna go? How much you wanna risk?..."',
    a: '"Me and my friends at the table doing shots, drinking fast and then we talk slow."',
    b: '"I\'m not looking for somebody with some superhuman gifts."',
    c: '"And I\'ll tell you all about it when I see you again."',
    d: '"Reaching a fever pitch, it\'s bringing me out the dark"',
    answer: 'b'
  },
  {
    text: 'Complete the following Wiz Khalifa song: "It\'s been a long day without you, my friend..."',
    a: '"Me and my friends at the table doing shots, drinking fast and then we talk slow."',
    b: '"I\'m not looking for somebody with some superhuman gifts."',
    c: '"And I\'ll tell you all about it when I see you again."',
    d: '"Reaching a fever pitch, it\'s bringing me out the dark"',
    answer: 'c'
  },
  {
    text: 'Complete the following Adele song: "There\'s a fire starting in my heart..."',
    a: '"Me and my friends at the table doing shots, drinking fast and then we talk slow."',
    b: '"I\'m not looking for somebody with some superhuman gifts."',
    c: '"And I\'ll tell you all about it when I see you again."',
    d: '"Reaching a fever pitch, it\'s bringing me out the dark"',
    answer: 'd'
  },
  {
    text: 'Complete the following Bruno Mars song: "This hit, that ice cold, Michelle Pfeiffer, that white gold..."',
    a: '"This one for them hood girls, them good girls straight masterpieces."',
    b: '"I\'m fired up and tired of the way that things have been."',
    c: '"Hat is matte black. Got the boots that\'s black to match."',
    d: '"Sometimes it lasts in love, but sometimes it hurts instead."',
    answer: 'a'
  },
  {
    text: 'Complete the following Imgine Dragons song: "First things first, I\'ma say all the words inside my head..."',
    a: '"This one for them hood girls, them good girls straight masterpieces."',
    b: '"I\'m fired up and tired of the way that things have been."',
    c: '"Hat is matte black. Got the boots that\'s black to match."',
    d: '"Sometimes it lasts in love, but sometimes it hurts instead."',
    answer: 'b'
  },
  {
    text: 'Complete the following Lil Nas X song: "I got the horses in the back. Horse tack is attached..."',
    a: '"This one for them hood girls, them good girls straight masterpieces."',
    b: '"I\'m fired up and tired of the way that things have been."',
    c: '"Hat is matte black. Got the boots that\'s black to match."',
    d: '"Sometimes it lasts in love, but sometimes it hurts instead."',
    answer: 'c'
  },
  {
    text: 'Complete the following Adele song: "Don\'t forget me, I beg I remember you said..."',
    a: '"This one for them hood girls, them good girls straight masterpieces."',
    b: '"I\'m fired up and tired of the way that things have been."',
    c: '"Hat is matte black. Got the boots that\'s black to match."',
    d: '"Sometimes it lasts in love, but sometimes it hurts instead."',
    answer: 'd'
  },
  {
    text: 'Who played Sheldon Cooper in the Big Bang Theory TV Show?',
    a: 'Jim Parsons',
    b: 'Johnny Galecki',
    c: 'Simon Helberg',
    d: 'Kunal Nayyar',
    answer: 'a'
  },
  {
    text: 'Who played Leonard in the Big Bang Theory TV Show?',
    a: 'Jim Parsons',
    b: 'Johnny Galecki',
    c: 'Simon Helberg',
    d: 'Kunal Nayyar',
    answer: 'b'
  },
  {
    text: 'Who played Howard in the Big Bang Theory TV Show?',
    a: 'Jim Parsons',
    b: 'Johnny Galecki',
    c: 'Simon Helberg',
    d: 'Kunal Nayyar',
    answer: 'c'
  },
  {
    text: 'Who played Rajesh in the Big Bang Theory TV Show?',
    a: 'Jim Parsons',
    b: 'Johnny Galecki',
    c: 'Simon Helberg',
    d: 'Kunal Nayyar',
    answer: 'd'
  },
  {
    text: 'Who played Penny in the Big Bang Theory TV Show?',
    a: 'Kaley Cuoco',
    b: 'Mayim Bialik',
    c: 'Melissa Rauch',
    d: 'Sara Gilbert',
    answer: 'a'
  },
  {
    text: 'Who played Amy in the Big Bang Theory TV Show?',
    a: 'Kaley Cuoco',
    b: 'Mayim Bialik',
    c: 'Melissa Rauch',
    d: 'Sara Gilbert',
    answer: 'b'
  },
  {
    text: 'Who played Bernadette in the Big Bang Theory TV Show?',
    a: 'Kaley Cuoco',
    b: 'Mayim Bialik',
    c: 'Melissa Rauch',
    d: 'Sara Gilbert',
    answer: 'c'
  },
  {
    text: 'Who played Leslie Winkle in the Big Bang Theory TV Show?',
    a: 'Kaley Cuoco',
    b: 'Mayim Bialik',
    c: 'Melissa Rauch',
    d: 'Sara Gilbert',
    answer: 'd'
  },
  {
    text: 'Which of these is a color of light beyond violet, and a color we cannot see?',
    a: 'Magmaviolet',
    b: 'Infraviolet',
    c: 'Invisiviolet',
    d: 'Ultraviolet',
    answer: 'd'
  },
  {
    text: 'In what country is Beijing located?',
    a: 'China',
    b: 'Japan',
    c: 'South Korea',
    d: 'North Korea',
    answer: 'a'
  },
  {
    text: 'Which company manufactures the Mustang?',
    a: 'Toyota',
    b: 'Dodge',
    c: 'Chrysler',
    d: 'Ford',
    answer: 'd'
  },
  {
    text: 'Who said "Details matter, it\'s worth waiting to get it right."?',
    a: 'Bill Gates',
    b: 'Steve Jobs',
    c: 'Freddie Mercury',
    d: 'David Bowie',
    answer: 'b'
  },
  {
    text: 'Who played Frodo in "The Lord of The Rings" tryology?',
    a: 'Jared Leto',
    b: 'Elijah Wood',
    c: 'Jake Gyllenhaal',
    d: 'Kirk Douglas',
    answer: 'b'
  },
  {
    text: 'What is the correct spelling of the word?',
    a: 'Gaurentee',
    b: 'Guarantee',
    c: 'Guarentee',
    d: 'Guarandtea',
    answer: 'b'
  },
  {
    text: 'Who was rumoured to be the lover of ex American president John F. Kennedy?',
    a: 'Elizabeth Taylor',
    b: 'Agatha Christie',
    c: 'Marilyn Monroe',
    d: 'Queen Elizabeth',
    answer: 'c'
  },
  {
    text: 'What was the nickname of former Dallas Cowboys linebacker Thomas Henderson?',
    a: 'Hollywood Henderson',
    b: 'The Rocket',
    c: 'Manster',
    d: 'The Kid',
    answer: 'a'
  },
  {
    text: 'How many professional baseball teams are there in Florida?',
    a: 'One',
    b: 'Three',
    c: 'Two',
    d: 'Zero',
    answer: 'c'
  },
  {
    text: 'What was the host city of the first Winter Olympic Games?',
    a: 'London, England',
    b: 'Athens, Greece',
    c: 'Chamonix, France',
    d: 'Salt Lake City, Utah',
    answer: 'c'
  },
  {
    text: 'In archery, how many pointes can you win with thirty arrows?',
    a: '299',
    b: '300',
    c: '200',
    d: '400',
    answer: 'b'
  },
  {
    text: 'Which word was the word "history" derived from?',
    a: 'War',
    b: 'Old',
    c: 'Inquiry',
    d: 'Mystery',
    answer: 'c'
  },
  {
    text: 'What\'s the line that Joey from Friends uses to flirt with girls?',
    a: 'Hi babe, wan\'t a ride?',
    b: 'Hey baby, you\'re hot',
    c: 'Hey, how you doin\'?',
    d: 'Hasta la vista baby',
    answer: 'c'
  },
  {
    text: 'Who is the Last Samurai in the movie "The Last Samurai"?',
    a: 'Algren',
    b: 'Katsumoto',
    c: 'Bob',
    d: 'Oishi',
    answer: 'b'
  },
  {
    text: 'What animal is said to be most like humans?',
    a: 'Ape',
    b: 'Dog',
    c: 'Whale',
    d: 'Elephant',
    answer: 'a'
  },
  {
    text: 'What sport was Jigoro Kano the founder of?',
    a: 'Judo',
    b: 'Karate',
    c: 'Sumo',
    d: 'Jiu-Jitsu',
    answer: 'a'
  },
  {
    text: 'What is the latin word for water?',
    a: 'Alia',
    b: 'Vita',
    c: 'Aqua',
    d: 'Via',
    answer: 'c'
  },
  {
    text: 'How does a player calculate a final score in golf?',
    a: 'Time played',
    b: 'Holes',
    c: 'Goals',
    d: 'Strokes',
    answer: 'd'
  },
  {
    text: 'The Allies used refined sonar equipment to attack German U-boats in WWII in the:',
    a: 'Battle of Leyte Gulf',
    b: 'Battle of Iwo Jima',
    c: 'Battle of EI Alamein',
    d: 'Battle of the Atlantic',
    answer: 'd'
  },
  {
    text: 'What does "10" mean in Roman Numerals?',
    a: 'I',
    b: 'L',
    c: 'X',
    d: 'V',
    answer: 'c'
  },
  {
    text: 'What is the symbol on the periodic table for rubidium?',
    a: 'RN',
    b: 'Rh',
    c: 'Rb',
    d: 'Rio',
    answer: 'c'
  },
  {
    text: 'Before relocating to Los Angeles, in what city did the Lakers begin their franchise?',
    a: 'Dallas',
    b: 'Minneapolis',
    c: 'Toronto',
    d: 'Philadelphia',
    answer: 'b'
  },
  {
    text: 'The kangaroo and koala belong to which category?',
    a: 'Marsupials',
    b: 'Ocanians',
    c: 'Landarians',
    d: 'Birds',
    answer: 'a'
  },
  {
    text: 'Which book was not written by Alexandre Dumas?',
    a: 'Ther Three Musketeers',
    b: 'The Man in the Iron Mask',
    c: 'A tale of Two Cities',
    d: 'The Count of Monte Cristo',
    answer: 'c'
  },
  {
    text: 'What was the last element to be added to the periodic table of elements?',
    a: 'Nitrogen',
    b: 'Ununoctium',
    c: 'Hydrogen',
    d: 'Oxygen',
    answer: 'b'
  },
  {
    text: 'In the ancient Greece, Poseidon was the god of what?',
    a: 'Nature',
    b: 'The Sea',
    c: 'The Underworld',
    d: 'Fire',
    answer: 'b'
  },
  {
    text: 'When did the feminism begin?',
    a: '1870s',
    b: '1980s',
    c: '2000s',
    d: '1960s',
    answer: 'a'
  },
  {
    text: 'Who is Jennifer Aniston?',
    a: 'Actor',
    b: 'Singer',
    c: 'Writer',
    d: 'Model',
    answer: 'a'
  },
];

const QUESTIONS_PER_GAME = 5;  // max = questions.length

const quizHeader = document.querySelector('#quiz-container header');
const button = document.querySelector('#submit-btn');

let currentQuestion = null;
let score = 0;
let answersCount = 0;
let ongoingGame = false;

button.addEventListener('click', () => {
  if (!ongoingGame) {
    button.innerText = 'Submit';
    createNewGame();
  } else {
    if (document.getElementById(currentQuestion.answer).checked) {
      score++;
    } 
    answersCount++;
    if (answersCount === QUESTIONS_PER_GAME) {
      ongoingGame = false;
      addResultsHTML();
    } else {
      currentQuestion = pickRandomQuestion();
      addQuestionHTML();
    }
  }
});

function createNewGame() {
  score = 0;
  answersCount = 0;
  ongoingGame = true;
  currentQuestion = pickRandomQuestion();
  addQuestionHTML();
}

function pickRandomQuestion() {
  let index = parseInt(Math.random() * questions.length);
  return questions[index];
}

function addQuestionHTML() {
  let content = `
    <h2 id="question">${currentQuestion.text}</h2> 
    <ul>
      <li>
        <input type="radio" name="answer" id="a" class="answer">
        <label for="a" id="a-text">${currentQuestion.a}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="b" class="answer">
        <label for="b" id="b-text">${currentQuestion.b}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="c" class="answer">
        <label for="c" id="c-text">${currentQuestion.c}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="d" class="answer">
        <label for="d" id="d-text">${currentQuestion.d}</label>
      </li>
    </ul>
  `
  quizHeader.innerHTML = content;
}

function addResultsHTML() {
  const content = `
    <p>You answered ${score}/${QUESTIONS_PER_GAME} questions correctly</p> 
  `;
  quizHeader.innerHTML = content;
  button.innerText = 'Reload';
}

createNewGame(); 
