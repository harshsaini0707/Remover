document.getElementById("google").addEventListener('click',function(e){ 
    e.preventDefault();
    e.stopPropagation(); 
    console.log("google clicked");
},false)
      
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    
})

