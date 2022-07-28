import './style.css';
import { compareAsc, format, isThisSecond } from 'date-fns'
const myTasks = []
const myProjects = []
const local = []
let envy = JSON.parse(localStorage.getItem("array")) 
function envyTest () {
    for(let i = 0; i < envy.length; i++) {
        local.push(envy[i])
    }
}
if(localStorage.length > 0) {
    envyTest()
}






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

const addProjectButton = document.createElement('button')
addProjectButton.classList.add('formbuttontwo')
sidebarcontainer.append(addProjectButton)

const addProject = document.createElement('ion-icon')
addProject.classList.add('formbuttonicontwo')
addProject.name = 'add-outline'
addProjectButton.append(addProject)

const sidebarcontainertwo = document.createElement('div')
sidebarcontainertwo.classList.add('sidebarcontainertwo')
sidebar.append(sidebarcontainertwo)

const sidebarformcontainer = document.createElement('div')
sidebarformcontainer.classList.add('sidebarformcontainer')
sidebarcontainertwo.append(sidebarformcontainer)

const projectButton = document.createElement('button')
projectButton.classList.add('projectbutton')
projectButton.textContent = 'Default Project'
sidebarcontainertwo.append(projectButton)

projectButton.addEventListener("click", function homeLoad() {
    homePage()
    projectButton.removeEventListener("click", homeLoad)
})







const projectForm = {
    projectPop: function() {
        const formbox = document.createElement('div')
        formbox.classList.add('formbox')
        sidebarformcontainer.append(formbox)


        const projectformdiv = document.createElement('form')
        projectformdiv.classList.add('form')
        formbox.append(projectformdiv)

        const formboxlabel = document.createElement('label')
        formboxlabel.for = 'project name'
        projectformdiv.append(formboxlabel)

        const formboxinput = document.createElement('input')
        formboxinput.type = 'text'
        formboxinput.placeholder = 'Project Name'
        formboxinput.id = 'project'
        formboxinput.name = 'project'
        projectformdiv.append(formboxinput)

        const sidebarformbutton = document.createElement('button')
        sidebarformbutton.classList.add('sidebarformbutton')
        projectformdiv.append(sidebarformbutton)

        const sidebarIcon = document.createElement('ion-icon')
        sidebarIcon.classList.add('formbuttonicon')
        sidebarIcon.name = 'chevron-forward-outline'
        projectformdiv.append(sidebarIcon)

        sidebarformbutton.addEventListener("click", function(e) {
            console.log(e.target)



        })


function Who(titleofproject) {
    this.time = Date.now()
    this.titleofproject = titleofproject
}

let addAnotherNewProject = (e) => {

    let anotherNewProject = new Who(document.querySelector('#project').value)
    myProjects.push(anotherNewProject)
    console.log(myProjects)





}
       sidebarIcon.addEventListener("click", function(e) {
        let target = e.target
        let secondtarget = target.closest('.formbox')
        addAnotherNewProject()
        console.log('test')


        console.log(myProjects)
        secondtarget.remove()
 
        const projectButton = document.createElement('button')
        projectButton.classList.add('projectbutton')
        projectButton.textContent = formboxinput.value
        sidebarcontainertwo.append(projectButton)
        projectButton.addEventListener('click', function() {
            let grabhome = document.body.querySelector('.mainbody')
            console.log(grabhome)
            grabhome.remove()
            homePage()
        })

        const addProjectButton = document.createElement('button')
        addProjectButton.classList.add('formbuttontwo')
        sidebarcontainer.append(addProjectButton)

        const addProject = document.createElement('ion-icon')
        addProject.classList.add('formbuttonicontwo')
        addProject.name = 'add-outline'
        addProjectButton.append(addProject)

        addProjectButton.addEventListener("click", function() {
        projectForm.projectPop()
        let thirdtarget = document.body.querySelector('.formbuttontwo')
        thirdtarget.remove()


        



    

    
})

       
        
       })



    },
    projectAddition: function() {
        /*
        const buttonselect = document.body.getElementsByClassName('formbuttonicon')
        const inputselect = document.body.getElementById('project')
        buttonselect.addEventListener("click", function() {

            const projectButton = document.createElement('button')
            projectButton.classList.add('projectbutton')
            projectButton.textContent = inputselect.value
            sidebarcontainertwo.append(projectButton)

        })
        */

    }
}






