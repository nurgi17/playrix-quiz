import type { ICategory } from '../DTO/game.dto'

const categories: ICategory[] = [
  {
    id: 1,
    name: 'КАЗАХСТАН В ЛИЦАХ И ФАКТАХ',
    points: [
      {
        id: 1,
        point: 10,
        questions: [
          {
            id: 1,
            question: 'Мы сейчас находимся в:',
            answers: [
              { id: 1, answer: 'Алмалинском районе', isCorrect: false },
              { id: 2, answer: 'Ауэзовском районе', isCorrect: false },
              { id: 3, answer: 'Медеуском районе', isCorrect: true }
            ],
            timer: 15
          },
          {
            id: 2,
            question: 'Жетоны в метро Алматы..',
            answers: [
              { id: 1, answer: 'желтые', isCorrect: true },
              { id: 2, answer: 'красные', isCorrect: false },
              { id: 3, answer: 'сиреневые', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 3,
            question:
              'В казахском устном фольклоре по сей день и повсеместно встречается персонаж «жұрттын баласы» - невероятно продуктивный, ко всему способный, образцовый экземпляр человека. По-русски мы называем его:',
            answers: [
              { id: 1, answer: 'Супермен', isCorrect: false },
              { id: 2, answer: 'Сын маминой подруги', isCorrect: true },
              { id: 3, answer: 'на все руки мастер', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 4,
            question:
              'На западе Казахстана широко распространенной традицией является приготовление бешпармака с:',
            answers: [
              { id: 1, answer: 'курицей', isCorrect: false },
              { id: 2, answer: 'осетром', isCorrect: true },
              { id: 3, answer: 'верблюжатиной', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 5,
            question: 'С какой из этих стран Казахстан не граничит?',
            answers: [
              { id: 1, answer: 'Азербайджан', isCorrect: false },
              { id: 2, answer: 'Таджикистан', isCorrect: true },
              { id: 3, answer: 'Туркменистан', isCorrect: false }
            ],
            timer: 15
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
            question: 'Сколько лет прошло между началом строительства и открытием метро в Алматы?',
            answers: [
              { id: 1, answer: '23 года', isCorrect: true },
              { id: 2, answer: '12 лет', isCorrect: false },
              { id: 3, answer: '27 лет', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 7,
            question: 'Какая из этих круп не входит в состав Наурыз-коже?',
            answers: [
              { id: 1, answer: 'кукуруза', isCorrect: false },
              { id: 2, answer: 'перловка', isCorrect: false },
              { id: 3, answer: 'гречка', isCorrect: true }
            ],
            timer: 20
          },
          {
            id: 8,
            question:
              'По преданию, суфий Ахмед Яссауи с целью распространения его учениками ислама, направил их:',
            answers: [
              { id: 1, answer: 'в направлении пущенных стрел', isCorrect: true },
              { id: 2, answer: 'к самым полноводным рекам', isCorrect: false },
              { id: 3, answer: 'по определенным созвездиям', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 9,
            question:
              'На фото персонаж мультфильма по мотивам популярных в Казахстане и других странах Центральной Азии сказок. Как его зовут?',
            answers: [
              { id: 1, answer: 'Алдар Косе', isCorrect: true },
              { id: 2, answer: 'Момын', isCorrect: false },
              { id: 3, answer: 'Культегин', isCorrect: false }
            ],
            timer: 20,
            image: '/playrix-quiz/kose.png'
          },
          {
            id: 10,
            question:
              'Вознесенский кафедральный собор в алматинском Парке 28 панфиловцев, возможно, возведён без единого гвоздя. Существует немало легенд и историй об этом. Неоспоримым остаётся факт, что это..',
            answers: [
              { id: 1, answer: 'самый высокий деревянный собор', isCorrect: true },
              { id: 2, answer: 'самый посещаемый собор в СНГ', isCorrect: false },
              { id: 3, answer: 'самый старый собор в Центральной Азии', isCorrect: false }
            ],
            timer: 20
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
            question: 'Назовите деятеля на фото:',
            answers: [
              { id: 1, answer: 'Динмухамед Кунаев', isCorrect: true },
              { id: 2, answer: 'Мухтар Ауэзов', isCorrect: false },
              { id: 3, answer: 'Абылхан Кастеев', isCorrect: false }
            ],
            timer: 30,
            image: '/playrix-quiz/kunaev.png'
          },
          {
            id: 12,
            question:
              "Революционер, общественный деятель и писатель, автор романа 'Тернистый путь'",
            answers: [
              { id: 1, answer: 'Магжан Жумабаев', isCorrect: false },
              { id: 2, answer: 'Сакен Сейфуллин', isCorrect: true },
              { id: 3, answer: 'Абай Кунанбаев', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 13,
            question:
              'В 2022 году были созданы три новые области: Абайская, Жетысуская и Улытауская. Какая из них ближе всего к Алматы?',
            answers: [
              { id: 1, answer: 'Абайская', isCorrect: false },
              { id: 2, answer: 'Жетысуская', isCorrect: true },
              { id: 3, answer: 'Улытауская', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 14,
            question:
              'Несколько лет назад в итоговом экзамене казахстанских школьников, тестировании ЕНТ, встречался очень спорный, нелепый и оттого скандальный вопрос об одном из правителей Казахского ханства, Абылай хане. Вопрос касался количества:',
            answers: [
              { id: 1, answer: 'наложниц иного вероисповедания', isCorrect: false },
              { id: 2, answer: 'захваченного в походах золота', isCorrect: false },
              { id: 3, answer: 'зубов его любимого коня', isCorrect: true }
            ],
            timer: 30
          },
          {
            id: 15,
            question: 'В каком городе Казахстана находится этот монумент?',
            answers: [
              { id: 1, answer: 'Петропавловск', isCorrect: false },
              { id: 2, answer: 'Актау', isCorrect: true },
              { id: 3, answer: 'Актобе', isCorrect: false }
            ],
            timer: 30,
            image: '/playrix-quiz/aktau.jpg'
          }
        ],
        isAnswered: false
      }
    ]
  },
  {
    id: 2,
    name: 'ОТ ПИФАГОРА ДО АЙФОНА',
    points: [
      {
        id: 4,
        point: 10,
        questions: [
          {
            id: 16,
            question:
              'В начале прошлого века, до массового распространения механических будильников, эту работу выполняли специально нанятые люди. Они стучали в двери и окна палкой, либо..',
            answers: [
              { id: 1, answer: 'плевали в окна горохом', isCorrect: true },
              { id: 2, answer: 'пели под нужным окном песни', isCorrect: false },
              { id: 3, answer: 'закидывали в окна яблоки', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 17,
            question:
              'Знаменитое антикоррозийное средство WD-40 широко применимо в быту. Аббревиатура WD расшифровывается как Water Displacement, а что, согласно корпоративной легенде, означает 40?',
            answers: [
              { id: 1, answer: 'формула была разработана с 40 попытки', isCorrect: true },
              { id: 2, answer: 'срок хранения – 40 лет', isCorrect: false },
              { id: 3, answer: 'применимо для 40 видов материалов', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 18,
            question: 'Это заклинание из «Гарри Поттера» включает фонарик на телефоне:',
            answers: [
              { id: 1, answer: 'нокс!', isCorrect: false },
              { id: 2, answer: 'люмос!', isCorrect: true },
              { id: 3, answer: 'акцио!', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 19,
            question: 'Какого из перечисленных «гастрономических ароматов» не существует?',
            answers: [
              { id: 1, answer: 'Comme des Garcons с ароматом свёклы', isCorrect: false },
              { id: 2, answer: 'Bohoboco с ароматом картофеля', isCorrect: false },
              { id: 3, answer: 'Jovoy с ароматом моркови', isCorrect: true }
            ],
            timer: 15
          },
          {
            id: 20,
            question:
              'Пленка-«пупырка» нашла широкое применение в быту как упаковочный материал, однако изначально задумывалась как:',
            answers: [
              { id: 1, answer: 'изоляция для механизмов', isCorrect: false },
              { id: 2, answer: 'легко чистящиеся обои', isCorrect: true },
              { id: 3, answer: 'антистресс', isCorrect: false }
            ],
            timer: 15
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
            question:
              'В ресторане ратуши Стокгольма примерно за 200$ посетитель может заказать особенное меню, которое связано с особым ежегодным историческим событием, которому более 120 лет. О каком событии идет речь?',
            answers: [
              { id: 1, answer: 'меню банкета Нобелевской премии', isCorrect: true },
              { id: 2, answer: 'меню Венского бала', isCorrect: false },
              { id: 3, answer: 'меню, разработанное королем Швеции', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 22,
            question:
              'На фото водяное колесо Inner Harbor в Балтиморе. Какую функцию оно выполняет?',
            answers: [
              { id: 1, answer: 'выработку энергии для фонарей набережной', isCorrect: false },
              { id: 2, answer: 'это детский аттракцион', isCorrect: false },
              { id: 3, answer: 'очистку устья реки', isCorrect: true }
            ],
            timer: 20,
            image: '/playrix-quiz/wheel.jpg'
          },
          {
            id: 23,
            question:
              'В этом году Шнобелевскую премию в области анатомии и приз в 10 трлн зимбабвийских долларов получили ученые, исследовавшие, в каком направлении у людей..',
            answers: [
              { id: 1, answer: 'чаще всего закручиваются волосы', isCorrect: true },
              { id: 2, answer: 'чаще косят глаза', isCorrect: false },
              { id: 3, answer: 'чаще стаптываются подошвы ботинок', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 24,
            question:
              'Красные яблоки, украшающие арт-объекты Алматы, имеют большое значение и в этой стране – в качестве символа благополучия их и по сей день можно увидеть на рождественской елке:',
            answers: [
              { id: 1, answer: 'в Боливии', isCorrect: false },
              { id: 2, answer: 'в Португалии', isCorrect: false },
              { id: 3, answer: 'во Франции', isCorrect: true }
            ],
            timer: 20
          },
          {
            id: 25,
            question:
              'В Мельбурне стоит монумент Чарльзу Ла Тробе, первому вице-губернатору штата Виктория. Хотя он был очень образован, при жизни на этого правителя смотрели, как на чудака, что и отразилось и в его памятнике. Что не так с памятником?',
            answers: [
              { id: 1, answer: 'он установлен на голову, постаментом вверх', isCorrect: true },
              { id: 2, answer: 'он держит бинокль окулярами от себя', isCorrect: false },
              { id: 3, answer: 'политик стоит на руках', isCorrect: false }
            ],
            timer: 20
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
            question: 'Продолжите последовательность: Гровер Кливленд - Бенджамин Гаррисон -',
            answers: [
              { id: 1, answer: 'Теодор Рузвельт', isCorrect: false },
              { id: 2, answer: 'Вудро Вильсон', isCorrect: false },
              { id: 3, answer: 'Гровер Кливленд', isCorrect: true }
            ],
            timer: 30
          },
          {
            id: 27,
            question:
              'По состоянию на 2024 год решена только одна из семи «задач тысячелетия», это:',
            answers: [
              { id: 1, answer: 'гипотеза Пуанкаре', isCorrect: true },
              { id: 2, answer: 'Гипотеза Ходжа', isCorrect: false },
              { id: 3, answer: 'Гипотеза Римана', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 28,
            question: 'Девиз «Господь — мой свет» принадлежит:',
            answers: [
              { id: 1, answer: 'Папскому университету в Риме', isCorrect: false },
              { id: 2, answer: 'Кембриджскому университету', isCorrect: false },
              { id: 3, answer: 'Оксфордскому университету', isCorrect: true }
            ],
            timer: 30
          },
          {
            id: 29,
            question:
              'На первом представлении экспериментального театрального проекта французского режиссера Умберт Камерло в 2010 году осветителями работали зрители, принеся с собой зеркала. Основным же источником освещения был(и):',
            answers: [
              { id: 1, answer: 'лунный свет', isCorrect: true },
              { id: 2, answer: 'свет костров', isCorrect: false },
              { id: 3, answer: 'уличные фонари', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 30,
            question:
              'Ласло Гейниц, разработчик программного обеспечения из Флориды, вошел в историю символическим поступком, который теперь ежегодно отмечается в Интернете 22 мая. «Праздник» связан с:',
            answers: [
              { id: 1, answer: 'покупкой пиццы', isCorrect: true },
              { id: 2, answer: 'созданием метавселенной', isCorrect: false },
              { id: 3, answer: 'продажей первого NFT', isCorrect: false }
            ],
            timer: 30
          }
        ],
        isAnswered: false
      }
    ]
  },
  {
    id: 3,
    name: 'КОД, ЧИПЫ И РОБОТЫ',
    points: [
      {
        id: 7,
        point: 10,
        questions: [
          {
            id: 31,
            question:
              'Какая из следующих премий присуждается за выдающиеся достижения и открытия в области высоких технологий и информатики?',
            answers: [
              { id: 1, answer: 'Нобелевская премия', isCorrect: false },
              { id: 2, answer: 'Премия Тьюринга', isCorrect: true },
              { id: 3, answer: 'Пулитцеровская премия', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 32,
            question:
              'Как назывался один из первых электронных компьютеров, созданный в 1940-х годах и использовавшийся для вычислений во время Второй мировой войны?',
            answers: [
              { id: 1, answer: 'ENIAC', isCorrect: true },
              { id: 2, answer: 'Macintosh', isCorrect: false },
              { id: 3, answer: 'IBM PC', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 33,
            question:
              'Художник Саймон Векерт с помощью 99 телефонов однажды создал в Берлине перфоманс, показавший, насколько виртуальность влияет на реальность. Чем перфоманс выглядел для зрителей?',
            answers: [
              { id: 1, answer: 'какофонией звонков', isCorrect: false },
              { id: 2, answer: 'фейковыми пробками', isCorrect: true },
              { id: 3, answer: 'пирамидой из устройств', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 34,
            question:
              'Какой ученый провел эксперимент с кошкой в коробке, который иллюстрирует концепции квантовой механики и повлиял на развитие теоретической информатики?',
            answers: [
              { id: 1, answer: 'Альберт Эйнштейн', isCorrect: false },
              { id: 2, answer: 'Эрвин Шрёдингер', isCorrect: true },
              { id: 3, answer: 'Исаак Ньютон', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 35,
            question:
              'В каком фильме искусственный интеллект под названием «Скайнет» восстает против человечества и пытается его уничтожить?',
            answers: [
              { id: 1, answer: 'Матрица', isCorrect: false },
              { id: 2, answer: 'Бегущий по лезвию', isCorrect: false },
              { id: 3, answer: 'Терминатор', isCorrect: true }
            ],
            timer: 15
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
            question:
              'Как называется язык программирования, который часто используется для разработки проектов в области искусственного интеллекта и анализа данных?',
            answers: [
              { id: 1, answer: 'HTML', isCorrect: false },
              { id: 2, answer: 'Python', isCorrect: true },
              { id: 3, answer: 'CSS', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 37,
            question:
              'Какая технология используется для создания виртуальных помощников, таких как Siri и Alexa?',
            answers: [
              { id: 1, answer: 'Блокчейн', isCorrect: false },
              { id: 2, answer: 'Обработка естественного языка (NLP)', isCorrect: true },
              { id: 3, answer: 'Виртуальная реальность (VR)', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 38,
            question:
              'В каком литературном произведении впервые появилось упоминание концепции искусственного интеллекта?',
            answers: [
              { id: 1, answer: '«Франкенштейн» Мэри Шелли', isCorrect: true },
              { id: 2, answer: '«1984» Джорджа Оруэлла', isCorrect: false },
              { id: 3, answer: '«Метрополис» Теа фон Харбоу', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 39,
            question:
              'Как называется реалистичный робот-гуманоид, разработанный компанией Hanson Robotics, который способен вести беседу и выражать эмоции?',
            answers: [
              { id: 1, answer: 'Atlas', isCorrect: false },
              { id: 2, answer: 'Sophia', isCorrect: true },
              { id: 3, answer: 'Pepper', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 40,
            question:
              'Китайские инженеры компании Robot Era провели необычный эксперимент: забег двух гуманоидных роботов Star1 в пустыне Гоби. Несмотря на то, что «соревновались» две идентичные модели, одному из роботов удалось победить за счет:',
            answers: [
              { id: 1, answer: 'бега в кроссовках', isCorrect: true },
              { id: 2, answer: 'оптимизации маршрута', isCorrect: false },
              { id: 3, answer: 'программного сбоя у конкурента', isCorrect: false }
            ],
            timer: 20
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
            question:
              'Как называется проект или платформа, позволяющая художникам создавать и демонстрировать цифровые произведения искусства в виртуальных галереях, доступных через VR-устройства?',
            answers: [
              { id: 1, answer: 'Google Arts & Culture', isCorrect: false },
              { id: 2, answer: 'Tilt Brush', isCorrect: true },
              { id: 3, answer: 'Oculus Medium', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 42,
            question:
              'R2-D2, легендарный дроид из вселенной «Звёздных войн», имеет реального тезку, робота R2D2, применяемого в медицине для:',
            answers: [
              { id: 1, answer: 'микрохирургии глаза', isCorrect: true },
              { id: 2, answer: 'операций на суставах', isCorrect: false },
              { id: 3, answer: 'исследований активности мозга', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 43,
            question:
              'Симфонический оркестр Dresden Sinfoniker отметил 25-летие необычным концертом: половину выступления за дирижерским пультом стоял робот MAiRA. В числе прочих сыграли композицию пианиста Андреаса Гундлаха, с которой не справился бы живой дирижер. В чем особенность произведения?',
            answers: [
              { id: 1, answer: 'это произведение для трехрукого дирижера', isCorrect: true },
              { id: 2, answer: 'произведение имеет слишком высокий темп', isCorrect: false },
              { id: 3, answer: 'требуется, чтобы дирижер стоял лицом к залу', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 44,
            question:
              'Французская благотворительная ассоциация «Антураж» и агентство TBWA Paris создали в метавселенной персонажа по имени Уилл, призванного напоминать вам о проблемах реального мира и препятствовать полному отрыву от реальности. Так, Уилл стал первым в своем роде..',
            answers: [
              { id: 1, answer: 'виртуальным ребенком', isCorrect: false },
              { id: 2, answer: 'виртуальным психотерапевтом', isCorrect: false },
              { id: 3, answer: 'виртуальным бездомным', isCorrect: true }
            ],
            timer: 30
          }
        ],
        isAnswered: false
      }
    ]
  },
  {
    id: 4,
    name: 'ВСЕЛЕННАЯ PLAYRIX',
    points: [
      {
        id: 10,
        point: 10,
        questions: [
          {
            id: 45,
            question: 'Как называется игра-ситибилдер, в которой есть регата и шахта?',
            answers: [
              { id: 1, answer: 'Farmscapes', isCorrect: false },
              { id: 2, answer: 'Township', isCorrect: true },
              { id: 3, answer: 'Fishdom', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 46,
            question: 'Какого из этих бонусов нет у компании?',
            answers: [
              { id: 1, answer: 'Акции компании на 10-летие работы в компании', isCorrect: true },
              { id: 2, answer: 'ДМС', isCorrect: false },
              { id: 3, answer: 'Изучение иностранного языка', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 47,
            question: 'Какое слово не получится составить из букв слова ПЛЕЙРИКС?',
            answers: [
              { id: 1, answer: 'Персик', isCorrect: false },
              { id: 2, answer: 'Спикер', isCorrect: false },
              { id: 3, answer: 'Пиксель', isCorrect: true }
            ],
            timer: 15
          },
          {
            id: 48,
            question: 'Где создается задача на получение лицензии на новое ПО?',
            answers: [
              { id: 1, answer: 'Сервисная служба', isCorrect: true },
              { id: 2, answer: 'Единое окно обращений', isCorrect: false },
              { id: 3, answer: 'Идеи Playrix', isCorrect: false }
            ],
            timer: 15
          },
          {
            id: 49,
            question: 'Если день рождения Playrix — 2 ноября, то кто он по гороскопу?',
            answers: [
              { id: 1, answer: 'Водолей', isCorrect: false },
              { id: 2, answer: 'Дева', isCorrect: false },
              { id: 3, answer: 'Скорпион', isCorrect: true }
            ],
            timer: 15
          }
        ],
        isAnswered: false
      },
      {
        id: 11,
        point: 20,
        questions: [
          {
            id: 50,
            question: 'В каком городе находится самый южный офис компании Playrix?',
            answers: [
              { id: 1, answer: 'Лимассол', isCorrect: false },
              { id: 2, answer: 'Батуми', isCorrect: false },
              { id: 3, answer: 'Будва', isCorrect: true }
            ],
            timer: 20
          },
          {
            id: 51,
            question: 'Какого канала в слаке не существует?',
            answers: [
              { id: 1, answer: 'company-blog', isCorrect: false },
              { id: 2, answer: 'company-updates', isCorrect: false },
              { id: 3, answer: 'company-news', isCorrect: true }
            ],
            timer: 20
          },
          {
            id: 52,
            question:
              'Как зовут родителей Остина, главного персонажа игр Gardenscapes и Homescapes?',
            answers: [
              { id: 1, answer: 'Гилберт и Алиса', isCorrect: false },
              { id: 2, answer: 'Уильям и Оливия', isCorrect: true },
              { id: 3, answer: 'Милан и Амелия', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 53,
            question: 'Какой должности в Playrix не существует?',
            answers: [
              { id: 1, answer: 'CEO', isCorrect: true },
              { id: 2, answer: 'COO', isCorrect: false },
              { id: 3, answer: 'CTO', isCorrect: false }
            ],
            timer: 20
          },
          {
            id: 54,
            question: 'В какой валюте сотрудники Playrix не получают зарплату?',
            answers: [
              { id: 1, answer: 'Гривна', isCorrect: false },
              { id: 2, answer: 'Дирхам', isCorrect: true },
              { id: 3, answer: 'Динар', isCorrect: false }
            ],
            timer: 20
          }
        ],
        isAnswered: false
      },
      {
        id: 12,
        point: 30,
        questions: [
          {
            id: 55,
            question: 'Какой праздник в календарном году празднуется раньше?',
            answers: [
              { id: 1, answer: 'День релиза проекта Homescapes', isCorrect: false },
              { id: 2, answer: 'День релиза проекта Township', isCorrect: false },
              { id: 3, answer: 'День релиза проекта Gardenscapes', isCorrect: true }
            ],
            timer: 30
          },
          {
            id: 56,
            question: 'Какой инструмент НЕ используется сотрудниками компании?',
            answers: [
              { id: 1, answer: 'Splunk', isCorrect: true },
              { id: 2, answer: 'Qase', isCorrect: false },
              { id: 3, answer: 'Datagrip', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 57,
            question: 'Какой из этих товаров в последнем Playrix Shop был дороже остальных?',
            answers: [
              { id: 1, answer: 'Xbox Series S', isCorrect: false },
              { id: 2, answer: 'Nintendo Switch', isCorrect: true },
              { id: 3, answer: 'Apple Watch Series 9 GPS (45mm)', isCorrect: false }
            ],
            timer: 30
          },
          {
            id: 58,
            question: 'Какой проект был первым match-3 от Playrix на мобильных устройствах?',
            answers: [
              { id: 1, answer: 'Gardenscapes', isCorrect: false },
              { id: 2, answer: 'Sky Charms', isCorrect: false },
              { id: 3, answer: 'Fishdom', isCorrect: true }
            ],
            timer: 30
          },
          {
            id: 59,
            question:
              'Наши сотрудники релоцировались в том числе и на Кипр, и в Ирландию, и в Португалию. Какой цвет присутствует на флагах всех перечисленных стран?',
            answers: [
              { id: 1, answer: 'Оранжевый', isCorrect: false },
              { id: 2, answer: 'Зеленый', isCorrect: true },
              { id: 3, answer: 'Красный', isCorrect: false }
            ],
            timer: 30
          }
        ],
        isAnswered: false
      }
    ]
  }
]

export default categories
