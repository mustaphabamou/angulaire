console.log("after");

getUser(12,(user) =>{
    console.log(user);
    getProducts(user.id,products => {
        console.log(products)
    });
});

function getUser(id,callback)
{
    setTimeout( () => {
        console.log(`get user from the database`);
        return callback({id,name:"Mohamed"});
    },2000)
}

function getProducts(userId,callback){
    setTimeout( () => {
        console.log(`i get the prodcts of this user id ${userId}`);
        return callback ([`product1`,`product2`,`product3`])
    },3000)
}