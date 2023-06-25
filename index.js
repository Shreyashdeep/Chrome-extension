let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl= document.getElementById("input-el")
const inputBTn= document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
console.log(ulEl)

inputBTn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i=0; i< myLeads.length;i++) {
    ulEl.innerHTML +="<li>"+myLeads[i]+"</li"
}