  // code using simple javascript
   function user_data(){
    let name,email,password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    const student={"name":name,"email":email,"password":password};
    var student_data=JSON.stringify(student);
    localStorage.setItem("student",student_data);
   /* localStorage.setItem("student",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);*/
    window.location.href="display.html";
        }

        function display(){
            let dname,demail,dpassword;
            dname=localStorage.getItem("student");
            demail=localStorage.getItem("email");
            dpassword=localStorage.getItem("password");
            const display_data=localStorage.getItem("student");
            const student=JSON.parse(display_data);
             document.getElementById("student").innerHTML=student.name +" || "+ student.email+" || "+ student.password;
            // document.getElementById("student").innerHTML=student.email;
             //document.getElementById("student").innerHTML=student.password;
            /*document.getElementById("dname").innerHTML=dname;
            document.getElementById("demail").innerHTML=demail;
            document.getElementById("dpassword").innerHTML=dpassword;
*/
        }