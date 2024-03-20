const axios=require("axios")
const primes=async () => {
    try {
      const response=await axios.get('http://localhost:4000/numbers/primes');
      return response.data.numbers; 
    } 
    catch(error){
      console.error('Error in fetching prime numbers', error);
    }
  };
  const even = async () => {
    try {
      const response=await axios.get('http://localhost:4000/numbers/even');
      return response.data.numbers; 
    } 
    catch(error) {
      console.error('Error in fetching even numbers', error);
    }
  };

  const random=async () => {
    try {
      const response=await axios.get('http://localhost:4000/numbers/rand');
      return response.data.numbers;
    } 
    catch(error) {
      console.error('Error in fetching radom numbers', error);
    }
  };

  const fibonacci=async () => {
    try {
      const response=await axios.get('http://localhost:4000/numbers/fibonacci');
      return response.data.numbers; 
    } 
    catch(error){
      console.error('Error fetching Fibonacci numbers from server:', error);
    }
  };
   exports.primes=primes;
   exports.fibonacci=fibonacci;
   exports.random=random;
   exports.even=even;