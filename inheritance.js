class firstClass {
   first() {
    console.log('inside first')
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

const firstOne = new firstClass()
const SecondOne = new secondClass()
const thirdOne = new thirdClass()

thirdOne.first()
