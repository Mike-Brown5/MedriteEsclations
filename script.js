var getval = document.getElementsByName("getEscaltions")[0];

getval.addEventListener('input' , function()
{
    document.getElementById('big').innerHTML="value details is "+this.value;
});
