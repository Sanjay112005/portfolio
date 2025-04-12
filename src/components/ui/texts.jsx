import React from "react"
import { TextGenerateEffect } from "./text" 

const words =  `Have a project idea or just want to say hi? I'm all ears. Drop your message below and let's talk!.`

export default function TextGenerateEffectDemo() {
  return (
    <div className="demo-container">
      <TextGenerateEffect words={words} />
    </div>
  )
}
