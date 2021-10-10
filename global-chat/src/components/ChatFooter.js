import React from "react";


export default function ChatFooter(props) {
 
    return (
      <div className="row g-0 chat-footer">
        <div className="col-11">

          <input
            className="form-control w-100"
            type="text"
            value={props.currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              props.setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && props.sendMessage();
            }}
          />
        </div>
        <div className="col">
          <button className="btn btn-dark send-message w-100" onClick={props.sendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    )
}