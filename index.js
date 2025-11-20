let count = 0
let peopleCountEl = document.getElementById('people-count')
let saveEl = document.getElementById('save-el')

function increment() {
    count +=1;
    peopleCountEl.textContent = count
    console.log(count)
}

function save() {
   let countStr = count + " - "
   saveEl.textContent += countStr

   //reassign count to 0
   //This sets the people-el back to 0 and allow the user to count again
   count = 0
   peopleCountEl.textContent = count
}