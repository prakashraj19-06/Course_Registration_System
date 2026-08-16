window.onload = function(){
    enroll();
}

const url ="http://localhost:8080";
let tableData = document.getElementById("tableData");

function enroll(){

    fetch(`${url}/courses/enrolled`)
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