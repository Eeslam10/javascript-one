function search(){
    let applicationCode = document.getElementById('appCode').value
    let phone = document.getElementById('Code').value

    if( applicationCode === 'islam' && phone === '12345'){
        let success = document.getElementById('congrats')
        success.style.display = 'block'
        document.getElementById('decline').style.display = 'none'
    } else {
        let reject = document.getElementById('decline')
        reject.style.display = 'flex'
        document.getElementById('congrats').style.display = 'none'

    }
}

let closeBtn = document.querySelector('.fa-x')
closeBtn.addEventListener('click', function(){
    this.parentElement.style.display = 'none'
})






































































// function search(){

//     event.preventDefault

//     let applicationCode = document.getElementById('appCode').value;
//     let code = document.getElementById('Code').value;

//     if(applicationCode === 'islam' && code === '12345'){
//         let result =  document.getElementById('congrats')
//         result.style.display = 'block'  
//         document.getElementById('decline').style.display='none'
         
         
//     } else {
//         let result = document.getElementById('decline')
//         result.style.display = 'flex'
//         document.getElementById('congrats').style.display='none'
        
//     }
// }

// let closeBtn = document.querySelector('.fa-x');

//     closeBtn.addEventListener("click", function(){
//         this.parentElement.style.display = 'none'
//     })