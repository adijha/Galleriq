import React from 'react'

export default function NewsLetter() {
  return (
    <div className="col-sm-4" style={{ background: "#ff9900" }}>
    <form action>
      <h3 style={{ color: "#fff" }}>STAY IN TOUCH WITH GALLERIQ</h3>
      <input
        type="text"
        className="subscribe-input"
        placeholder="Enter Email Address"
        style={{}}
      />
      <button type="submit" className="btn btn-default subscribe">
        SUBSCRIBE
      </button>
    </form>
  </div>
  )
}
