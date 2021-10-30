let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let order = (fruit_name, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`)
    callProduction();
  }, 2000);
}

let production = () => {
  setTimeout(() => {
    console.log("production has started")
    setTimeout(() => {
      console.log("the fruit has been chopped")
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        setTimeout(() => {
          setTimeout(() => {
            console.log("start the machine")
            setTimeout(() => {
              console.log(`ice cream placed on ${stocks.holder[1]}`)
              setTimeout(() => {
                console.log(`${stocks.toppings[0]} as toppings`)
                setTimeout(() => {
                  console.log("serve cce cream")
                }, 2000)
              }, 3000)
            }, 2000)
          }, 1000)
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
}

order(0, production);