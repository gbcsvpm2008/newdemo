$(document).ready(()=>{
$("#reg").click(()=>{
  
   alert("User registered successfully");
     let name,email,password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    const student={"name":name,"email":email,"password":password};
    var student_data=JSON.stringify(student);
    localStorage.setItem("student",student_data);
     
});
$("#dis").click(()=>{
   
            let dname,demail,dpassword;
            dname=localStorage.getItem("student");
            demail=localStorage.getItem("email");
            dpassword=localStorage.getItem("password");
            const display_data=localStorage.getItem("student");
            const student=JSON.parse(display_data);
             document.getElementById("dname").innerHTML=student.name;
             document.getElementById("demail").innerHTML=student.email;
             document.getElementById("dpassword").innerHTML=student.password; 
             
});
});