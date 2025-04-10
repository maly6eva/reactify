import {useState} from 'react'

import './App.css'

const question = [
    {
        number: '1',
        title: "Как узнать какого типа переменная? Что и в каком виде возвращает typeof",
        description: (
            <>
                Оператор  <u><strong>typeof</strong></u>  возвращает тип аргумента. Это полезно, когда мы хотим обработать значения разных типов по-разному или просто хотим сделать проверку.
                <br/>
                У него есть 2 синтаксические формы:
                <br/>
                <br/>
                //Обычный синтаксис
                <br/>
                typeof 5 // Выведет 'number'
                <br/>
                <br/>
                //Синтаксис, напоминающий вызов функции. Встречается реже.
                <br/>
                typeof (5) // Выведет 'number'
                <br/>
                <br/>
                Если передается выражение, то нужно заключать его в скобки, тк <u><strong>typeof</strong></u> имеет более высокий приоритет, чем бинарные операторы. Другими словами, скобки необходимы для определения типа значения, которое получилось в результате выполнения выражения в них.
                <br/>
                <br/>
                typeof 50 + ' Квартир'; // Выведет 'number Квартир'
                <br/>
                typeof (50 + ' Квартир'); // Выведет 'string'
            </>

        ),
    },
    {
        number: '2',
        title: "Зачем для тега <script> добавляют атрибуты async и defer?",
        description: (
            <>
                Без использования атрибутов в теге <strong>&lt;script&gt;</strong>, когда браузер загружает HTML и доходит до тега <strong>&lt;script&gt;</strong>,
                то он может дальше строить DOM, пока не выполнит скрипт. Соответственно потребуется больше времени для того, чтобы показать пользователю готовую страницу. <br />
                Для решения этой проблемы тег <strong>&lt;script&gt;</strong> можно поместить в конец страницы. Но это не идеальное решение, так как выполнение скрипта может начаться с сильной задержкой. Для этого есть атрибуты:
                <br /><br />
               <u><strong>async:</strong></u>  Свойство async для тега <strong>&lt;script&gt;</strong> указывает браузеру загружать скрипт асинхронно, не блокируя последующий парсинг HTML или выполнение других скриптов на странице. <br />
                Скрипт с атрибутом async загружается параллельно с парсингом HTML и выполняется сразу после завершения загрузки. Порядок выполнения скриптов не гарантируется. <br />
                Подходит для скриптов, которые не зависят от других ресурсов на странице и могут быть выполнены независимо от них. <br /><br />
                <u><strong>defer:</strong></u> Свойство defer для тега <strong>&lt;script&gt;</strong> говорит браузеру загружать скрипт асинхронно, но откладывать его выполнение до завершения парсинга HTML. <br />
                Скрипты с атрибутом defer загружаются параллельно с парсингом HTML, но их выполнение откладывается до завершения парсинга. Они выполняются в том порядке, в котором указаны в HTML, перед событием DOMContentLoaded. <br />
                Использование async и defer помогает ускорить загрузку страницы, улучшить воспроизводимость скриптов и повысить производительность веб-страницы.
            </>
        ),
    },
    {
        number: '3',
        title: "Что такое замыкания в JS и почему они важны?",
        description: "Замыкания в JS - это функция, которая запоминает свое окружение во время создания и может использовать переменные из этого окружения даже после того, как это окружение прекратило свое существование. Они важны, потому что позволяют создавать приватные переменные, сохранять состояние и делать код более модульным.",
    },
    {
        number: '4',
        title: "Что такое NaN? Какого типа это значения? Как можно узнать, равно ли значение переменной NaN?",
        description:
        <>
        NaN означает 'Not-A-Number' и является специальным значением в JS, которое указывает на ошибку при выполнении математических операций, когда результат не является числом. Тип значения NaN в JS - это число (Number).
            <br/>
            Чтобы проверить,равно ли значение переменной NaN, можно использовать функцию  isNaN(). Например:
            <br/>
            <br/>
            let result = 10 / 'привет'; <br/>
            console.log(isNaN(result)); // Вернет true, т к результат деления не является числом
            </>
    },
    {
        number: '5',
        title: "Какие бинарные операторы вы знаете?",
        description:

        <>
            Бинарные операторы работают с двумя операндами.
            <br /><br />
            <strong>1. Арифметические  (Используются для выполнения математических операций.): </strong>
            <br />
            <code>(+)</code> — сложение: <code>a + b</code><br />
            <code>(-)</code> — вычитание: <code>a - b</code><br />
            <code>(*)</code> — умножение: <code>a * b</code><br />
            <code>(/)</code> — деление: <code>a / b</code><br />
            <code>(%)</code> — остаток от деления: <code>a % b</code><br />
            <code>(**)</code> — возведение в степень: <code>a ** b</code>
            <br /><br />
            <strong>2. Операторы сравнения (Используются для сравнения двух значений.):</strong>
            <br />
            <code>(==)</code> — нестрогое равенство<br />
            <code>(!=)</code> — нестрогое неравенство<br />
            <code>(===)</code> — строгое равенство<br />
            <code>(!==)</code> — строгое неравенство<br />
            <code>(&gt;)</code> — больше<br />
            <code>(&lt;)</code> — меньше<br />
            <code>(&gt;=)</code> — больше или равно<br />
            <code>(&lt;=)</code> — меньше или равно
            <br /><br />
            <strong>3. Логические  (Используются для выполнения логических операций.):</strong>
            <br />
            <code>(&&)</code> — логическое И<br />
            <code>(||)</code> — логическое ИЛИ
        </>
    },
];

