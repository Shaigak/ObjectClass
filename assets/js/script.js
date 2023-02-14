// let stu1={
//     name:"Konul",
//     surname:"Ibrahimova",
//     email:"konul@gmail.com",
//     phones:[5345,7893],
//     education:{
//         names:["Programing", "Digital Marketing"]
//     }

// }


// stu1.address="Neftciler"

// console.log(stu1.address)

// for (const key in stu1) {

//     console.log(key + "/" + stu1[key])
    
// }

// let user = []

// user.name="Pervin"

// console.log(user.name)


// for (const item of stu1.phones) {
//     console.log(item)  
// }

// console.log(stu1.education.names)


// let stu1={
//     id:1,
//     name:"Eli",
//     surname:"Talibov",
//     address:"Xetai"

// }

// let stu2={
//     id:2,
//     name:"Elekber",
//     surname:"Hesenov",
//     address:"Bayil"

// }

// let stu3={
//     id:3,
//     name:"Mirze",
//     surname:"Beshirzade",
//     address:"Bulbule"

// }

// let stu4={
//     id:4,
//     name:"Shaiq",
//     surname:"Khazimov",
//     address:"Sedmoy"

// }

// let group={
//     name:"P135",
//     capacity:4,
//     students:[],

//     addStudent: function(student){

//         let stu=this.students.find(m=>m.id==student.id)

//         if(stu != undefined){
//             console.log("Data already exist")
//             return;
//         }


//         if(this.students.length == this.capacity){
//             console.log("Group already filled")
//             return;
//         }
//         this.students.push(student)  

        
//     },

//     updateStudent:function(student){

//         let stu=this.students.find(m=>m.id==student.id)

//         if(stu!=undefined){
//             stu.address=student.address;
//         }

//     },





//     getStudents:function(){

//         // for (const item of this.students) {

//         //     console.log('${item.name} ${item.surname} ${item.address}')
            
//         // }

//         console.log(this.students)

// //     }
// }




// group.addStudent(stu1);

// group.addStudent(stu2);

// group.addStudent(stu3);

// group.addStudent(stu4);

// group.getStudents()


// // function getStudentsDatas(arr){
// //     for (const item of arr) {

// //         console.log(' ${item.name} ${item.surname} ${item.address}')
// //     }
// // }

// let UpdateStudent={

//     id:4,
//     address:"Ehmedli"

// }

// group.updateStudent(UpdateStudent)

// group.getStudents()


//  Elcanin oxuduqu yupiter otaginin capacity ne qederdi

let user ={
    name:"Elcan",
    company:{
        name:"Code Academy",

        rooms:[
            {
                name:"Yupiter",
                capacity:15,

                computers:["Hp", "Apple" ,"Acer"]
            },

            {
                name:"Saturn",
                capacity:10
            }
        ]
    }
}

function getRoomCapacityByUser(user){

    let rooms=user.company.rooms;

    let computers=[]

   for (const room of rooms) {

    if(room.name=="Yupiter"){
      
        computers=room.computers
    }
    
   }

   for(const computer of computers){
    console.log(computer)
   }

}

console.log(getRoomCapacityByUser(user))