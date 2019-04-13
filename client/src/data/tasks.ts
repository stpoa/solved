import { addDays, addHours, addMinutes } from 'date-fns'

type DateLike = number | string | Date
const now = Date.now()

const addTime = (
  fromDate: DateLike,
  minutes: number,
  hours: number,
  days: number,
) => {
  const withMinutes = addMinutes(fromDate, minutes)
  const withHours = addHours(withMinutes, hours)
  const withDays = addDays(withHours, days)

  return withDays.getTime()
}

const waitingTasks = [
  {
    category: 'Informatyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '1',
    price: 100,
    shortDescription:
      'Napisz program, który poprosi użytkownika o podanie' +
      'liczb godzin i minut. Funkcja main() ma',
    tags: ['rownania', 'analiza'],
  },
  {
    category: 'Fizyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '2',
    price: 100,
    shortDescription: 'Masa marsa',
    tags: ['astrologia'],
  },
]

const ongoingTasks = {
  myTasks: [
    {
      category: 'Fizyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '2',
      price: 100,
      shortDescription: 'Masa marsa',
      tags: ['astrologia'],
    },
  ],
  someoneTasks: [
    {
      category: 'Angielski',
      expiredAt: addTime(now, 2, 4, 5),
      id: '2',
      price: 100,
      shortDescription: 'Odmień być',
      tags: ['astrologia'],
    },
  ],
}

const finishedTasks = {
  myTasks: [
    {
      category: 'Muzyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '4',
      price: 140,
      shortDescription: 'Odczytaj nuty i zagraj',
      tags: ['nuty'],
    },
    {
      category: 'Muzyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '5',
      price: 140,
      shortDescription: 'Odczytaj nuty i zagraj',
      tags: ['nuty'],
    },
  ],
  someoneTasks: [
    {
      category: 'Muzyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '5',
      price: 140,
      shortDescription: 'Odczytaj nuty i zagraj',
      tags: ['nuty'],
    },
  ],
}

