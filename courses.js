window.onload = function(){
    courses();
}

let tBody = document.getElementById("tbody");

function courses(){
    fetch("course-registration-backend-production-614b.up.railway.app/courses")
    .then((resp) => resp.json())
    .then((courses) => {
       
        courses.forEach(course => {
    
        let row = `<tr>
                        <td class="course-id">${course.courseId}</td>
                        <td class="table-title">${course.courseName}</td>
                        <td>
                            <div class="course-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-sm"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                ${course.trainer}
                            </div>
                        </td>
                        <td>
                            <div class="course-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-sm"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                ${course.durationInWeeks} weeks
                            </div>
                        </td>
                        <td><span class="status-badge">OPEN</span></td>
                    </tr>`;

        tBody.innerHTML += row;
         });
    })
}