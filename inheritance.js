class firstClass {
  constructor (data) {
    this.firstClassVariable = data 
  }

   first() {
    console.log('inside first',this.firstClassVariable)
   }
}

class secondClass extends firstClass {
    second() {
        console.log('inside second')
       }
}

class thirdClass extends secondClass {
    third() {
        console.log('inside second')
       }
}

const firstOne = new firstClass(10)

const SecondOne = new secondClass()
const thirdOne = new thirdClass(100)
thirdOne.first() //100

firstOne.first() //10

thirdOne.second() // inside second
