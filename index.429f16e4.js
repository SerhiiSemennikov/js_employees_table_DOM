function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||n(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}var r=document.querySelectorAll("th"),a=document.querySelector("tBody"),o=document.querySelectorAll("tBody tr"),i=null,l=null,c=t(o),u=t(c),s=document.createElement("form"),d=document.createElement("button"),m=c.map(function(e){return e.children[0].innerHTML});s.classList.add("new-employee-form");var f=function(e,t,n){var r=document.createElement("div");r.setAttribute("data-qa","notification"),r.className=n;var a=document.createElement("h2"),o=document.createElement("p");r.classList.add("notification",n),a.classList.add("title"),a.textContent=e,o.textContent=t,r.append(a,o),document.body.append(r),setTimeout(function(){r.style.display="none"},2e3)};[{label:"Name",name:"name",type:"text"},{label:"Position",name:"position",type:"text"},{label:"Office",name:"office",type:"select",options:["Edinburgh","London","New York","San Francisco","Singapore","Tokyo"]},{label:"Age",name:"age",type:"number",min:1},{label:"Salary",name:"salary",type:"number",min:0}].forEach(function(e){var t,n=document.createElement("label");n.innerHTML="".concat(e.label,": "),"select"===e.type?(t=document.createElement("select"),e.options.forEach(function(e){var n=document.createElement("option");n.value=e,n.textContent=e,t.appendChild(n)})):(t=document.createElement("input")).setAttribute("min",e.min),t.setAttribute("name",e.name),t.setAttribute("type",e.type),t.setAttribute("data-qa",e.name),n.appendChild(t),s.appendChild(n)}),d.innerHTML="Save to table",s.appendChild(d),document.body.appendChild(s),s.addEventListener("submit",function(e){e.preventDefault();var r,o=t(e.target.elements).reduce(function(e,t){return("INPUT"===t.tagName||"SELECT"===t.tagName)&&(e[t.name]=isNaN(t.value)?t.value:parseFloat(t.value)),e},{});!1!=(o.name&&o.position&&o.age&&o.salary?"string"!=typeof o.name?(f("Warning!","Name should be a string!","warning"),!1):"string"!=typeof o.position?(f("Warning!","Position should be a string!","warning"),!1):m.includes(o.name)?(f("Warning!","This name already exist!","warning"),!1):o.name.length<4?(f("Error!","Name must not to be shorter than 4!","error"),!1):o.age<18||o.age>90?(f("Error!","Age have to be between ".concat(18," and ").concat(90,"!"),"error"),!1):!(o.position.length<5)||(f("Warning!","Position field have to have more then 5 characters!","error"),!1):(f("Warning!","Each field must be filled in!","error"),!1))&&(f("Success!","Form submitted successfully","success"),m.push(o.name),r=document.createElement("tr"),Object.entries(o).forEach(function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),2!==o.length);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}return o}}(e,2)||n(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=t[0],o=t[1],i=document.createElement("td");i.textContent="salary"===a?"$".concat(o.toLocaleString()):o,r.appendChild(i)}),a.appendChild(r))}),r.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.cellIndex;"TH"===e.target.tagName&&function(e,t){if(i!==t){var n;switch(t){case 3:n=function(e,n){return e.cells[t].innerHTML-n.cells[t].innerHTML};break;case 4:n=function(e,n){return Number(e.cells[t].innerHTML.replace(",","").replace("$",""))-Number(n.cells[t].innerHTML.replace(",","").replace("$",""))};break;default:n=function(e,n){return e.cells[t].innerHTML>n.cells[t].innerHTML?1:-1}}e.sort(n),i=t}else e.reverse();e.forEach(function(e){a.appendChild(e)})}(u,t)})}),a.addEventListener("click",function(e){var t=e.target.closest("TR");t&&l!==t&&(l&&l.classList.remove("active"),(l=t).classList.add("active"))}),a.addEventListener("dblclick",function(e){var t=e.target.closest("td"),n=t.textContent;t.textContent="";var r=document.createElement("input");r.classList.add("cell-input"),t.appendChild(r),r.focus(),r.addEventListener("blur",function(e){t.textContent=n}),r.addEventListener("keypress",function(e){"Enter"===e.key&&(t.textContent=r.textContent,t.appendChild(r),r.blur())})});
//# sourceMappingURL=index.429f16e4.js.map
