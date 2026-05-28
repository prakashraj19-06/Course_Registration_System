window.onload = function(){
    enroll();
}

let tableData = document.getElementById("tableData");

function enroll(){

    fetch("http://localhost:8080/courses/enrolled")
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