addProjectButton.addEventListener("click", function() {
            projectForm.projectPop()
            let thirdtarget = document.body.querySelector('.formbuttontwo')
            thirdtarget.remove()
})






function homePage() {
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
    let parser = JSON.parse(localStorage.getItem("array"))

    for(let i = 0; i < parser.length; i++) {
        console.log(parser)
        display(parser[i])
    }
 


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



const cardcontainerone = document.createElement('div')
cardcontainerone.classList.add('cardcontainerone')
cardExample.append(cardcontainerone)



const firstSection = document.createElement('div')
firstSection.classList.add('firstsection')
cardcontainerone.append(firstSection)

const secondSection = document.createElement('div')
secondSection.classList.add('secondsection')
cardcontainerone.append(secondSection)

const thirdSection = document.createElement('div')
thirdSection.classList.add('thirdsection')
cardcontainerone.append(thirdSection)

const formTwo = document.createElement('form')
firstSection.append(formTwo)

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
secondSection.append(thisTitle)

/*
const theDescription = document.createElement('div')
theDescription.innerText = another.description
cardExample.append(theDescription)
*/
const date = document.createElement('div')
date.innerText = another.date
secondSection.append(date)

const dropdown = document.createElement('button')
dropdown.classList.add('dropdownbutton')
dropdown.classList.add('notclicked')
dropdown.type = 'button'
dropdown.value = another.time
thirdSection.append(dropdown)

const dropdownIcon = document.createElement('ion-icon')
dropdownIcon.classList.add('dropdownicon')
dropdownIcon.name = 'arrow-down-outline'
dropdown.value = another.time
dropdown.append(dropdownIcon)


const trashcan = document.createElement('button')
trashcan.classList.add('trashbutton')
trashcan.type = 'button'
trashcan.value = another.time
thirdSection.append(trashcan)

const trashIcon = document.createElement('ion-icon')
trashIcon.classList.add('trashicon')
trashIcon.name = 'trash-outline'
trashIcon.value = another.time
trashcan.append(trashIcon)


dropdown.addEventListener("click", function(e) {
    let grab = e.target

    let grabtwo = grab.closest('.card')
    let grabthree = document.body.querySelector('.cardcontainertwo')
    let grabfive = document.body.querySelectorAll('.cardcontainertwo')
    console.log(grabfive)
    console.log(grabthree)




 
    

    if(grab.classList.contains('notclicked')) {

    

    cardExample.style.height = '100px'
    const cardcontainertwo = document.createElement('div')
    cardcontainertwo.classList.add('cardcontainertwo')
    grabtwo.append(cardcontainertwo)

    const containerboxone = document.createElement('div')
    containerboxone.classList.add('containerboxone')
    cardcontainertwo.append(containerboxone)

    const containerboxtwo = document.createElement('div')
    containerboxtwo.classList.add('containerboxtwo')
    cardcontainertwo.append(containerboxtwo)
    
    containerboxone.textContent = another.description
    containerboxtwo.textContent = another.importance
    
    const grabfour = containerboxtwo

    

    grab.classList.remove('notclicked')
    grab.classList.add('clicked')
    grabfive = document.body.querySelectorAll('.cardcontainertwo')
    console.log(grabfive)


    
} else if (grab.classList.contains('clicked')) {

    let testing = grabtwo.querySelector('.cardcontainertwo')
    testing.remove()
    cardExample.style.height = '40px'
    grab.classList.add('notclicked')
}


})




trashcan.addEventListener("click", function(e) {
    let amount = e.target
    let grab = document.querySelector('.card')

/*
    for (let j = 0; j < envy.length; j++) {
        if(Number(amount.value) === envy[j].time) {
            console.log(envy[j].time)
            alert('found')

        }
    }
*/

let trytwo = localStorage.getItem('array')
console.log(trytwo)
let trythree = JSON.parse(trytwo)
console.log(trythree)
let tryfour = trythree[0]
console.log(tryfour.time)
for(let j = 0; j < trythree.length; j++) {
    if((Number(amount.value) === trythree[j].time))



    
    trythree.splice(j, 1)
    localStorage.setItem('array', JSON.stringify(trythree))
    console.log(trythree)
    amount.closest('.card').remove()

}



    for (let i = 0; i < myTasks.length; i++) {
        if((Number(amount.value) === myTasks[i].time)) {
            console.log(amount.value)
            console.log(myTasks)
            console.log(envy)
   
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
    form.classList.add('firstform')
    popup.append(form)

    const overallContainer = document.createElement('div')
    overallContainer.classList.add('overallcontainer')
    form.append(overallContainer)

    const firstContainer = document.createElement('div')
    firstContainer.classList.add('firstcontainer')
    overallContainer.append(firstContainer)

    const secondContainer = document.createElement('div')
    secondContainer.classList.add('secondcontainer')
    overallContainer.append(secondContainer)

    const secondOverallContainer = document.createElement('div')
    secondOverallContainer.classList.add('secondoverallcontainer')
    form.append(secondOverallContainer)

    const firstLabel = document.createElement('label')
    firstLabel.for = 'task'
    firstLabel.innerText = 'Task Title'
    firstContainer.append(firstLabel)

    const firstInput = document.createElement('input')
    firstInput.type = 'text'
    firstInput.id = 'task'
    firstInput.name = 'task'
    firstInput.setAttribute("requried", "")
    firstContainer.append(firstInput)

    const secondLabel = document.createElement('label')
    secondLabel.for = 'Description'
    secondLabel.innerText = 'Description'
    firstContainer.append(secondLabel)

    const secondInput = document.createElement('input')
    secondInput.type = 'text'
    secondInput.id = 'description'
    secondInput.name = 'description'
    firstContainer.append(secondInput)

    const datePicker = document.createElement('label')
    datePicker.innerText = 'Date'
    secondContainer.append(datePicker)

    const thirdInput = document.createElement('input')
    thirdInput.type = 'date'
    thirdInput.id = 'date'
    thirdInput.name = 'date'
    secondContainer.append(thirdInput)

    const fourthLabel = document.createElement('label')
    fourthLabel.for = 'status'
    fourthLabel.innerText = 'Importance'
    secondContainer.append(fourthLabel)

    const fourthInput = document.createElement('select')
    fourthInput.name = 'status'
    fourthInput.id = 'status'
    secondContainer.append(fourthInput)

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

    const fifthInput = document.createElement('button')
    fifthInput.classList = 'tasksubmitbutton'
    fifthInput.type = 'button'
    secondOverallContainer.append(fifthInput)

    const submitIcon = document.createElement('ion-icon')
    submitIcon.classList.add('submiticon')
    submitIcon.name = 'arrow-forward-circle-outline'
    fifthInput.append(submitIcon)


 




  function NewTask(time, title, description, date, importance) {
        this.time = time,
        this.title = title;
        this.description = description;
        this.date = date;
        this.importance = importance
        
        
        console.log(localStorage)
        console.log(myTasks.length)
        
    }

    const addTask = (e) => {
        let anotherTask = new NewTask(
            Date.now(),
            document.querySelector('#task').value,
            document.querySelector('#description').value,
            document.querySelector('#date').value,
            document.querySelector('#status').value

        )
  
        

        local.push(anotherTask)
        myTasks.push(anotherTask)
        console.log(myTasks)
        document.querySelector('.popup').remove()
        display(anotherTask)
  
        

    }



    fifthInput.addEventListener("click", addTask)
    fifthInput.addEventListener("click", function() {

        localStorage.setItem('array', JSON.stringify(local))
        let trytwo = localStorage.getItem('array')
        console.log(trytwo)
        let trythree = JSON.parse(trytwo)
        console.log(trythree)
        let tryfour = trythree[0]
        console.log(tryfour.time)
        for(let i = 0; i < trythree.length; i++) {
            console.log(trythree[i].time)
        }


        addButton()
        let testtest = document.body.querySelector('.formbutton')
        testtest.addEventListener("click", pop)
        testtest.addEventListener("click", function() {
            const buttonRemove = document.body.querySelector('.formbutton')
            buttonRemove.remove()
        })

    })




}
}

