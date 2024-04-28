import { useState } from "react"


export default function Test() {
    const [first, setfirst] = useState(1)
  return (
    <div>Test<button onClick={()=>setfirst(first+1)}>dsadasda</button>{first}</div>
  )
}
