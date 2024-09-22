const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

noteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const noteText = noteInput.value;

    if (noteText.trim() !== "") {
        addNote(noteText);
        noteInput.value = '';
    }
});

function addNote(noteText) {
    const noteItem = document.createElement('li');
    noteItem.classList.add('note');

    const notePara = document.createElement('p');
    notePara.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', function() {
        notesList.removeChild(noteItem);
    });

    noteItem.appendChild(notePara);
    noteItem.appendChild(deleteBtn);
    notesList.appendChild(noteItem);
}
