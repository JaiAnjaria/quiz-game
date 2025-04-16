 const questions = [
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Pune', 'Nagpur', 'Delhi'],
      answer: 'Delhi',
      id: 1
    },
    {
      question: 'Who is the Prime Minister of India?',
      options: ['Rahul Gandhi', 'Nitin Gadkari', 'Narendra Modi', 'Sharad Pawar'],
      answer: 'Narendra Modi',
      id: 2
    },
    {
      question: 'When did India get independence?',
      options: ['1950', '1947', '1930', '1945'],
      answer: '1947',
      id: 3
    },
    {
      question: 'Which is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Mars'],
      answer: 'Jupiter',
      id: 4
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 'H2O',
      id: 5
    },
    {
      question: 'Which animal is known as the king of the jungle?',
      options: ['Elephant', 'Tiger', 'Lion', 'Bear'],
      answer: 'Lion',
      id: 6
    },
    {
      question: 'Who wrote the national anthem of India?',
      options: ['Rabindranath Tagore', 'Mahatma Gandhi', 'Bankim Chandra', 'Jawaharlal Nehru'],
      answer: 'Rabindranath Tagore',
      id: 7
    },
    {
      question: 'What is the boiling point of water?',
      options: ['100°C', '90°C', '120°C', '80°C'],
      answer: '100°C',
      id: 8
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Saturn'],
      answer: 'Mars',
      id: 9
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'Thailand', 'India'],
      answer: 'Japan',
      id: 10
    },
    {
      question: 'Who invented the light bulb?',
      options: ['Thomas Edison', 'Albert Einstein', 'Newton', 'Galileo'],
      answer: 'Thomas Edison',
      id: 11
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      answer: 'Carbon Dioxide',
      id: 12
    },
    {
      question: 'Which is the smallest continent?',
      options: ['Europe', 'Australia', 'Antarctica', 'Africa'],
      answer: 'Australia',
      id: 13
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Won', 'Ruble', 'Ringgit'],
      answer: 'Yen',
      id: 14
    },
    {
      question: 'How many players are there in a cricket team?',
      options: ['9', '10', '11', '12'],
      answer: '11',
      id: 15
    },
    {
      question: 'Which Indian state is known as the “Fruit Bowl of India”?',
      options: ['Punjab', 'Kerala', 'Himachal Pradesh', 'Assam'],
      answer: 'Himachal Pradesh',
      id: 16
    },
    {
      question: 'Who discovered gravity?',
      options: ['Newton', 'Einstein', 'Edison', 'Tesla'],
      answer: 'Newton',
      id: 17
    },
    {
      question: 'Which river is the longest in the world?',
      options: ['Amazon', 'Ganga', 'Nile', 'Yangtze'],
      answer: 'Nile',
      id: 18
    },
    {
      question: 'Which festival is known as the Festival of Lights?',
      options: ['Holi', 'Diwali', 'Eid', 'Christmas'],
      answer: 'Diwali',
      id: 19
    },
    {
      question: 'What is the national bird of India?',
      options: ['Sparrow', 'Parrot', 'Peacock', 'Eagle'],
      answer: 'Peacock',
      id: 20
    },
    {
      question: 'Which organ purifies our blood?',
      options: ['Heart', 'Kidney', 'Liver', 'Lungs'],
      answer: 'Kidney',
      id: 21
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent Van Gogh', 'Michelangelo'],
      answer: 'Leonardo da Vinci',
      id: 22
    },
    {
      question: 'Which is the tallest mountain in the world?',
      options: ['K2', 'Kangchenjunga', 'Everest', 'Makalu'],
      answer: 'Everest',
      id: 23
    },
    {
      question: 'How many colors are there in a rainbow?',
      options: ['5', '6', '7', '8'],
      answer: '7',
      id: 24
    },
    {
      question: 'What is the national flower of India?',
      options: ['Rose', 'Lily', 'Lotus', 'Marigold'],
      answer: 'Lotus',
      id: 25
    },
    {
      question: 'Which is the largest ocean in the world?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      answer: 'Pacific',
      id: 26
    },
    {
      question: 'Which vitamin is obtained from sunlight?',
      options: ['Vitamin A', 'Vitamin B', 'Vitamin D', 'Vitamin C'],
      answer: 'Vitamin D',
      id: 27
    },
    {
      question: 'Who was the first President of India?',
      options: ['Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Sardar Patel', 'APJ Abdul Kalam'],
      answer: 'Dr. Rajendra Prasad',
      id: 28
    },
    {
      question: 'What is the main source of energy for Earth?',
      options: ['Moon', 'Sun', 'Wind', 'Coal'],
      answer: 'Sun',
      id: 29
    },
    {
      question: 'Which country gifted the Statue of Liberty to the USA?',
      options: ['Germany', 'France', 'Canada', 'UK'],
      answer: 'France',
      id: 30
    },
    {
      question: 'Which is the national animal of India?',
      options: ['Lion', 'Elephant', 'Tiger', 'Leopard'],
      answer: 'Tiger',
      id: 31
    },
    {
      question: 'What is the hardest natural substance?',
      options: ['Iron', 'Diamond', 'Steel', 'Quartz'],
      answer: 'Diamond',
      id: 32
    },
    {
      question: 'Who is known as the Father of the Nation (India)?',
      options: ['Nehru', 'Ambedkar', 'Gandhi', 'Bose'],
      answer: 'Gandhi',
      id: 33
    },
    {
      question: 'Which planet is closest to the sun?',
      options: ['Venus', 'Earth', 'Mars', 'Mercury'],
      answer: 'Mercury',
      id: 34
    },
    {
      question: 'Which day is celebrated as World Environment Day?',
      options: ['June 5', 'April 22', 'March 23', 'July 1'],
      answer: 'June 5',
      id: 35
    },
    {
      question: 'Which blood group is called the universal donor?',
      options: ['A', 'B', 'O', 'AB'],
      answer: 'O',
      id: 36
    },
    {
      question: 'Which is the largest desert in the world?',
      options: ['Sahara', 'Gobi', 'Kalahari', 'Arctic'],
      answer: 'Sahara',
      id: 37
    },
    {
      question: 'What is the SI unit of force?',
      options: ['Newton', 'Joule', 'Pascal', 'Watt'],
      answer: 'Newton',
      id: 38
    },
    {
      question: 'What is the capital of Maharashtra?',
      options: ['Pune', 'Nagpur', 'Mumbai', 'Nashik'],
      answer: 'Mumbai',
      id: 39
    },
    {
      question: 'Who is known as Iron Man of India?',
      options: ['Jawaharlal Nehru', 'Sardar Patel', 'Gandhi', 'Lal Bahadur Shastri'],
      answer: 'Sardar Patel',
      id: 40
    },
    {
      question: 'Which is the longest river in India?',
      options: ['Yamuna', 'Godavari', 'Ganga', 'Brahmaputra'],
      answer: 'Ganga',
      id: 41
    },
    {
      question: 'Which is the most widely spoken language in the world?',
      options: ['English', 'Mandarin', 'Hindi', 'Spanish'],
      answer: 'Mandarin',
      id: 42
    },
    {
      question: 'In which year did World War II end?',
      options: ['1940', '1945', '1939', '1950'],
      answer: '1945',
      id: 43
    },
    {
      question: 'What is the full form of CPU?',
      options: ['Central Processing Unit', 'Computer Power Unit', 'Central Print Unit', 'Control Panel Unit'],
      answer: 'Central Processing Unit',
      id: 44
    },
    {
      question: 'Who invented the telephone?',
      options: ['Graham Bell', 'Edison', 'Newton', 'Tesla'],
      answer: 'Graham Bell',
      id: 45
    },
    {
      question: 'Which festival is known as the festival of colors?',
      options: ['Diwali', 'Holi', 'Eid', 'Navratri'],
      answer: 'Holi',
      id: 46
    },
    {
      question: 'Which country is known for pizza and pasta?',
      options: ['France', 'Italy', 'Mexico', 'Germany'],
      answer: 'Italy',
      id: 47
    },
    {
      question: 'Which is the fastest land animal?',
      options: ['Tiger', 'Leopard', 'Cheetah', 'Horse'],
      answer: 'Cheetah',
      id: 48
    },
    {
      question: 'What is the shape of the Earth?',
      options: ['Flat', 'Round', 'Oval', 'Spherical'],
      answer: 'Spherical',
      id: 49
    },
    {
      question: 'Which Indian city is known as the Pink City?',
      options: ['Mumbai', 'Delhi', 'Jaipur', 'Bhopal'],
      answer: 'Jaipur',
      id: 50
    }
  ];
  export default questions;