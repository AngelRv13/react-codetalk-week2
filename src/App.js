import MyButton from "./Components/Button";
import Avatar from "./Components/Avatar";


const user = {

  name: 'Larry June',
  // eslint-disable-next-line
  imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg\&tbnid=nS1rvO2HUn5IaM\&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i\&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up\&docid=0KPOynmmJAlCxM\&w=765\&h=573\&q=christopher%20robin\&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ",

  imageSize: 90,

};

export default function CodeTalk(){
  return(
    <div>
      {/* code for problem 1 */}
      <h1>Welcome to Codetalks</h1>
      <MyButton title="Add to cart"/>
      <MyButton title="Find out more"/>

      {/* code for problem 2 */}
      <Avatar name={user.name} imageUrl={user.imageUrl} imageSize={user.imageSize}/>
    </div>
  );
};




