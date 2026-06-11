window.onload = function(){
    enroll();
}

let tableData = document.getElementById("tableData");

function enroll(){

    fetch("course-registration-backend-production-614b.up.railway.app/courses/enrolled")
    .then((data) => data.json())
    .then((resps) => {
       
       resps.forEach(resp => {
         let row =`<tr>
                      <td class ="enrolled-name" >${resp.name}</td>
                      <td class ="enrolled-email">${resp.emailId}</td>
                      <td class ="enrolled-course">${resp.courseName}</td>
                   </tr>`

           tableData.innerHTML += row;
       });
    })

}