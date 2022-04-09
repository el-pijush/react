import {sum} from"./calc"
import "./index.css"
sum(3,5)
sum(22,2)

const root=document.getElementById("root")

const h1=document.createElement("h1")

h1.innerHTML="Hellow World"
h1.setAttribute("class","red")
root.append(h1)