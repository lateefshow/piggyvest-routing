import React from "react";

const Home = () => {
  const {myCounter, setMyCounter} = useState(4);
  
  const increaseCount = () => {
    setMyCounter(myCounter + 1);
  };
  return (
    <div>
      <h1>This is the Home page</h1>
      <p>Current count: {myCounter}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <p>        This is a simple counter application built with React. Click the button to increase the count.</p>
      <p>Enjoy!</p>
      <p>Feel free to modify the code and see how it works!</p>
      <p>Happy coding!</p>
      <p>Have a great day!</p>
      <p>Keep learning and improving your skills!</p>
      <p>Remember to take breaks and stay hydrated!</p>
      <p>Thank you for visiting!</p>
      <p>We hope you find this application useful!</p>
      <p>If you have any questions, feel free to reach out!</p>
      <p>Stay positive and keep pushing forward!</p>
      <p>Good luck with your coding journey!</p>
      <p>Don't forget to share your progress with others!</p>
      <p>We appreciate your support!</p>
      <p>Have fun coding!</p>
      <p>See you next time!</p>
      <p>Take care!</p>
      <p>Goodbye!</p>
      <p>Until we meet again!</p>
      <p>Keep smiling!</p>
      <p>Keep shining!</p>
      <p>Keep being awesome!</p>
      <p>Keep making a difference!</p>
      <p>Keep inspiring others!</p>
      <p>Keep spreading positivity!</p>
    </div>
  );
};

export default Home;
