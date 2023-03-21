const calc = document.getElementsByClassName('form');
const rowForm = document.getElementById('form-content');
const addNewCourse = document.queryCommandValue('#btn-1');
const gpresult = document.querySelector('.gp-result');
const title = document.querySelector('.title');
const cancel = document.querySelector('.cancel')
const cal = document.querySelector('#btn-2')
const select = document.querySelector('.select-from')
const courseCredit = document.querySelector('.course-credit')

function addCourse() {
    let newCourse = '';
    newCourse += `
    <div class="form-content"> 
                <input type="text" class="course-code" placeholder="Enter course code" autofocus/>
                <select class="select-from">
                    <option value="">grade</option>
                    <option value="5">A</option>
                    <option value="4">B</option>
                    <option value="3">C</option>
                    <option value="2">D</option>
                    <option value="1">E</option>
                    <option value="0">F</option>
                </select>
                <input type="number" class="course-credit" placeholder="Enter your course credit" max="5"
                min="1" />
                <svg class="cancel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>

            </div>
    `;
    if (calc.childElementCount > 12) {
        alert("You have exceeded the maximum number of courses")
    }
    else{
        calc.insertAdjacentHTML("beforeend" , newCourse)
    }
    removeDeleteEvent();
        // add event to delete icons
        addDeleteEvent();
}

addNewCourse.addEventListener('click', addCourse);

const score = {
    A : 5,
    B : 4, 
    C : 3,
    D : 2,
    E : 1,
    F : 0,
    
}

function calGP() {
    let result = 0;
    let totalCredit = 0;

    for (let i = 0; i < rowForm.childElementCount - 1; i++) {
        let creditLoadValue;
        let optionValue = select[i].value;
        if (!courseCredit[i].value) {
            creditLoadValue = 0;
        } else {
            creditLoadValue = Number(courseCredit . [i].value);
        }
        totalCredit += creditLoadValue;
        result += (score[optionValue] * creditLoadValue);
    }
    let cgpa = result/totalCredit;
    gpresult.innerHTML = `Your CGPA is: ${cgpa.toFixed(2)}`

}

cal.addEventListener('click', calGP);

// delete subject
function deleteSubject(element) {
    console.log(element);
    rowForm.removeChild(element);
}

// display data
function addDeleteEvent() {
    // add event listeners to cancel btns
    for(let deleteBtn of icons) {
        deleteBtn.addEventListener('click', () => {
            deleteSubject(deleteBtn.parentElement);
        })
    };
}

function removeDeleteEvent() {
    // add event listeners to cancel btns
    for(let deleteBtn of cancel ) {
        deleteBtn.removeEventListener('click', () => {
            deleteSubject(deleteBtn.parentElement);
        })
    };
}

addDeleteEvent();