function App() {
    const [activeIndex, setActiveIndex] = useState({})


    function toggleArrow(item) {
        setActiveIndex((prev) => ({
            ...prev,
            [item]: !prev[item]
        }))
    }

    return (
        <>
            <h1>Вопросики!</h1>
            {question.map((item, index) => (
                <div className="arrow" key={index}>
                    <div className="content">
                        {activeIndex[index] ? (
                            <>
                                <p className="question"> {item.title}</p>
                                <p  className="answer" >{item.description}</p>
                                <button  onClick={() => toggleArrow(index)}>&#9825;</button>

                            </>
                        ) : (
                            <>
                                <p className="question">{item.number} {item.title}</p>
                                <button onClick={() => toggleArrow(index)}> &hearts;</button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}


export default App


// <h1>Вопросики!</h1>
// {question.map((item, index) => (
//     <div className="arrow" key={index}>
//         <div className="content">
//             <p className="question">{item.title}</p>
//             {activeIndex[index] && <p className="answer">{item.description}</p>}
//         </div>
//         <button onClick={() => toggleAnswer(index)}>❤️</button>
//     </div>
// ))}


// import './App.css';
//
// const question = [
//     {
//         title: 'Props - это...',
//         description:
//             'Props - это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.',
//     },
//     {
//         title: 'Зачем для тега <script> добавляют атрибуты async и defer?',
//         description:
//             'Без использования атрибутов в теге <script>, когда браузер загружает HTML и доходит до тега <script>, он может остановить построение DOM до выполнения скрипта. Атрибут async позволяет загружать скрипт параллельно с HTML, а defer — откладывает выполнение до завершения парсинга HTML. async не гарантирует порядок, defer — гарантирует и выполняется до DOMContentLoaded.',
//     },
//     {
//         title: 'Что такое замыкания в JS и почему они важны?',
//         description:
//             'Замыкания в JS — это функция, которая запоминает своё лексическое окружение и может обращаться к переменным вне своей области видимости. Это важно для инкапсуляции, хранения состояния и создания приватных переменных.',
//     },
// ];
//
// function App() {
//     const [activeIndex, setActiveIndex] = useState({});
//
//     function toggleAnswer(index) {
//         setActiveIndex((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     }
//
//     return (
//         <>
//             <h1>Вопросики!</h1>
//             {question.map((item, index) => (
//                 <div className="arrow" key={index}>
//                     <div className="content">
//                         <p className="question">{item.title}</p>
//                         {activeIndex[index] && <p className="answer">{item.description}</p>}
//                     </div>
//                     <button onClick={() => toggleAnswer(index)}>❤️</button>
//                 </div>
//             ))}
//         </>
//     );
// }
//
// export default App;