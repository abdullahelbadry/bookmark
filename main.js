var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var searchInput = document.getElementById("search");
var myBtn = document.getElementById("myBtn");
var siteContainer;
var currentIndex = 0;
if(localStorage.getItem("siteList") == null){
    siteContainer = [];
} 
else {
    siteContainer = JSON.parse(localStorage.getItem("siteList"));
    displayData();
}

function add(){
    if(myBtn.innerHTML == "Add Site"){
        addSite();
    } else {
        editSite();
    }
}

function addSite(){
    var site = {
        name : siteNameInput.value,
        url: siteURLInput.value,
    }
    if(siteNameInput.value != "" && siteURLInput != ""){
        siteContainer.push(site);
        localStorage.setItem("siteList", JSON.stringify(siteContainer));
        displayData();
        clearForm();
    } else {
        window.alert("Please Fill All Data First!")
    }
}
function displayData(){
    var temp = ""
    for(var i=0; i<siteContainer.length; i++){
        temp += `<tr>
        <td>${i}</td>
        <td>${siteContainer[i].name}</td>
        <td><a href="${siteContainer[i].url}">${siteContainer[i].url}</a></td>
        <td><button class="btn-outline-warning text-black" onclick="updateSite(${i})"> Update</button></td>
        <td><button class="btn-outline-danger text-black" onclick="deleteSite(${i})"> Delete</button></td>
        <td><button class="btn-outline-success"><a href="${siteContainer[i].url}">Visit Site</a></button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp;
}


function updateSite(index){
    currentIndex = index;
    siteNameInput.value = siteContainer[index].name;
    siteURLInput.value = siteContainer[index].url;
    myBtn.innerHTML = "Update Site";
}


function editSite(){
    siteContainer[currentIndex].name = siteNameInput.value;
    siteContainer[currentIndex].url = siteURLInput.value;
    myBtn.innerHTML = "Add Site"
    localStorage.setItem("siteList", JSON.stringify(siteContainer));
    displayData();
    clearForm();
}

function deleteSite(index){
    siteContainer.splice(index, 1);
    displayData();
    localStorage.setItem("siteList", JSON.stringify(siteContainer));
}

function search(trim){
    var cartona = "";
    for(var i = 0; i < siteContainer.length; i++){
        if(siteContainer[i].name.toLowerCase().includes(trim.toLowerCase())){
            cartona += `<tr>
            <td>${i}</td>
            <td>${siteContainer[i].name}</td>
            <td><a href="${siteContainer[i].url}">${siteContainer[i].url}</a></td>
            <td><button class="btn-outline-warning text-black" onclick="deleteData(${i})"> Update</button></td>
            <td><button class="btn-outline-danger text-black" onclick="deleteData(${i})"> Delete</button></td>
            <td><button class="btn-outline-success"><a href="${siteContainer[i].url}">Visit Site</a></button></td>
        </tr>`
        }
    }
    document.getElementById("tableBody").innerHTML = cartona;
}


function clearForm(){
    siteNameInput.value = "";
    siteURLInput.value = "";
}

function visitSite(index){
    siteContainer[index].name = siteNameInput.value;
    siteContainer[index].url = siteURLInput.value;

}


