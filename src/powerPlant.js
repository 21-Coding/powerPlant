// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees. 

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// We create two functions using our function factory. We could easily create many more.

const feed = changeState("soil")(5);
// const water = changeState("water")(5);
// const sun = changeState("sun")(5);

$(document).ready(function() {
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = stateChanger(feed);
    $('#soil-value').text(newState.soil);
  })
})

// const plantNamedJack = stateChanger(redFoo);
// console.log(plantNamedJack);
// const plantNamedFred = stateChanger(redFoo);
// console.log(plantNamedFred);
// const fedPlant = stateChanger(redFoo);
// console.log(fedPlant);

// const feedPlant = plant2(redFoo);
// const water = plant2(waterPlant);
// const water2 = plant2(waterPlant);

// console.log(water2);

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");
// // const fedPlant = feed(5)(plant = {});
// // console.log(fedPlant);

// const feedStateByOne = changeState("soil");
// const fedPlant = feedStateByOne(plant = {});
// console.log(fedPlant);




// (parameters) => <return statement>
///////\\\\\\\\/////////\\\\\\\\\
///////\///////\\\\\\\\/\\\\\\\\\
// ----- Great Notes ------ /////\
//\\\\\////////\\\\\\\\/\\\\\\\\\\\\\\HI OMG
// let plant = { soil: 0, light: 0, water: 0 };
// const newPlant = changePlantState(plant, "soil");

// console.log(newPlant);

// In theory, the function isn't mutating state because we are returning a new object. (Unfortunately, in reality, JavaScript is still referencing - and mutating - the original object because it creates a shallow clone, not a deep clone. But we'd need to use a special library to ensure we have a deep clone, so we won't worry about that right now!)

// const plant = {};

// console.log(plant.water);

// const plantWithWater = hydrate(plant);
// const reallyWateredPlant = hydrate(plantWithWater);

// console.log(plantWithWater.water);
// console.log(reallyWateredPlant.water);

// {
//   water: 0,
//   soil: 0,
//   light: 0
// }

/*
                    ____
                 _.' :  `._
             .-.'`.  ;   .'`.-.
    __      / : ___\ ;  /___ ; \      __
  ,'_ ""--.:__;".-.";: :".-.":__;.--"" _`,
  :' `.t""--.. '<@.`;_  ',@>` ..--""j.' `;
       `:-.._J '-.-'L__ `-- ' L_..-;'
         "-.__ ;  .-"  "-.  : __.-"
             L ' /.------.\ ' J
              "-.   "--"   .-"
             __.l"-:_JL_;-";.__
          .-j/'.;  ;""""  / .'\"-.
        .' /:`. "-.:     .-" .';  `.
     .-"  / ;  "-. "-..-" .-"  :    "-.
  .+"-.  : :      "-.__.-"      ;-._   \
  ; \  `.; ;                    : : "+. ;
  :  ;   ; ;                    : ;  : \:
 : `."-; ;  ;                  :  ;   ,/;
  ;    -: ;  :                ;  : .-"'  :
  :\     \  : ;             : \.-"      :
   ;`.    \  ; :            ;.'_..--  / ;
   :  "-.  "-:  ;          :/."      .'  :
     \       .-`.\        /t-""  ":-+.   :
      `.  .-"    `l    __/ /`. :  ; ; \  ;
        \   .-" .-"-.-"  .' .'j \  /   ;/
         \ / .-"   /.     .'.' ;_:'    ;
          :-""-.`./-.'     /    `.___.'
                \ `t  ._  /  bug :F_P:
                 "-.t-._:'
*/