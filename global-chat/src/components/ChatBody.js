import React from "react";

export default function ChatBody(props) {

    return (
            <div className="row chat-body">
        <div className="message-container">
          {props.messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={props.username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="row gx-0">
                    <div className="col-1 user-picture">
                      <img
                        className="rounded bg-light user-image"
                        src={`https://avatars.dicebear.com/api/bottts/:${messageContent.author}.svg`}
                        alt={`${props.username}'s Profile Character`}
                      />
                    </div>

                    <div className="col text-start message-content">
                      <p>{messageContent.message}</p>
                    </div>

                  </div>

                    <div className=" row message-meta">
                      <div className="col text-secondary">
                        <p id="author"> <strong>{messageContent.author}</strong> at {messageContent.time}</p>
                      </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    )
}
