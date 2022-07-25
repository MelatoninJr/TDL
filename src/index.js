import './style.css';
import { compareAsc, format, isThisSecond } from 'date-fns'
const myTasks = []

const content = document.querySelector('#content')

const sidebar = document.createElement('div')
sidebar.classList.add('sidebar')
content.append(sidebar)

const sidebarcontainer = document.createElement('div')
sidebarcontainer.classList.add('sidebarcontainer')
sidebar.append(sidebarcontainer)

const sidebarTitle = document.createElement('div')
sidebarTitle.classList.add('sidebartitle')
sidebarTitle.textContent = 'projects'
sidebarcontainer.append(sidebarTitle)

const sidebarLine = document.createElement('div')
sidebarLine.classList.add('sidebarline')
sidebarcontainer.append(sidebarLine)

const mainbody = document.createElement('div')
mainbody.classList.add('mainbody')
content.appendChild(mainbody)

const formSubmission = document.createElement('div')
formSubmission.classList.add('formsubmission')
mainbody.append(formSubmission)

const formbutton = document.createElement('button')
formbutton.classList.add('formbutton')
formSubmission.append(formbutton)

const formbuttonicon = document.createElement('ion-icon')
formbuttonicon.classList.add('formbuttonicon')
formbuttonicon.name = 'add-outline'
formbutton.append(formbuttonicon)

formbutton.addEventListener("click", pop)
formbutton.addEventListener("click", function() {
    const buttonRemove = document.body.querySelector('.formbutton')
    buttonRemove.remove()
})



function addButton() {
    const formbutton = document.createElement('button')
    formbutton.classList.add('formbutton')
    formSubmission.append(formbutton)

    const formbuttonicon = document.createElement('ion-icon')
    formbuttonicon.classList.add('formbuttonicon')
    formbuttonicon.name = 'add-outline'
    formbutton.append(formbuttonicon)
}


function display(another) {

const cardExample = document.createElement('div')
cardExample.classList.add('card')
mainbody.append(cardExample)
cardExample.value = another.time

const formTwo = document.createElement('form')
cardExample.append(formTwo)

const radioOne = document.createElement('label')
radioOne.class = 'switch'
formTwo.append(radioOne)

const radioOneInput = document.createElement('input')
radioOneInput.type = 'checkbox'
radioOne.append(radioOneInput)

const radioOneSpan = document.createElement('span')
radioOneSpan.class = 'slider'
radioOne.append(radioOneSpan)

const thisTitle = document.createElement('div')
thisTitle.innerText = another.title
cardExample.append(thisTitle)

/*
const theDescription = document.createElement('div')
theDescription.innerText = another.description
cardExample.append(theDescription)
*/
const date = document.createElement('div')
date.innerText = another.date
cardExample.append(date)

const trashcan = document.createElement('button')
trashcan.classList.add('trashbutton')
trashcan.type = 'button'
trashcan.value = another.time
cardExample.append(trashcan)

const trashIcon = document.createElement('ion-icon')
trashIcon.classList.add('trashicon')
trashIcon.name = 'trash-outline'
trashIcon.value = another.time
trashcan.append(trashIcon)

trashcan.addEventListener("click", function(e) {
    let amount = e.target
    let grab = document.querySelector('.card')
    for (let i = 0; i < myTasks.length; i++) {
        if(Number(amount.value) === myTasks[i].time) {
            amount.closest('.card').remove()
        }
    }
})






}



function pop() {
    const popup = document.createElement('div')
    popup.classList.add('popup')
    formSubmission.append(popup)

    const form = document.createElement('form')
    popup.append(form)

    const firstLabel = document.createElement('label')
    firstLabel.for = 'task'
    firstLabel.innerText = 'Task Title'
    form.append(firstLabel)

    const firstInput = document.createElement('input')
    firstInput.type = 'text'
    firstInput.id = 'task'
    firstInput.name = 'task'
    firstInput.setAttribute("requried", "")
    form.append(firstInput)

    const secondLabel = document.createElement('label')
    secondLabel.for = 'Description'
    secondLabel.innerText = 'Description'
    form.append(secondLabel)

    const secondInput = document.createElement('input')
    secondInput.type = 'text'
    secondInput.id = 'description'
    secondInput.name = 'description'
    form.append(secondInput)

    const datePicker = document.createElement('label')
    datePicker.innerText = 'Date'
    form.append(datePicker)

    const thirdInput = document.createElement('input')
    thirdInput.type = 'date'
    thirdInput.id = 'date'
    thirdInput.name = 'date'
    form.append(thirdInput)

    const fourthLabel = document.createElement('label')
    fourthLabel.for = 'status'
    fourthLabel.innerText = 'Importance'
    form.append(fourthLabel)

    const fourthInput = document.createElement('select')
    fourthInput.name = 'status'
    fourthInput.id = 'status'
    form.append(fourthInput)

    const firstSelection = document.createElement('option')
    firstSelection.value = 'low'
    firstSelection.innerText = 'low'
    fourthInput.append(firstSelection)

    const secondSelection = document.createElement('option')
    secondSelection.value = 'medium'
    secondSelection.innerText = 'medium'
    fourthInput.append(secondSelection)

    const thirdSelection = document.createElement('option')
    thirdSelection.value = 'high'
    thirdSelection.innerText = 'high'
    fourthInput.append(thirdSelection)

    const fifthInput = document.createElement('input')
    fifthInput.classList = 'tasksubmitbutton'
    fifthInput.type = 'button'
    fifthInput.value = 'button'
    form.append(fifthInput)


 




  function NewTask(title, description, date, importance) {
        this.time = Date.now();
        this.title = title;
        this.description = description;
        this.date = date;
        this.importance = importance
    }

    const addTask = (e) => {
        let anotherTask = new NewTask(
            document.querySelector('#task').value,
            document.querySelector('#description').value,
            document.querySelector('#date').value,
            document.querySelector('#status').value
        )
        myTasks.push(anotherTask)
        console.log(myTasks)
        document.querySelector('.popup').remove()
        display(anotherTask)

    }

    fifthInput.addEventListener("click", addTask)
    fifthInput.addEventListener("click", function() {

        addButton()
        let testtest = document.body.querySelector('.formbutton')
        testtest.addEventListener("click", pop)
        testtest.addEventListener("click", function() {
            const buttonRemove = document.body.querySelector('.formbutton')
            buttonRemove.remove()
        })

    })




}


