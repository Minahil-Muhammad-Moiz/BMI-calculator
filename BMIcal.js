const form = document.querySelector('form')

form.addEventListener('submit', (eve)=>{
    eve.preventDefault()
    
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results');
    const guide = document.querySelector('#guide')
    
    if (weight === '' || weight <= 0|| isNaN(weight)){
        results.innerHTML = 'Please enter valid weight.'
    }else if (height === '' || height <= 0|| isNaN(height)){
        results.innerHTML = 'Please enter valid height.'
    }else{
        results.innerHTML = (weight/ ((height*height)/10000)).toFixed(2);
        let res = parseFloat(results.innerHTML);
        if (res < 18.5){
            results.style.color ='red'
            guide.style.color = 'red'
            guide.innerHTML =  `Under Weight`
        } else if (res >= 18.5 && res <= 24.9){
            results.style.color ='green'
            guide.style.color = 'green'
            guide.innerHTML = `Normal Weight`
        } else if(res >= 25 && res <= 29.9){
            results.style.color ='blue'
            guide.style.color = 'blue'
            guide.innerHTML = `Over Weight`
        }else{
            results.style.color ='red'
            guide.style.color = 'red'
            guide.innerHTML = 'Obesity'
        }
    }
})
