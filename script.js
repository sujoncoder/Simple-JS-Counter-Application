// Collect Id
const increamentEl = document.getElementById('increment')
const decreamentEl = document.getElementById('decrement')
const counttEl = document.getElementById('count')

// Initial state
let count = 0


// Create Handler Function
increamentEl.addEventListener("click",()=>{
    count++;
    counttEl.innerText = count
})


decreamentEl.addEventListener("click",()=>{
    count--;
    counttEl.innerText = count
})