const tasks = [
  {
    category: 'Informatyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '1',
    price: 100,
    shortDescription:
      'Napisz program, który poprosi użytkownika o podanie' +
      'liczb godzin i minut. Funkcja main() ma',
    tags: ['rownania', 'analiza'],
  },
  {
    category: 'Fizyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '2',
    price: 100,
    shortDescription: 'Masa marsa',
    tags: ['astrologia'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '3',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '4',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '5',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '6',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '7',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '8',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '9',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '10',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
]

export const termsAndConditionsText = `
 Na podstawie art. 66 ust. 2 ustawy z dnia 27 lipca 2005 r. – Prawo o szkolnictwie wyższym (t.j. Dz. U. z 2016 r. poz. 1842) oraz § 17 ust. 3 uchwały Senatu AGH Nr 179/2016 z dnia 30 listopada 2016 r. w sprawie wytycznych dla rad podstawowych jednostek organizacyjnych Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie w zakresie projektowania programów kształcenia dla studiów pierwszego i drugiego stopnia, zarządzam, co następuje:
§1 Zasady ogólne
1. Zajęcia z wychowania fizycznego (WF) są obowiązkowe na studiach stacjonarnych pierwszego stopnia.
2. Zajęciom z wychowania fizycznego nie przypisuje się punktów ECTS.
3. Rada Wydziału powinna wskazać semestr studiów, na którym zajęcia z wychowania fizycznego podlegają zaliczeniu po uzgodnieniu ze Studium Wychowania Fizycznego
i Sportu AGH.
4. Zajęcia z wychowania fizycznego mogą być prowadzone wyłącznie przez nauczyciela
akademickiego zatrudnionego w AGH na stanowisku starszego wykładowcy, wykładowcy albo instruktora posiadającego odpowiednie kwalifikacje do prowadzenia takich zajęć.
5. Nadzór nad prowadzeniem zajęć z wychowania fizycznego sprawuje Prorektor ds. Kształcenia.
§2 Ewidencja
2. Po zakończeniu zajęć każdego semestru SWFiS sporządza protokoły zaliczeń zajęć z WF i przesyła je do właściwych dziekanatów przed zakończeniem sesji egzaminacyjnej.
§3
Zajęcia z WF na studiach stacjonarnych pierwszego stopnia
1. Studenci studiów stacjonarnych pierwszego stopnia mają obowiązek odbycia 60 godzin bezpłatnych zajęć z wychowania fizycznego.
2. Zajęcia z WF trwają 3 semestry:
1) 1 semestr – 30 godzin w ramach zajęć na sali;
2) 2 semestr – 15 godzin w ramach zajęć na basenie; 3) 3 semestr – 15 godzin w ramach zajęć na sali.
3. Zajęciaz WF kończąsięzaliczeniem po każdym semestrze.
§4
Zajęcia z WF na studiach drugiego stopnia
Na studiach drugiego stopnia Uczelnia stwarza warunki do rozwoju kultury fizycznej studentów, w szczególności poprzez dobrowolny udział w zajęciach z WF na zasadach określonych przez SWFiS ustalonych po akceptacji przez Prorektora ds. Kształcenia oraz Prorektora ds. Studenckich.
Strona 1 z 4
Rb-D.0201-1-8/17
§5
Zasady zaliczania zajęć z WF
1. Podstawą uzyskania przez studentów zaliczenia z wychowania fizycznego jest:
1) systematyczne uczęszczanie na zajęcia;
2) aktywny udział w ćwiczeniach;
3) uzyskanie minimów sprawnościowych;
4) uzyskanie minimum umiejętności i wiadomości z dyscyplin sportowych realizowanych na zajęciach z WF;
5) uczestnictwo w zajęciach pomocy przedmedycznej organizowanych przez SWFiS.
2. Nieobecność na zajęciach dydaktycznych student zobowiązany jest odrobić (maksymalnie jedne zajęcia dziennie). Odrabianie może odbyć się po wcześniejszym
uzgodnieniu z prowadzącym grupę.
1) zaliczono („zal.”) – dla studentów, którzy uzyskali minimum wymagane do zaliczenia zajęć z wychowania fizycznego;
2) niezaliczono („nzal.”) – dla studentów, którzy nie uzyskali minimum wymaganego do zaliczenia zajęć z wychowania fizycznego;
3) zwolnienie lekarskie („zw. lek.”).
4. Oceny końcowej z zajęć z WF nie wystawia się.
5. Studenci powtarzający semestr studiów z powodu zaległości w nauce innych niż zajęcia
z WF nie mają obowiązku ponownego uczestnictwa w tych zajęciach.
6. W przypadku studentów studiujących na kolejnym kierunku studiów dopuszcza się możliwość przepisania zaliczenia zajęć z WF. Decyzje w tej sprawie podejmuje
Kierownik SWFiS.
§6
Formy zajęć z WF
1. Zaliczenie zajęć z WF uzyskują studenci, którzy uczęszczają na niżej wymienione zajęcia organizowane przez Studium WFiS:
1) grupy studenckie;
2) grupy usprawniające;
3) przy współpracy z Klubem Uczelnianym AZS AGH: a) sekcje sportowe,
b) grupy turystyczne:
− turystyka rowerowa,
− turystyka górska,
− spływy kajakowe, rejsy żeglarskie,
c) obozy:
− sportowo – rekreacyjne,
− szkoleniowe.
2. Dopuszcza się również możliwość zaliczenia zajęć z WF realizowanych w ramach zajęć
sportowych innych niż wymienione w ust. 1, potwierdzonych w sposób formalny.
Decyzje w tej sprawie podejmuje Kierownik SWFiS.
3. O wyborze formy zajęć z WF student informuje prowadzącego grupę na początku
semestru.
§7 Obowiązujący strój sportowy
Do zajęć WF obowiązuje strój sportowy określony w regulaminie obowiązującym w poszczególnych obiektach sportowych AGH.
§8 Zwolnienia lekarskie
1. Zwolnienia z zajęć z WF na semestr lub rok akademicki są udzielane na podstawie zaświadczenia lekarskiego wydanego wyłącznie przez uprawnioną komisję lekarską
Rb-D.0201-1-8/17
 Strona 2 z 4

działającą w ramach podmiotu świadczącego usługi medyczne dla środowiska
akademickiego AGH i tylko takie są uwzględniane przez SWFiS.
2. Zaświadczenie takie winno być dostarczone do SWFiS prowadzącemu daną grupę,
na początku semestru.
3. W przypadku zwolnienia lekarskiego z części zajęć z WF, w tym także w trakcie trwania
semestru, student ma obowiązek odrobić tę część zajęć z WF w wybranej przez siebie formie, po wcześniejszym uzgodnieniu z prowadzącym daną grupę.
§9
Skierowanie do grup usprawniających
Studenci zainteresowani realizacją zajęć z WF w formie grup usprawniających powinni na początku semestru dostarczyć orzeczenie lekarskie prowadzącemu grupę wychowania fizycznego, który wskaże dalszy tok postępowania. Orzeczenie wydaje odpowiedni lekarz specjalista.
§ 10 Powtarzanie zajęć z WF
1. W przypadku niezaliczenia semestru zajęć z WF student zobowiązany jest go powtórzyć w kolejnym semestrze studiów.
2. Dopuszcza się możliwość powtarzania semestru zajęć zWF wramach tzw. grup pościgowych. Szczegółowe zasady organizacji grup pościgowych określa Kierownik SWFiS.
3. W ramach powtarzania zajęć, o których mowa w ust. 1 i ust. 2 student zobowiązany jest wnieść opłatę zgodnie z zarządzeniem Rektora w sprawie wysokości opłat za usługi edukacyjne.
§ 11 Przypadki indywidualne
Indywidualne sprawy studentów dotyczące zaliczenia zajęć z WF rozstrzyga Kierownik SWFiS lub działający z jego upoważnienia Z-ca ds. dydaktycznych.
§ 12 Przepisy przejściowe
1. Zasady zaliczania zajęć z WF określone w niniejszym zarządzeniu obowiązują studentów rozpoczynających studia w roku akademickim 2017/2018 oraz w latach następnych.
2. Zasady zaliczania zajęć z WF określone w niniejszym zarządzeniu obowiązują studentów rozpoczynających studia w semestrze letnim w roku akademickim 2016/2017 na studiach drugiego stopnia, jeżeli Rada Wydziału dostosowała program studiów w zakresie zajęć z wychowania fizycznego do wymogów określonych w niniejszym zarządzeniu oraz w uchwale Senatu AGH Nr 179/2016 z dnia 30 listopada 2016 r. w sprawie wytycznych dla rad podstawowych jednostek organizacyjnych Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie w zakresie projektowania programów kształcenia dla studiów pierwszego i drugiego stopnia.
§ 13 Przepisy końcowe
1. Traci moc Zarządzenie Nr 16/2015 Rektora Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie z dnia 8 czerwca 2015 r. w sprawie szczegółowych zasad organizacji zajęć z wychowania fizycznego w Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie, z zastrzeżeniem ust. 2.
2. Studenci, którzy rozpoczęli studia w roku akademickim 2015/2016 i 2016/2017, z zastrzeżeniem ust. 2, zaliczają zajęcia z WF na zasadach określonych w Zarządzeniu, o którym mowa w ust. 1.
Strona 3 z 4
Rb-D.0201-1-8/17

3. Studenci, którzy rozpoczęli studia w roku akademickim 2014/2015 bądź w latach wcześniejszych zaliczają zajęcia z WF na zasadach określonych w Zarządzeniu Nr 4/2012 Rektora Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie z dnia 15 lutego 2012 r. w sprawie szczegółowych zasad organizacji zajęć z wychowania fizycznego w Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie.
3. Zarządzenie wchodzi w życie z dniem ogłoszenia.           
`

export const taskCategories = {
  waitingTasks,
  ongoingTasks,
  finishedTasks,
}

export default tasks
