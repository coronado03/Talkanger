import Picker from "emoji-picker-react";

const EmojiPicker = () => (
  <div className="emoji-picker">
    <Picker />
  </div>
);

console.log("EmojiPicker loading", Date.now());

export default EmojiPicker;
