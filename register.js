window.onload = function(){
    courseOption();
}

let selectOption = document.getElementById("course-option");

function courseOption(){

    fetch("http://localhost:8080/courses")
    .then((data) => data.json())
    .then((resps) => {
        console.log(resps);
       
       resps.forEach(resp => {
         let row =`<option value="${resp.courseId}">${resp.courseName}</option>`;

           selectOption.innerHTML += row;
       });
    })

}