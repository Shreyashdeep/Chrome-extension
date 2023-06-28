let myLeads = []
const inputEl= document.getElementById("input-el")
const inputBTn= document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
let leadsFromLocalStorage= JSON.parse( localStorage.setItem("myLeads"))

localStorage.setItem("myLeads", "www.examplelead.com")

inputBTn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    renderLeads()
    
})
function renderLeads() {
    let listItems = []
    for(let i=0; i< myLeads.length;i++) {
        listItems+= `
            <li>
                <a target="_blank" href='${myLeads[i]}'>"${myLeads[i]}"</a>
            </li>
        `
    }
    ulEl.innerHTML =listItems 
}
