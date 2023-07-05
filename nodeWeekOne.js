const expenses = require("./data");
const calculateTotalSpentByCategory = require("./expenditure-analysis");
const { isAnagram } = require("./isAnagram");
const isPalindrome = require("./palindrome");
const calculateTime = require("./times");


// Easy
console.log("Anagram Test! "+isAnagram("spar","rasp"))
console.log("Expenses Analysis  "+calculateTotalSpentByCategory(expenses));


// Medium
console.log("Palindrome  "+ isPalindrome("Nan"));
console.log("Time take to sum till "+100000000000000+"  "+ calculateTime(100000000000000));
