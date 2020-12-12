import { useState } from "react";
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
  const [text, setText] = useState(
    "Search/click on emojis to see their meanings"
  );
  const handleClick = (emoji) => {
    setText(emojis[emoji]);
  };
  const handleChange = (e) => {
    if (emojis[e.target.value] === undefined) {
      setText("Not found in our database!");
    } else {
      setText(emojis[e.target.value]);
    }
  };
  const emojisKeys = Object.keys(emojis);
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
          onChange={handleChange}
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
