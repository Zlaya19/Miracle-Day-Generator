
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', function getTheDate(){
          
      function miracleDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const miracle = miracleDate(new Date(2022, 0, 1), new Date(2022, 11, 31));
      console.log(miracle.getMonth());

      if(miracle.getMonth() === 0){
        return getTheDate();
      }


      output.innerHTML = `<h1>${miracle.getDate()}.${miracle.getMonth()}.${miracle.getFullYear()}</h1> `;
});
 
/* 
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);

console.log(diff);
 */
