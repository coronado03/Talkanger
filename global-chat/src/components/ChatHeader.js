import React from 'react'

export default function ChatHeader({ room }) {
    return (
      <div className="row mb-3 chat-header bg-dark text-light">
          <h1 className="text-center"> {`Room - ${room}`} </h1>
          <p className="text-center text-secondary"> {`Online`}</p>
      </div>
    )
}
