var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5YWI5YTYxYjlkNzg0M2I5MWIwMTQ0NWRlMTNiYjliNjllZDc0NjdmY2FmOWQ1MGU1YmYxMmU0MDM2YTcxNDQ2MjIzMzFmNTgxYWVlMzgxIn0.eyJhdWQiOiIxMCIsImp0aSI6IjY5YWI5YTYxYjlkNzg0M2I5MWIwMTQ0NWRlMTNiYjliNjllZDc0NjdmY2FmOWQ1MGU1YmYxMmU0MDM2YTcxNDQ2MjIzMzFmNTgxYWVlMzgxIiwiaWF0IjoxNTM4NTUzNTcyLCJuYmYiOjE1Mzg1NTM1NzIsImV4cCI6MTg1NDE3Mjc3Miwic3ViIjoiMTI4OCIsInNjb3BlcyI6WyJ1c2VyQmFzZUluZm8iLCJ1c2VyRGV0YWlsZWRJbmZvIiwidXNlckNvdXJzZUluZm8iXX0.KWdH6c0gZ7X5czinWPcIm2xij7S11DUv98mDP68XZEHMZzXu3Brn_Gcu887omcZM0h_x2lFPRjtO1JQ_vtY6pmoacnMgA-XzjYpAKY4tfGdS7Oj2Ik-v_Ku7pX-RBahd_lrA5GW9aVGUrruY9qNXt7vJftxRi24YGMiOZLiIcA3FQ0v6_rAsiA7gcqvvcfVl-ZGkCCubXD2vbt7I7VNPZvFFW0cd_prZJ-9dx_Ej9hBqJpDCGWE9j2Uz2xjAdGxbSPobI-IsapOQw1-heJLgShm_OB20LWPxEDgYUpc-NQwHpU8krUqvVjR_DoBeH_jjdXRIGV_pgF2diwD1ZFFnS0wDGSaMoS-KKFQ9CVzoS_2B3PhZO3ghFdKzj_4AZgSVV8LAlF8f5mIAEqfgqmF_nZxMHvFh-vN1CNz7VtegGACizAJen2CE_-eE8gxGFfPzl4XxcLPqOzIUizvAqDuYEXIz9fg8TFdJ1lTCxhygkRaePqhQ75w-swk8eOu5Q4EUeueBLntmNuwEL_21PnpT1IHJRx5CjwJi-L0W0TjrnL6qZF5fXXTdVMVU3Q5cMFSOGtwVHbnkO6FwDzU4uHs6aNOWom0nkXqgV0PV_9aN04swqmKFEl5Q84-fq4hlnr3eCpM3RbVeTkr38kVCi01yfVSzdJKNs_54spsC1UEuwgM';

var user = new INTITAClient({
	key: API_KEY
});

user.getUserDetails(function (error, data) {
	var userAvatar = document.getElementById('avatar');
	   	userAvatar.src = data.avatar;
	var userName = document.getElementById('name');
    	userName.innerText = data.firstName + " " + data.secondName;
    var userAddress = document.getElementById('home_address');
        userAddress.innerText = "вул."+data.address + " м." + data.city;
    var userEducarion = document.getElementById('education');
        userEducarion.innerText = data.education;
    var userEmail = document.getElementById('email');
    	userEmail.innerText = data.email;
    var userPhone = document.getElementById('phone');
    	userPhone.innerText = data.phone;
    var userSkype = document.getElementById('skype');
        userSkype.innerText = data.skype;
    var userFacebook = document.getElementById('facebook');
        userFacebook.href = data.facebook;
}); 


user.getUserCoursesAndModules(function (error, data) {
    var userCourse = document.getElementById('course');
        userCourse.innerText = data.courses[0].title;

    var courseId = data.courses[0].id;

user.getCourseInfo(courseId, function (error, data) {
    data.what_you_get_ua=data.what_you_get_ua.replace('\n', ';');
    //console.log(data.what_you_learn_ua);
    data.what_you_learn_ua=data.what_you_learn_ua.replace('\n', '');
    //console.log(data.what_you_learn_ua);
    var newFor = data.for_whom_ua.split("\n");
    var newWhat = data.what_you_get_ua.split(";");
    var newLearn = data.what_you_learn_ua.split(";");

    var info = document.getElementById("infocourse");

        newFor.forEach(function (element) {
    var li = document.createElement("li");
        li.innerText = element;
        info.appendChild(li);
    });

    var get = document.getElementById("youget");

        newWhat.forEach(function (element) {
    var li = document.createElement("li");
        li.innerText = element;
        get.appendChild(li);
    });

    var know = document.getElementById("learn");

        newLearn.forEach(function (element) {
    var li = document.createElement("li");
        li.innerText = element;
        know.appendChild(li);
     });

        
user.getCourseModules(courseId, function (error, modules) {
        
    var myModules = document.getElementById("modules");

        modules.forEach(function (module) {
    var li = document.createElement("li");
        li.innerText = module.title;
        myModules.appendChild(li);
        });
    });
});
});



