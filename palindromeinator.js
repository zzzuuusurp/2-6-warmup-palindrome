
const palindromeinator = word => {
    let ogword = word; //stores for later use in alerts
    word = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(word);
    //makes the word lowercase
    let reversedWord = word.split("").reverse().join("");
    console.log(reversedWord);
    //logs the word reversed
    //splits the word into characters, reverses the characters, and joins them together.
    if (word === reversedWord) { 
        //works cause palindromes are the same front and reversed
        alert(`${ogword} is a palindrome`);
    } else {
        alert(`${ogword} is not a palindrome`);

    }
}

//test
while (true) {
let word = prompt("Say a word, word boy \n or type \"please stop\" to stop");
    if (word == "please stop") {
        alert("fine")
        break;
    } //way to escape, in case you wanna for some reason??
    else {
        palindromeinator(word);
    }
}