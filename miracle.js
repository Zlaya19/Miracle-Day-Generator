
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
          
      function miracleDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const miracle = miracleDate(new Date(2021, 0, 1), new Date(2021, 11, 31));
      console.log(miracle.getMonth());


      output.innerHTML = `<h1>${miracle.getDate()} ${miracle.getMonth()} ${miracle.getFullYear()}</h1> `;
});


/* 
 function miracleDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  miracleDate(new Date(2021, 0, 1), new Date(2021, 11, 31)); */