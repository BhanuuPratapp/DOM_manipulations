const posts =[
    {title: 'Post one', body: 'This is post one',createdAt: new Date().getTime()},
    {title: 'Post two', body: 'This is post two', createdAt: new Date().getTime()},
    {title: 'Post three', body: 'This is post two', createdAt: new Date().getTime()},


];
//let IntervalID = 0;
function getPosts(){
  // clearInterval(IntervalID);
     setInterval( ()=>{

        let output = ''
        for(let i = 0;i<posts.length;i++){
       //posts.forEach((post,index) =>{
            output += `<li>${posts[i].title} last updated${Math.round((new Date().getTime() - posts[i].createdAt)/1000)}</li>`;
        }
       // })
       //console.log("interval ID",IntervalID);
        document.body.innerHTML = output;
       
        
},1000)
    

}

const user = {
    username:'bhanu',
    lastActivitytime : new Date()
  
}
console.log('Before creating posts:', user.lastActivitytime);
const updateLastUserActivityTime = new Promise((resolve,reject) =>
    setTimeout(()=>{
        user.lastActivitytime = new Date()
        resolve(user.lastActivitytime)
    },1000)
)

function createPosts(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong')
            }
        },2000)
    })
}




 function deletePosts(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
        
            if(posts.length > 0){
               const deleteElement = posts.pop();
               resolve(deleteElement)
            }
            else{
                reject('Error: Array is empty now.')
            }

        },1000)
    })
 }   
/*
 createPosts({title: 'Post four',  body: 'This is post three'})
   .then(() =>{
    getPosts()
    deletePosts().then(()=>{
        getPosts()
        deletePosts().then(()=>{
            getPosts()
            deletePosts()
            .then(()=>{
                getPosts()
                deletePosts()
                .then(()=>{
                    getPosts()
                    deletePosts()
               .then(()=>{})
               .catch((err) => {
                console.log(err)
            })
             })
                
            })
        })
    })
   })
 .catch(err => console.log(err))
*/
 
 createPosts({title: 'Post fifth', body:'This is Post fourth'})
   .then(()=>{
    getPosts()
    //deletePosts()
   })
   createPosts({title: 'Post fifth', body:'This is Post fourth'})
   .then(()=>{
    getPosts()
    //deletePosts()
   })
   

/*
   const promise1 = Promise.resolve('Hello World');
   const promise2 = 10;
   const promise3 = new Promise((resolve ,reject) => 
       setTimeout(resolve,2000,'Goodbye')
   )

   const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

   Promise.all([promise1,promise2,promise3,promise4])
     .then(values =>
        console.log(values))

*/


Promise.all([createPosts,updateLastUserActivityTime])
  .then(([values1, values2]) =>{
    console.log('userlastActivityTime: ',values2)
  })

  Promise.all([createPosts,updateLastUserActivityTime])
  .then(values =>{
    console.log(values2)
  })
