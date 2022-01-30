//2)Create your own resume data in JSON format


let resume =
    {
      "profile": {
      "Name": "Kavya K",
      "Age": 23,
      "DOB":"14-05-1998",
      "Gender": "Female",
      "MobileNo": 7708475752,
      "E-mail": "kavyakaruppusamy09@gmail.com",
      "Father's Name":"Karuppusamy P",
      "Mother's Name": "Selvi K",
      },
      "Address":{
           "D.no": "2/256", 
           "Street":"Perumal kovil street",
            "city": "Kulathur",
            "post": "Venkittapuram post",
            "District":"Coimbatore",
            "Pincode": 641062,
      },
      "Languages": {
          "1": "Tamil",
          "2": "English",
      },
      "Education":{
           "Course1":"MscMathematics",
           "details1":{
           "Institute": "Government Arts College(Autonomous)",
           "Board":"Bharathiar University",
           "Year": 2020,
           "Percentage": "93%",
           },
           "Course2":"BscMathematics",
            "details2":{
            "Institute": "Karpagam Academy of Higher Education",
            "Board":"Karpagam Academy of Higher Education",
            "Year": 2018,
            "CGPA": 8.81,
         },
      },
        "Project": "“A STUDY ON CONTINUED FRACTION AND IT'S APPLICATIONS",
        "Hobbies":" Hearing songs and puzzle solving",
        "Work experience":{
            "Designation": "Online Tutor",
            "Company": "Focus Edumatics Private Ltd",
            "Duration": "10 Months",
             },

    };
    console.log(resume.Education.Course1);
    
