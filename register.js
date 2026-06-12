window.onload = function(){
    courseOption();
}

let selectOption = document.getElementById("course-option");
const url ="https://course-registration-backend-production-614b.up.railway.app";

function courseOption(){

    fetch(`${url}/courses`)
    .then((data) => data.json())
    .then((resps) => {
        console.log(resps);
       
       resps.forEach(resp => {
         let row =`<option value="${resp.courseId}">${resp.courseName}</option>`;

           selectOption.innerHTML += row;
       });
    })

}