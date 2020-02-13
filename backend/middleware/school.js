let school = require("../db/school")

const addNewClass = (req,res)=>{
    
    let name = req.body.name
    let teacher = req.body.teacher
    console.log(name, teacher, school)
    if(!school.classes[name]){

        let newClass = school.addClass(name, teacher)
        res.json({
            class: newClass,
            message:"Class Created"

        })
        //console.log(mySchool.classes)
    } else{
        res.json({
            error: "Class already Exists"
        })
    }
}

const getAllClass = (req, res, next) =>{
    try{
        let classes = school.classes
    res.json({
        classes
    })
    }catch(err){
        next(err)
    }
}

module.exports = {addNewClass, getAllClass}