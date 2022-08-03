wind = window.location.href.split('/');
const popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click',() => {
    window.localStorage.setItem('popped', 'true');
})

const bunk = () => {
    wind = window.localStorage.getItem('popped')
    const popup = document.getElementsByClassName('popup')
    
    for(let i = 0; i < popup.length; i++){
        if (wind === 'true'){
            console.log('true');
            popup[i].style = 'display: none'
    
        } else {
            console.log('false')
            popup[i].style = 'top: 50%; left: 50%; transform: translate(-50%, -50%);'
        }
    }
}

window.onload = bunk()