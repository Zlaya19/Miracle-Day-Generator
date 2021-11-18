
const btn = document.getElementById('btn');
const output = document.getElementById('output');

//  The event listener starts a function which gives us a random date from 1.1. to 31.12.

btn.addEventListener('click', function getTheDate(){
          
      function miracleDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const miracle = miracleDate(new Date(2022, 0, 1), new Date(2022, 11, 31));
      

      if(miracle.getMonth() === 0){
        return getTheDate();
      }

      //  the above mentioned value will be displayed on the output div

      output.innerHTML = `<h1>${miracle.getDate()}.${miracle.getMonth()}.${miracle.getFullYear()}</h1> `;
});
