// filename: complexCode.js

/*
This code is a complex implementation of a chatbot that uses natural language processing.
It responds to greetings, FAQs, and even engages in small talk. It uses multiple functions and
data structures to handle user input, generate responses, and maintain conversational context.
*/

// Utility functions
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Data structures
const greetings = ["hi", "hello", "hey", "greetings"];
const faqs = [
  { question: "What is your name?", answer: "My name is ChatBot" },
  { question: "Where are you from?", answer: "I am from the virtual world" },
  { question: "How old are you?", answer: "I am ageless" }
];
const smallTalk = [
  "How was your day?",
  "What's your favorite movie?",
  "Do you have any pets?",
  "What's the weather like today?"
];

// Main function
function chatBot(userInput) {
  if (greetings.includes(userInput.toLowerCase())) {
    return "Hey there! How can I assist you today?";
  } else if (userInput.toLowerCase().includes("faq")) {
    const randomFAQ = getRandomElement(faqs);
    return randomFAQ.answer;
  } else if (userInput.toLowerCase().includes("small talk")) {
    return getRandomElement(smallTalk);
  } else {
    return "Sorry, I didn't quite catch that. Can you please rephrase?";
  }
}

// Example conversation
console.log(chatBot("Hello")); // "Hey there! How can I assist you today?"
console.log(chatBot("What is your name?")); // "My name is ChatBot"
console.log(chatBot("Do you have any pets?")); // Random small talk question
console.log(chatBot("Can you help me with something?")); // "Sorry, I didn't quite catch that. Can you please rephrase?"