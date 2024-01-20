let inputValue = document.getElementById('screen-box').innerHTML=0;

const number = document.querySelectorAll('.numbers');
  number.forEach(function (item) {
     item.addEventListener('click', function (e) {
        if(inputValue.innerText === 'NAN'){
            inputValue.innerText = '';
        }
        if(inputValue.innerText === '0') {
            inputValue.innerText = '';
        }
        inputValue.innerText += e.target.innerText.trim();
     });
  });

  const calculate = document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
      console.log(e.target.innerHTML);
    });
  });