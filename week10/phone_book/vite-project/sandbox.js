const endpoint = `https://65a12bff600f49256fb112be.mockapi.io/g3/contact`

function request(url, method, context=null){
    const headers = {
        'Content-Type': 'application/json',
    };

    const options = {
        'method': method,
        'headers': headers,
        'body': context ? JSON.stringify(context) : null,
    };

    return fetch(url,options)
    .then(response => {
        if (response.ok) {
            return response.json()
    }
    else{
        console.log(response)
        return response.status
    }

}
    )
}

function init(){
    request(endpoint,"GET").then(data => render(data))
}

function render(contacts) {
    const contactList = document.getElementById('contact-list')
    contactList.innerHTML = ''
    contacts.forEach(contact => {
        const listItem = document.createElement('li')
        const listItemData = document.createElement('p')

        listItemData.textContent = `${contact.name} (${contact.phone_number})`
        listItem.setAttribute('id',contact.id)
        listItem.appendChild(listItemData)
        contactList.appendChild(listItem)
        listItemData.addEventListener('click',() => editcontact(contact.id))
    });

}

function editcontact(contactId) {
    const contactContainer = document.getElementById(`${contactId}`)

    let contactForm = document.querySelector('#dynamic-contact-form')
    console.log(contactForm)
    if (!contactForm) {
        contactFormTemplate = document.querySelector('#contact-form-template')
        let contactForm = contactFormTemplate.cloneNode()
        contactForm.id = 'dynamic-contact-form'
    }
    contactForm.classList.remove('hidden')
    contactContainer.appendChild(contactForm)

    contactForm.querySelector('#contact_id').value = contactId
    contactContainer.scrollIntoView({behavior: 'smooth', block: 'center'})
}

function canceledit() {
    const contactForm = document.querySelector('#dynamic-contact-form')
    if (contactForm) {
        contactForm.querySelector('#contact_id').value = ''
        contactForm.classList.add('hidden')
    }
}

document.getElementById('deletecontact').addEventListener('click', function (event) {
    const id = event.currentTarget.parentElement.querySelector('#contact_id')
    request(`${endpoint}/${id.value}`, "DELETE").then(code=>{
        init()
        console.log(code)
    })
})


document.getElementById('dynamic-contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let phone_number = document.getElementById('phone_number')
    let name = document.getElementById('name')
    let id = document.getElementById('contact_id')
    console.log(phone_number.value,name.value, id.value)

    request(`${endpoint}/${id.value}`, "PUT",{
        'phone_number': phone_number.value,
        'name': name.value,
    }).then(code=>{
        init()
        console.log(code)
    })
})


document.getElementById('newContact').addEventListener('submit', function (event) {
    event.preventDefault();

    let phone_number = document.getElementById('newphone_number')
    let name = document.getElementById('newname')
    console.log(phone_number.value,name.value)

    request(`${endpoint}`, "Post",{
        'phone_number': phone_number.value,
        'name': name.value,
    }).then(code=>{
        init()
        console.log(code)
    })
})


init()