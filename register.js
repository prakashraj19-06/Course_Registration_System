window.onload = function(){
    courseOption();
}

let selectOption = document.getElementById("course-option");
const url ="http://localhost:8080";

function courseOption(){

    fetch(`${url}/courses`)
    .then((data) => data.json())
    .then((resps) => {       
       resps.forEach(resp => {
         let row =`<option value="${resp.courseId}">${resp.courseName}</option>`;

           selectOption.innerHTML += row;
       });
    })

}