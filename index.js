//object creation

/**
 * object literal
 */


const circle = {
    radius:5,
    location: {
        x:1,
        y:1
    },
    draw:function() {
        console.log('inside draw')
    }
}

circle.draw()

/**
 * using Factory function
 * 
 */

function createCircle(rad) {
    return {
        radidus:rad,
        draw() {
            console.log('the value of the radius is',rad)
        }
    }
}

createCircle(1).draw()


/**
 * Using constructor
 */

function AnotherCircle(rad) {
    this.radius = rad
    console.log('this',this)
    this.draw = function() {
        console.log('draw',this.radius)
    }   
}


const p = new AnotherCircle(23) //new keyword creates an empty object and binds 'this' to the newly created object 
// const p = AnotherCircle(23)
p.draw()