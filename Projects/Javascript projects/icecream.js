const stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple" ],
    Liquid = ["water", "ice"],
    Holder = ["cone","cup", "stick"],
    Toppings = ["chocolate", "peanuts"]
};

let isShopOpen = true;

function time(ms){
    return new Promise( (resolve, reject) => {
        if(isShopOpen){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        
        await time(0000)
        console.log("Start the production")
        
        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`Icecream place on ${stock.Holder[0]}`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} was selected`)

        await time(2000)
        console.log("serve icecream")
    }
    catch(error){
        console.log("Customer left")
    }
    finally{
        console.log("Day ended. Shop is closed")
    }
}

kitchen();