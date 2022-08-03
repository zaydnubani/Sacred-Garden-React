// grabs all <main> tags
const main = document.getElementsByTagName('main');

// loops through main tags
for(let i=0; i<main.length;i++){

    const menu_open = document.getElementById('menu');
    
    // array with background filenames
    const backgrounds_body = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];


    // changes main background color
    main[i].style = `background-image: url('/images/backgrounds/body/${backgrounds_body[Math.floor(Math.random() * backgrounds_body.length)]}');`;

    // closes nav menu
    main[i].children[0].children[1].addEventListener('click', () => {
        main[i].children[0].style = "right: -105%;";
    });

    // opens nav menu
    menu_open.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.parentNode.parentNode.children[0].style = "right: 0%;";
    });

};


