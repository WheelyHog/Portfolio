let workPlaces = [
    {
        id: 1,
        title: 'Tel-Ran.de GmbH, Student in Frontend Web Developing',
        period: '2022 - Present',
        shorts: [
            'Learning the basics of Java, Git, Linux and QA Testing',
            'Deep learning HTML, CSS, Javascript, React. Building applications based on learned tools',
            'Freelance activities related to web application development'
        ]
    },
    {
        id: 2,
        title: '"Varta", low current systems engineer',
        period: '2018 - 2020',
        shorts: [
            'Development of an online store based on CMS Joomla',
            'Installation, configuration and maintenance of video surveillance and fire alarm systems,laying of cable routes',
            'Laying a local network and fiber optics at large enterprises before starting production(e.g. "Leoni" plants in Ivano-Frankivsk region)'
        ]
    },
    {
        id: 3,
        title: 'ZAO "Severgazavtomatika", Service engineer in Xerox department',
        period: '2005 - 2017',
        shorts: [
            'In parallel with the main work, I was engaged in the development, creation, launch and support of the site for the company "PKTI"',
            'Study of technical documentation. Carrying out warranty repairs. Ordering spare parts for copiers and keeping track of the minimum stock in the warehouse',
            'Participation in webinars on technical support for Xerox products. Researching new products. Passing advanced training courses'
        ]
    },
    {
        id: 4,
        title: 'System administrator in limited liability company LLI "SOTA"',
        period: '2001 - 2005',
        shorts: [
            'Maintaning and administrating of the organization\'s local network, monitoring the technical condition of computers in the network',
            'Participation in the development of the company\'s website',
            'SEO - optimization, selection of keywords and increasing the status in the issuance of search queries'
        ]
    }

]

let workItemList = document.querySelectorAll('.work-item');

let workTitle = document.querySelector('.description-title');
let workPeriod = document.querySelector('.period');
let descriptionDiv = document.querySelector('.description-items');


for (let i = 0; i < workItemList.length; i++) {
    workItemList[i].addEventListener('click', (event) => {
        for (item of workItemList) {
            item.classList.remove('work-active')
        }
        event.target.classList.add('work-active')
        workTitle.innerText = workPlaces[i].title;
        workPeriod.innerText = workPlaces[i].period;
        descriptionDiv.innerHTML = '';
        for (item of workPlaces[i].shorts) {
            let shortDiv = document.createElement('div');
            shortDiv.classList = 'description-item'

            let markerDiv = document.createElement('div');
            markerDiv.classList = 'item-marker';
            markerDiv.innerHTML = '<i class="las la-fast-forward">';

            let stringDiv = document.createElement('div');
            stringDiv.classList = 'item-string';
            stringDiv.innerText = item;

            shortDiv.append(markerDiv, stringDiv);
            descriptionDiv.append(shortDiv)
        }

    })
}
// =========================== avatar ====================
const avatar = document.getElementById('avatar-img')
const changeToColor = () => {
    avatar.src = './images/oggy.png'
}

const changeToBlack = () => {
    avatar.src = './images/oggy_b.png'
}

// ============================== wow =============================

let wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // change this if you are not using animate.css
        offset: 0,          // default
        mobile: true,       // keep it on mobile
        live: true        // track if element updates
    }
)
wow.init();

// =========================== burger =============================
const mobile_menu = document.querySelector('.burger')
const top_line = document.querySelector('.l-top')
const middle_line = document.querySelector('.l-middle')
const bottom_line = document.querySelector('.l-bottom')
const modal = document.querySelector('.modal')

let mob_menu = false

mobile_menu.onclick = () => {
    mob_menu = !mob_menu;
    console.log(mob_menu)
    if (mob_menu) {
        modal.style.display = 'block'
        top_line.style.rotate = '45deg';
        top_line.style.transform = 'translate(6px, 6px)';

        middle_line.style.transform = 'rotate(45deg)';

        bottom_line.style.rotate = '-45deg';
        bottom_line.style.transform = 'translate(6px, -5px)';


    } else {
        console.log(mob_menu)
        top_line.style.rotate = '0deg';
        top_line.style.transform = 'translate(0, 0)';

        middle_line.style.transform = 'rotate(0deg)';

        bottom_line.style.rotate = '0deg';
        bottom_line.style.transform = 'translate(0, 0)';

        modal.style.display = 'none'

    }
}

const mob_menu_list = document.querySelectorAll('.mobile_menu_item')

for (let i = 0; i < mob_menu_list.length; i++) {
    mob_menu_list[i].onclick = () => {
        mob_menu = !mob_menu;
        modal.style.display = 'none'

        top_line.style.rotate = '0deg';
        top_line.style.transform = 'translate(0, 0)';

        middle_line.style.transform = 'rotate(0deg)';

        bottom_line.style.rotate = '0deg';
        bottom_line.style.transform = 'translate(0, 0)';
    }
}
