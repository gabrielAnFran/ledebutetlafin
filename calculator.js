var n1, n2, result;

document.querySelector('#mais').addEventListener('click', function(){
    n1= document.querySelector('#n1').value;
    n2= document.querySelector('#n2').value;
    result= parseInt(n1)+parseInt(n2);
    
    alert(result)
})
document.querySelector('#menos').addEventListener('click', function(){
    n1= document.querySelector('#n1').value;
    n2= document.querySelector('#n2').value;
    result= parseInt(n1)-parseInt(n2);
    
    alert(result)
})
document.querySelector('#vezes').addEventListener('click', function(){
    n1= document.querySelector('#n1').value;
    n2= document.querySelector('#n2').value;
    result= parseInt(n1)*parseInt(n2);
    
    alert(result)
})
document.querySelector('#dividir').addEventListener('click', function(){
    n1= document.querySelector('#n1').value;
    n2= document.querySelector('#n2').value;
    result= parseInt(n1)/parseInt(n2);
    
    alert(result)
})