const footer = document.getElementById('footer')
const url = window.location.toString().split('/')
let bool
url.map((res)=>{
    if(res!=='mint'){
        bool = false
    } else {
        bool = true
    }
})

if(bool === true){
    footer.style = 'display: none;'
}

