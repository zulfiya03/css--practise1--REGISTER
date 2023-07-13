const nameInput = document.getElementById('name')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const numberInput = document.getElementById('number')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmpassword')
const registerBtn = document.getElementById('register')
const list = document.getElementById('list')

let nameM = ['Asadbek', 'Zulfiya']
let usernameM = ['Xudarganov', 'Abdullaeva']
let emailM = ['hgcujhikj', '18tuvuhbijn']
let numberM = ['8999999', '18898989898']
let passwordM = ['hgcujhikj', '18tuvuhbijn']
let confirmpasswordM = ['hgcujhikj', '18tuvuhbijn']

table()

registerBtn.onclick = () => {
    let name = nameInput.value
    let username = usernameInput.value
    let email= emailInput.value
    let number = numberInput.value
    let password = passwordInput.value
    let confirmpassword = confirmPasswordInput.value

    nameM.push(name)
    usernameM.push(username)
    emailM.push(email)
    numberM.push(number)
    passwordM.push(password)
    confirmpasswordM.push(confirmpassword)

    list.innerHTML = ''
    
    table()

    nameInput.value = ""
    usernameInput.value = ""
    emailInput.value = ""
    numberInput.value = ""
    passwordInput.value = ""
    confirmPasswordInput.value = ""
}

function table() {
    for(let i = 0; i < name.length; i++) {
        list.innerHTML += `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${nameM[i]}</td>
            <td>${usernameM[i]}</td>
            <td>${emailM[i]}</td>
            <td>${numberM[i]}</td>
            <td>${passwordM[i]}</td>
            <td>${confirmpasswordM[i]}</td>
            <td>
                <button class="btn btn-primary" onclick="del(${i})"> Delete </button>
            </td>
        </tr>
        `
    }
}

function del(i) {
    nameM.splice(i, 1); 
    usernameM.splice(i, 1); 
    emailM.splice(i, 1); 
    numberM.splice(i, 1); 
    passwordM.splice(i, 1); 
    confirmpasswordM.splice(i, 1); 
    list.innerHTML = ''; 
    table();
}

//registerga a href qo`yish kk registwrni bosgandan kn next page ga
//o`tishi kerek. va keyyingi sahifada list/jadval bo`lishi kerak
//bu jadvalda regiterdagi ma`lumotlar jamlangan bo`lishi shart! 

