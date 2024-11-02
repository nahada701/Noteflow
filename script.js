

   const addNote=()=>{
   let newNote=note.value
  let title= notetitle.value
  let color= window.getComputedStyle(addbutton).backgroundColor
   if(!newNote==""){
    noted.innerHTML+= `<div class=" text-light ps-2 py-4 rounded addednote" style=" background-color: ${color}; ""><h5 class="titleofnote">${title}</h5><p class="note-cont" >${newNote} </p>  <div class="buttonss">
                        <button class="btnn " onclick="editNote(this)"><i class='bx bxs-edit-alt text-light'></i></button></div></div>`
    note.value=""
    notetitle.value=""
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
    const noteToDelete = element.closest('.addednote'); // Finds the closest parent with the 'addednote' class
    if (noteToDelete) {
        noteToDelete.remove(); // Removes the element from the DOM
    }
}

function editNote(data) {
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
}

