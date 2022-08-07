import * as React from "react";
import "./App.css";


const emojis = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺 ": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐏": "Sheep",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪 ": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
};
function App() {
  const [text, setText] = React.useState(
    "Search/click on emojis to see their meanings"
  );
  const handleClick = (emoji:string) => {
    setText(emojis[emoji]);
  };
  
  const emojisKeys = Object.keys(emojis);
  const emojiValues = Object.values(emojis);

  const handleChange = (e:string) => {
    const foundText = emojiValues.findIndex(em => em === e);

    if (foundText<0 && emojis[e] === undefined) {
      setText("Not found in our database!");
    } else {
      if(foundText>=0){
        setText(emojisKeys[foundText]);
      }else {
        setText(emojis[e]);
      }
    }
  };
  
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">EmojiPedia💡</h1>
      </header>
      <main className="main">
        <input
          placeholder="Add emojis here"
          className="main-input"
          type="text"
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="main-text">{text}</div>
        <div className="emojis">
          {emojisKeys.map((emoji, index) => (
            <span
              key={index}
              onClick={() => handleClick(emoji)}
              className="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div>
          <div className="footer-heading">About EmojiPedia</div>
          <p className="footer-text">EmojiPedia is a place to search emojis.</p>
          <small>&copy;wasifbaliyan {new Date().getFullYear()}</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
