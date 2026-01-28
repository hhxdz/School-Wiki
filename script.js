const request = document.querySelector('#search-input');
const searchBtn = document.querySelector(".search-button");
const mainMenu = document.querySelector('.main-menu');
function searchWiki(){
    const query = request.value.trim();
        if (query !== "") {
        const url = `https://uk.wikipedia.org/wiki/${encodeURIComponent(query)}`;
        window.location.href = url;
    }
}
document.querySelector('.input').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        searchWiki();
    }
});
function toggleMenu(){
    mainMenu.classList.toggle('display');
}

const body = document.querySelector('.body');
const darkTheme = document.querySelector('#dark-circle');
const lightTheme = document.getElementById('light-circle');
const links = document.querySelectorAll('.link');
const select = document.querySelector('.lang');
const shortInfo = document.querySelector('.short-info');
const topLine = document.querySelector('.top-line');
const lines = document.querySelectorAll('.line');
const logoText = document.querySelectorAll('.logo-text');
const active = document.querySelectorAll('.active');
const menuBtn = document.querySelector('#main-menu-button');


darkTheme.addEventListener('click', ()=>{
    body.classList.remove('light');
    body.classList.add('dark');
    darkTheme.classList.add('active-option');
    lightTheme.classList.remove('active-option');
    links.forEach(link => {
        link.classList.add('link-light');
        link.classList.remove('link')
    });
    select.style.color = "#88a3e8"
    select.style.backgroundColor = "#101418";
    request.style.backgroundColor = "#101418";
    searchBtn.style.backgroundColor = "#202122";
    searchBtn.style.color = "#fff";
    shortInfo.style.backgroundColor = "#202122";
    topLine.style.backgroundColor = "#72777D";
    lines.forEach(line => {
        line.style.backgroundColor = "#54595D";
    });
    logoText.forEach(text => {
        text.style.color = "#fff"
    });
    active.forEach(text => {
        text.style.color = "#fff"
    });
    menuBtn.innerHTML = `
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#fff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#fff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"></path> </g></svg> 
    `;
    mainMenu.style.backgroundColor = "#101418";
});

lightTheme.addEventListener('click', ()=>{
    body.classList.remove('dark');
    body.classList.add('light');
    darkTheme.classList.remove('active-option');
    lightTheme.classList.add('active-option');
    links.forEach(link => {
        link.classList.remove('link-light');
        link.classList.add('link');
    });
    select.style.backgroundColor = "#fff";
    select.style.color = "#3366CC";
    request.style.backgroundColor = "#fff";
    searchBtn.style.backgroundColor = "#fff";
    searchBtn.style.color = "#000";
    shortInfo.style.backgroundColor = "#fff";
    topLine.style.backgroundColor = "#A2A9B1";
    lines.forEach(line => {
        line.style.backgroundColor = "#C8CCD1";
    });
    logoText.forEach(text => {
        text.style.color = "#000"
    });
    active.forEach(text => {
        text.style.color = "#000"
    });
    menuBtn.innerHTML = `
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2.4" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>
    `;
    mainMenu.style.backgroundColor = "#fff";
})


// TRANSLATION

const translation = {
    'ua':{
        history: 'Історія',
        historyTitle1:'Зародження шкільництва в Східниці',
        historyText1: `Наприкінці XVІІІ–на початку ХІХ ст., завдяки послідовній позиції Греко-Католицької Церкви та австрійської влади у сфері народної освіти, 
            у Галичині активізувався процес заснування парафіяльних та тривіяльних шкіл. Після прийняття в імперії Габсбурґів закону «Політична 
            устава шкільна» (11 серпня 1805 р.), відповідно до якого в кожній місцевості, де був парафіяльний священик та провадилися метричні книги, 
            мала бути парафіяльна школа. У парафії Східниця на той час були метричні книги, отже, юридичних перешкод для створення школи не було.
            Уперше Східницька парафіяльна школа згадується у шкільному шематизмі 1837 р., однак у ньому не подано ні числа учнів, ні імені вчителя та його платні. 
            Цілком можливо, що через брак вчителя або учнів школа на той час була нечинною. Польський дослідник парафіяльного шкільництва
            на українсько-польському пограниччі Р. Пельчар на основі тих же документів стверджує про існування школи в Східниці у 1846-49, 1853-54 рр.
        `,

    },
    'en':{
        history: 'History',
        historyTitle1:'The birth of schooling in Skhidnytsia',
        historyText1:`At the end of the 18th–beginning of the 19th century, thanks to the consistent position of the Greek Catholic Church and the Austrian authorities in the field of public education, the process of establishing parish and trivial schools intensified in Galicia.
            After the adoption of the law "Political School Regulations" (August 11, 1805) in the Habsburg Empire, according to which there was to be a parish school in every locality where there was a parish priest and birth records were kept. The parish of Skhidnytsia had birth records at that time, therefore, there were no legal obstacles to the establishment of a school.
            The Skhidnytska parish school is first mentioned in the school shematism of 1837, however, it does not provide the number of students, the name of the teacher and his salary. It is quite possible that due to the lack of teachers or students, the school was inactive at that time.
            Polish researcher of parish schools on the Ukrainian-Polish border, R. Pelczar, based on the same documents, claims the existence of a school in Skhidnytsia in 1846-49, 1853-54.
        `,
        

    }
};




function changeLanguage(language){
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element =>{
        const key = element.getAttribute('data-key');
        element.textContent = translation[language][key];
    }) 
};

select.addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

changeLanguage(select.value)

