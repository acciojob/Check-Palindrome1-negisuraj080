// complete the given function

function palindrome(s){
const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the original and reversed strings
    return cleanString === cleanString.split('').reverse().join('');
}
module.exports = palindrome
