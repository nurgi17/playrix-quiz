import type { ICategory } from '../DTO/game.dto'

const categories: ICategory[] = [
  {
    id: 1,
    name: 'General Knowledge',
    points: [
      {
        id: 1,
        point: 10,
        questions: [
          {
            id: 1,
            question: 'What is the capital of France?',
            timer: 65,
            answers: [
              { id: 1, answer: 'Paris', isCorrect: true },
              { id: 2, answer: 'Berlin', isCorrect: false },
              { id: 3, answer: 'Madrid', isCorrect: false }
            ]
          },
          {
            id: 2,
            question: 'What is the largest planet in our solar system?',
            timer: 65,
            answers: [
              { id: 4, answer: 'Jupiter', isCorrect: true },
              { id: 5, answer: 'Mars', isCorrect: false },
              { id: 6, answer: 'Earth', isCorrect: false }
            ]
          },
          {
            id: 3,
            question: 'What year did the Berlin Wall fall?',
            timer: 65,
            answers: [
              { id: 7, answer: '1989', isCorrect: true },
              { id: 8, answer: '1991', isCorrect: false },
              { id: 9, answer: '1980', isCorrect: false }
            ]
          },
          {
            id: 4,
            question: 'What is the longest river in the world?',
            timer: 65,
            answers: [
              { id: 10, answer: 'Nile', isCorrect: false },
              { id: 11, answer: 'Amazon', isCorrect: true },
              { id: 12, answer: 'Yangtze', isCorrect: false }
            ]
          },
          {
            id: 5,
            question: 'Who painted the Mona Lisa?',
            timer: 65,
            answers: [
              { id: 13, answer: 'Leonardo da Vinci', isCorrect: true },
              { id: 14, answer: 'Vincent van Gogh', isCorrect: false },
              { id: 15, answer: 'Pablo Picasso', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 2,
        point: 20,
        questions: [
          {
            id: 6,
            question: 'What is the chemical symbol for water?',
            timer: 65,
            answers: [
              { id: 16, answer: 'H2O', isCorrect: true },
              { id: 17, answer: 'O2', isCorrect: false },
              { id: 18, answer: 'CO2', isCorrect: false }
            ]
          },
          {
            id: 7,
            question: "Who wrote 'To Kill a Mockingbird'?",
            timer: 65,
            answers: [
              { id: 19, answer: 'Harper Lee', isCorrect: true },
              { id: 20, answer: 'Mark Twain', isCorrect: false },
              { id: 21, answer: 'Ernest Hemingway', isCorrect: false }
            ]
          },
          {
            id: 8,
            question: 'What is the hottest planet in our solar system?',
            timer: 65,
            answers: [
              { id: 22, answer: 'Venus', isCorrect: true },
              { id: 23, answer: 'Mercury', isCorrect: false },
              { id: 24, answer: 'Mars', isCorrect: false }
            ]
          },
          {
            id: 9,
            question: 'Who developed the theory of relativity?',
            timer: 65,
            answers: [
              { id: 25, answer: 'Albert Einstein', isCorrect: true },
              { id: 26, answer: 'Isaac Newton', isCorrect: false },
              { id: 27, answer: 'Galileo Galilei', isCorrect: false }
            ]
          },
          {
            id: 10,
            question: 'What is the smallest country in the world?',
            timer: 65,
            answers: [
              { id: 28, answer: 'Vatican City', isCorrect: true },
              { id: 29, answer: 'Monaco', isCorrect: false },
              { id: 30, answer: 'San Marino', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 3,
        point: 30,
        questions: [
          {
            id: 11,
            question: 'What year did the Titanic sink?',
            timer: 65,
            answers: [
              { id: 31, answer: '1912', isCorrect: true },
              { id: 32, answer: '1920', isCorrect: false },
              { id: 33, answer: '1905', isCorrect: false }
            ]
          },
          {
            id: 12,
            question: 'What is the hardest natural substance on Earth?',
            timer: 65,
            answers: [
              { id: 34, answer: 'Diamond', isCorrect: true },
              { id: 35, answer: 'Gold', isCorrect: false },
              { id: 36, answer: 'Iron', isCorrect: false }
            ]
          },
          {
            id: 13,
            question: 'In which year did World War II end?',
            timer: 65,
            answers: [
              { id: 37, answer: '1945', isCorrect: true },
              { id: 38, answer: '1940', isCorrect: false },
              { id: 39, answer: '1939', isCorrect: false }
            ]
          },
          {
            id: 14,
            question: 'Who discovered penicillin?',
            timer: 65,
            answers: [
              { id: 40, answer: 'Alexander Fleming', isCorrect: true },
              { id: 41, answer: 'Marie Curie', isCorrect: false },
              { id: 42, answer: 'Louis Pasteur', isCorrect: false }
            ]
          },
          {
            id: 15,
            question: 'What is the most spoken language in the world?',
            timer: 65,
            answers: [
              { id: 43, answer: 'Mandarin Chinese', isCorrect: true },
              { id: 44, answer: 'English', isCorrect: false },
              { id: 45, answer: 'Spanish', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      }
    ]
  },
  {
    id: 2,
    name: 'Science',
    points: [
      {
        id: 4,
        point: 10,
        questions: [
          {
            id: 16,
            question: 'What planet is known as the Red Planet?',
            timer: 30,
            answers: [
              { id: 46, answer: 'Mars', isCorrect: true },
              { id: 47, answer: 'Jupiter', isCorrect: false },
              { id: 48, answer: 'Saturn', isCorrect: false }
            ]
          },
          {
            id: 17,
            question: 'What gas do plants absorb from the atmosphere?',
            timer: 30,
            answers: [
              { id: 49, answer: 'Carbon Dioxide', isCorrect: true },
              { id: 50, answer: 'Oxygen', isCorrect: false },
              { id: 51, answer: 'Nitrogen', isCorrect: false }
            ]
          },
          {
            id: 18,
            question: 'What is the chemical symbol for Iron?',
            timer: 30,
            answers: [
              { id: 52, answer: 'Fe', isCorrect: true },
              { id: 53, answer: 'Ir', isCorrect: false },
              { id: 54, answer: 'In', isCorrect: false }
            ]
          },
          {
            id: 19,
            question: 'What type of animal is a dolphin?',
            timer: 30,
            answers: [
              { id: 55, answer: 'Mammal', isCorrect: true },
              { id: 56, answer: 'Fish', isCorrect: false },
              { id: 57, answer: 'Bird', isCorrect: false }
            ]
          },
          {
            id: 20,
            question: 'How many planets are in our solar system?',
            timer: 30,
            answers: [
              { id: 58, answer: '8', isCorrect: true },
              { id: 59, answer: '9', isCorrect: false },
              { id: 60, answer: '7', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 5,
        point: 20,
        questions: [
          {
            id: 21,
            question: 'What is the powerhouse of the cell?',
            timer: 30,
            answers: [
              { id: 61, answer: 'Mitochondria', isCorrect: true },
              { id: 62, answer: 'Nucleus', isCorrect: false },
              { id: 63, answer: 'Ribosome', isCorrect: false }
            ]
          },
          {
            id: 22,
            question: 'What is the chemical symbol for water?',
            timer: 30,
            answers: [
              { id: 64, answer: 'H2O', isCorrect: true },
              { id: 65, answer: 'O2', isCorrect: false },
              { id: 66, answer: 'CO2', isCorrect: false }
            ]
          },
          {
            id: 23,
            question: 'What planet is known for its rings?',
            timer: 30,
            answers: [
              { id: 67, answer: 'Saturn', isCorrect: true },
              { id: 68, answer: 'Jupiter', isCorrect: false },
              { id: 69, answer: 'Neptune', isCorrect: false }
            ]
          },
          {
            id: 24,
            question: 'What is the hardest natural substance on Earth?',
            timer: 30,
            answers: [
              { id: 70, answer: 'Diamond', isCorrect: true },
              { id: 71, answer: 'Gold', isCorrect: false },
              { id: 72, answer: 'Iron', isCorrect: false }
            ]
          },
          {
            id: 25,
            question: 'What organ does a fish use to breathe?',
            timer: 30,
            answers: [
              { id: 73, answer: 'Gills', isCorrect: true },
              { id: 74, answer: 'Lungs', isCorrect: false },
              { id: 75, answer: 'Skin', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 6,
        point: 30,
        questions: [
          {
            id: 26,
            question: 'What element has the atomic number 1?',
            timer: 30,
            answers: [
              { id: 76, answer: 'Hydrogen', isCorrect: true },
              { id: 77, answer: 'Helium', isCorrect: false },
              { id: 78, answer: 'Oxygen', isCorrect: false }
            ]
          },
          {
            id: 27,
            question: 'What gas is most abundant in Earth’s atmosphere?',
            timer: 30,
            answers: [
              { id: 79, answer: 'Nitrogen', isCorrect: true },
              { id: 80, answer: 'Oxygen', isCorrect: false },
              { id: 81, answer: 'Carbon Dioxide', isCorrect: false }
            ]
          },
          {
            id: 28,
            question: 'Which planet is closest to the Sun?',
            timer: 30,
            answers: [
              { id: 82, answer: 'Mercury', isCorrect: true },
              { id: 83, answer: 'Venus', isCorrect: false },
              { id: 84, answer: 'Mars', isCorrect: false }
            ]
          },
          {
            id: 29,
            question: 'What is the most common element in the human body?',
            timer: 30,
            answers: [
              { id: 85, answer: 'Oxygen', isCorrect: true },
              { id: 86, answer: 'Carbon', isCorrect: false },
              { id: 87, answer: 'Hydrogen', isCorrect: false }
            ]
          },
          {
            id: 30,
            question: 'What type of blood cells help our bodies fight infection?',
            timer: 30,
            answers: [
              { id: 88, answer: 'White blood cells', isCorrect: true },
              { id: 89, answer: 'Red blood cells', isCorrect: false },
              { id: 90, answer: 'Platelets', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      }
    ]
  },
  {
    id: 3,
    name: 'History',
    points: [
      {
        id: 7,
        point: 10,
        questions: [
          {
            id: 31,
            question: 'Who was the first President of the United States?',
            timer: 30,
            answers: [
              { id: 91, answer: 'George Washington', isCorrect: true },
              { id: 92, answer: 'Thomas Jefferson', isCorrect: false },
              { id: 93, answer: 'Abraham Lincoln', isCorrect: false }
            ]
          },
          {
            id: 32,
            question: 'In which year did the Titanic sink?',
            timer: 30,
            answers: [
              { id: 94, answer: '1912', isCorrect: true },
              { id: 95, answer: '1920', isCorrect: false },
              { id: 96, answer: '1905', isCorrect: false }
            ]
          },
          {
            id: 33,
            question: 'Who discovered America in 1492?',
            timer: 30,
            answers: [
              { id: 97, answer: 'Christopher Columbus', isCorrect: true },
              { id: 98, answer: 'Vasco da Gama', isCorrect: false },
              { id: 99, answer: 'Ferdinand Magellan', isCorrect: false }
            ]
          },
          {
            id: 34,
            question: 'Who was the famous Greek philosopher who taught Plato?',
            timer: 30,
            answers: [
              { id: 100, answer: 'Socrates', isCorrect: true },
              { id: 101, answer: 'Aristotle', isCorrect: false },
              { id: 102, answer: 'Homer', isCorrect: false }
            ]
          },
          {
            id: 35,
            question: 'What was the name of the ship that brought the Pilgrims to America in 1620?',
            timer: 30,
            answers: [
              { id: 103, answer: 'Mayflower', isCorrect: true },
              { id: 104, answer: 'Santa Maria', isCorrect: false },
              { id: 105, answer: 'Endeavour', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 8,
        point: 20,
        questions: [
          {
            id: 36,
            question: 'What was the name of the first successful English colony in America?',
            timer: 30,
            answers: [
              { id: 106, answer: 'Jamestown', isCorrect: true },
              { id: 107, answer: 'Plymouth', isCorrect: false },
              { id: 108, answer: 'Roanoke', isCorrect: false }
            ]
          },
          {
            id: 37,
            question: 'Who was the Roman god of war?',
            timer: 30,
            answers: [
              { id: 109, answer: 'Mars', isCorrect: true },
              { id: 110, answer: 'Apollo', isCorrect: false },
              { id: 111, answer: 'Jupiter', isCorrect: false }
            ]
          },
          {
            id: 38,
            question: 'In which year did World War I begin?',
            timer: 30,
            answers: [
              { id: 112, answer: '1914', isCorrect: true },
              { id: 113, answer: '1918', isCorrect: false },
              { id: 114, answer: '1939', isCorrect: false }
            ]
          },
          {
            id: 39,
            question: 'Who was the British Prime Minister during World War II?',
            timer: 30,
            answers: [
              { id: 115, answer: 'Winston Churchill', isCorrect: true },
              { id: 116, answer: 'Neville Chamberlain', isCorrect: false },
              { id: 117, answer: 'Margaret Thatcher', isCorrect: false }
            ]
          },
          {
            id: 40,
            question: 'What empire was ruled by Genghis Khan?',
            timer: 30,
            answers: [
              { id: 118, answer: 'Mongol Empire', isCorrect: true },
              { id: 119, answer: 'Roman Empire', isCorrect: false },
              { id: 120, answer: 'Ottoman Empire', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 9,
        point: 30,
        questions: [
          {
            id: 41,
            question: 'What year did the Berlin Wall fall?',
            timer: 30,
            answers: [
              { id: 121, answer: '1989', isCorrect: true },
              { id: 122, answer: '1991', isCorrect: false },
              { id: 123, answer: '1980', isCorrect: false }
            ]
          },
          {
            id: 42,
            question: 'Who was known as the "Sun King"?',
            timer: 30,
            answers: [
              { id: 124, answer: 'Louis XIV', isCorrect: true },
              { id: 125, answer: 'Louis XVI', isCorrect: false },
              { id: 126, answer: 'Napoleon', isCorrect: false }
            ]
          },
          {
            id: 43,
            question: 'What dynasty ruled China for most of the last millennium?',
            timer: 30,
            answers: [
              { id: 127, answer: 'Ming Dynasty', isCorrect: true },
              { id: 128, answer: 'Qing Dynasty', isCorrect: false },
              { id: 129, answer: 'Han Dynasty', isCorrect: false }
            ]
          },
          {
            id: 44,
            question: 'Who was the first emperor of Rome?',
            timer: 30,
            answers: [
              { id: 130, answer: 'Augustus', isCorrect: true },
              { id: 131, answer: 'Nero', isCorrect: false },
              { id: 132, answer: 'Julius Caesar', isCorrect: false }
            ]
          },
          {
            id: 45,
            question: 'What was the capital of the Byzantine Empire?',
            timer: 30,
            answers: [
              { id: 133, answer: 'Constantinople', isCorrect: true },
              { id: 134, answer: 'Rome', isCorrect: false },
              { id: 135, answer: 'Athens', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      }
    ]
  },
  {
    id: 4,
    name: 'Sports',
    points: [
      {
        id: 10,
        point: 10,
        questions: [
          {
            id: 46,
            question: 'Which sport is known as "the beautiful game"?',
            timer: 30,
            answers: [
              { id: 136, answer: 'Soccer', isCorrect: true },
              { id: 137, answer: 'Basketball', isCorrect: false },
              { id: 138, answer: 'Baseball', isCorrect: false }
            ]
          },
          {
            id: 47,
            question: 'How many players are there in a rugby team?',
            timer: 30,
            answers: [
              { id: 139, answer: '15', isCorrect: true },
              { id: 140, answer: '11', isCorrect: false },
              { id: 141, answer: '7', isCorrect: false }
            ]
          },
          {
            id: 48,
            question: 'Which country hosted the 2016 Summer Olympics?',
            timer: 30,
            answers: [
              { id: 142, answer: 'Brazil', isCorrect: true },
              { id: 143, answer: 'China', isCorrect: false },
              { id: 144, answer: 'Japan', isCorrect: false }
            ]
          },
          {
            id: 49,
            question: 'In which sport would you perform a slam dunk?',
            timer: 30,
            answers: [
              { id: 145, answer: 'Basketball', isCorrect: true },
              { id: 146, answer: 'Volleyball', isCorrect: false },
              { id: 147, answer: 'Tennis', isCorrect: false }
            ]
          },
          {
            id: 50,
            question: 'Which sport is known for its four Grand Slam tournaments?',
            timer: 30,
            answers: [
              { id: 148, answer: 'Tennis', isCorrect: true },
              { id: 149, answer: 'Golf', isCorrect: false },
              { id: 150, answer: 'Cricket', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 11,
        point: 20,
        questions: [
          {
            id: 51,
            question: 'Which athlete is known as "The Greatest"?',
            timer: 30,
            answers: [
              { id: 151, answer: 'Muhammad Ali', isCorrect: true },
              { id: 152, answer: 'Michael Jordan', isCorrect: false },
              { id: 153, answer: 'Usain Bolt', isCorrect: false }
            ]
          },
          {
            id: 52,
            question: 'In which year did the first modern Olympic Games take place?',
            timer: 30,
            answers: [
              { id: 154, answer: '1896', isCorrect: true },
              { id: 155, answer: '1900', isCorrect: false },
              { id: 156, answer: '1904', isCorrect: false }
            ]
          },
          {
            id: 53,
            question: 'What is the maximum score in a single game of ten-pin bowling?',
            timer: 30,
            answers: [
              { id: 157, answer: '300', isCorrect: true },
              { id: 158, answer: '250', isCorrect: false },
              { id: 159, answer: '200', isCorrect: false }
            ]
          },
          {
            id: 54,
            question: 'Which country won the FIFA World Cup in 2014?',
            timer: 30,
            answers: [
              { id: 160, answer: 'Germany', isCorrect: true },
              { id: 161, answer: 'Brazil', isCorrect: false },
              { id: 162, answer: 'Argentina', isCorrect: false }
            ]
          },
          {
            id: 55,
            question: 'In which sport would you find the term "hat-trick"?',
            timer: 30,
            answers: [
              { id: 163, answer: 'Hockey', isCorrect: true },
              { id: 164, answer: 'Baseball', isCorrect: false },
              { id: 165, answer: 'Rugby', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      },
      {
        id: 12,
        point: 30,
        questions: [
          {
            id: 56,
            question: 'What sport is often referred to as "America\'s pastime"?',
            timer: 30,
            answers: [
              { id: 166, answer: 'Baseball', isCorrect: true },
              { id: 167, answer: 'Football', isCorrect: false },
              { id: 168, answer: 'Basketball', isCorrect: false }
            ]
          },
          {
            id: 57,
            question: 'Who holds the record for the most home runs in a single MLB season?',
            timer: 30,
            answers: [
              { id: 169, answer: 'Barry Bonds', isCorrect: true },
              { id: 170, answer: 'Babe Ruth', isCorrect: false },
              { id: 171, answer: 'Hank Aaron', isCorrect: false }
            ]
          },
          {
            id: 58,
            question: 'Which country is known for the sport of cricket?',
            timer: 30,
            answers: [
              { id: 172, answer: 'England', isCorrect: true },
              { id: 173, answer: 'USA', isCorrect: false },
              { id: 174, answer: 'Brazil', isCorrect: false }
            ]
          },
          {
            id: 59,
            question: 'What is the length of an Olympic swimming pool?',
            timer: 30,
            answers: [
              { id: 175, answer: '50 meters', isCorrect: true },
              { id: 176, answer: '25 meters', isCorrect: false },
              { id: 177, answer: '100 meters', isCorrect: false }
            ]
          },
          {
            id: 60,
            question: 'Who is the only athlete to play in both a Super Bowl and a World Series?',
            timer: 30,
            answers: [
              { id: 178, answer: 'Deion Sanders', isCorrect: true },
              { id: 179, answer: 'Bo Jackson', isCorrect: false },
              { id: 180, answer: 'Jim Thorpe', isCorrect: false }
            ]
          }
        ],
        isAnswered: false
      }
    ]
  }
]

export default categories
