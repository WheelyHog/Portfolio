let workPlaces = [
  {
    id: 1,
    title: 'Tel-Ran.de GmbH, Student in Frontend Web Developing',
    period: '2022 - Present',
    shorts: [
      'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
      'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
      'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
    ]
  },
  {
    id: 2,
    title: '"Hert", Warehouse worker',
    period: '2020 - 2022',
    shorts: [
      'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
      'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
      'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
    ]
  },
  {
    id: 3,
    title: '"Varta", low current systems engineer',
    period: '2018 - 20020',
    shorts: [
      'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
      'Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript',
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry"s iOS and Android mobile apps'
    ]
  },
  {
    id: 4,
    title: 'ZAO "Severgazavtomatika", Service engineer in Xerox department',
    period: '2005 - 20017',
    shorts: [
      'Engineered and maintained major features of Starry"s customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS',
      'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station',
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry"s iOS and Android mobile apps'
    ]
  },
  {
    id: 5,
    title: 'System administrator in limited liability company LLI "SOTA"',
    period: '2001 - 2005',
    shorts: [
      'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
      'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
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
