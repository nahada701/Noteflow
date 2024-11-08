const loadNotes = () => {
    const addedNotes = JSON.parse(localStorage.getItem("notesArray")) || [];
    addedNotes.forEach((element) => {
        showPreviousNotes(element.title, element.note, element.color);
    });
};

const showPreviousNotes=(title,note,color)=>{
    document.getElementById("noted").innerHTML+=`<div class=" text-light ps-2 py-4 rounded addednote" style=" background-color: ${color}; ""><h5 class="titleofnote">${title}</h5><p class="note-cont" >${note} </p>  <div class="buttonss">
    <button class="btnn " onclick="editNote(this)"><i class='bx bxs-edit-alt text-light'></i></button><button class="btnn"  onclick="deleteNote(this)"><i class='bx bx-trash text-danger'></i></button></div></div>`
}

   const addNote=()=>{
    let newNote = note.value
  let title= notetitle.value
  let color= window.getComputedStyle(addbutton).backgroundColor
   if(!newNote==""){
    noted.innerHTML+= `<div class=" text-light ps-2 py-4 rounded addednote" style=" background-color: ${color}; ""><h5 class="titleofnote">${title}</h5><p class="note-cont" >${newNote} </p>  <div class="buttonss">
                        <button class="btnn " onclick="editNote(this)"><i class='bx bxs-edit-alt text-light'></i></button><button class="btnn"  onclick="deleteNote(this)"><i class='bx bx-trash text-danger'></i></button></div></div>`
    note.value=""
    notetitle.value=""
    let noteObject={
        title:title,
        note:newNote,
        color:color,
    }
    const notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];
    notesArray.push(noteObject)
    console.log(notesArray);
    
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
   }
   else{
    alert("Please enter a note")
   }

   }
   //    note colour selector
let addClass=()=>{
     note.classList.toggle('d-none')
     notetitle.classList.toggle('d-none')
     addbutton.classList.toggle('d-none')
let classes= document.getElementById("colours");
classes.classList.toggle("nocolor")
classes.classList.toggle("colors")

// console.log(blue);

blue.classList.toggle('animate__fadeInDown')

pink.classList.toggle('animate__fadeInDown')

orange.classList.toggle('animate__fadeInDown')

purple.classList.toggle('animate__fadeInDown')

green.classList.toggle('animate__fadeInDown')


    // document.getElementById("colours").classList.add("colours")

}
const colorClicked=(colour)=>{
    addbutton.classList=''
    addbutton.classList.toggle(colour)
    notetitle.classList=''
    notetitle.classList.toggle(colour)
    note.classList=''
    note.style.backgroundColor=''
    addbutton.style.backgroundColor=''
    notetitle.style.backgroundColor=''
    note.classList.toggle(colour)
    
    
}

function deleteNote(element) {
    const noteToDelete = element.closest('.addednote');  
     // Finds the closest parent with the 'addednote' class
    if (noteToDelete) {
        const title = noteToDelete.querySelector('.titleofnote').textContent;

        // console.log(title);
        
        const noteContent = noteToDelete.querySelector('.note-cont').textContent.replace(/\n/g, '').trim();
        //noteTodelete
        console.log(noteContent);
        
    let notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];
    noteToDelete.remove(); // Removes the element from the DOM
    notesArray.forEach(note=> console.log(note.note.replace(/\n/g, '').trim()))
    notesArray = notesArray.filter(note => !(note.title === title && note.note.replace(/\n/g, '').trim() === noteContent));
    localStorage.setItem("notesArray", JSON.stringify(notesArray));        
    }
}

function editNote(data) {
    if(notetitle.value || note.value){
        alert("please finish the edititng")
    }
    else{
        if (colours.classList.value.includes("nocolor")) {
            addClass();
        }
    
        // Get the closest `.addednote` div to the clicked edit button
        const noteContainer = data.closest('.addednote');
    
        // Extract content from the specific note being edited
        let noteToEdit = noteContainer.querySelector('.note-cont').innerHTML;
        let titleToEdit = noteContainer.querySelector('.titleofnote').innerHTML;
    
        // Set content in the edit fields
        note.value = noteToEdit;
        notetitle.value = titleToEdit;
    
        // Set the background color of the edit fields
        let color = window.getComputedStyle(noteContainer).backgroundColor;
        note.style.backgroundColor = color;
        notetitle.style.backgroundColor = color;
        addbutton.style.backgroundColor = color;
    
        // Remove the note after setting the content in the input fields
        noteContainer.remove();
        deleteNote(data)
    }
   
}
document.addEventListener("DOMContentLoaded", () => {
    loadNotes();
});
