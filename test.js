const arr = [1,2,3,4];

const result = arr.reduce((acc, item) => {
    //console.log(acc)
    return acc+item
}, 0)

//console.log(result)

const result2 = arr.reduce((acc , item) =>{
    acc.push(acc + item)
    return acc;
}, [])

//console.log(result2)

const adminPath2 = [
    {
        name:'Dashboard',
        path:'/admin/bashboard',
        element:"AdminDashboard"
    },
    {
        name:"User Management",
        children:[
     {
        name:'Create Student',
        path:'create-student',
        element:"CreateStudent"
    },
     {
        name:'Create Admin',
        path:'create-admin',
        element:"CreateAdmin"
    },
     {
        name:'Create Faculty',
        path:'create-faculty',
        element:"CreateFaculty"
    },
        ]
    }
]

// const adminPath = adminPath2.reduce((acc, item)=>{
//     if(item.path && item.element){
//         acc.push({
//             path:item.path,
//             element:item.element,
//         })
       
//     };

//     if(item.children){
//         item.children.forEach(child =>{
//             acc.push({
//                 path:child.path,
//                 element:child.element
//             })
//         })
//     }
//      return acc;
// }, [])

// console.log(adminPath)


const LayoutPath = adminPath2.reduce((acc, item)=>{
    if(item.name && item.path){
        acc.push({
            key:item.name,
            lavel:item.path
        })
    }

    if(item.children){
        acc.push({
            key:item.name,
            lavel:item.name,
            children:item.children.map((child)=>({
                key:child.name,
                lavel:child.name,
            }))
        })
    }
    return acc;
}, [])

console.log(JSON.stringify(LayoutPath))
