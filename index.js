// Code your solutions in this file

function writeCards(name) {
    const thankYou  = [];

    for(let count = 0; count < name.length; count+=1) {
        thankYou.push(`Thank you, ${name[count]}, for the wonderful surprise gift!`)
    }
    return thankYou;
}

function countDown(num) {
    for(let count = num; count > -1; count--) {
        console.log(count)
    }
}
