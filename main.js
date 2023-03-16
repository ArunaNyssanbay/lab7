function changeColor() {
	document.getElementById("heading").style.color = "blue";
	document.getElementById("heading").innerHTML = "Lab7 Assignment";

	var hr = document.createElement('hr');
	document.body.appendChild(hr); 
	var ref = document.getElementById('heading');

	var h = document.createElement("HEADER");
    document.body.appendChild(h);
    var h2 = document.createElement("H2");
    var txt = document.createTextNode("Task");
    h2.appendChild(txt);
    h.appendChild(h2);
    h2.style.color = "red";

    var p = document.createElement("paragraph");
    document.body.appendChild(p);
    var p1 = document.createElement("p1");
    var txt = document.createTextNode("In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:");
    p1.appendChild(txt);
    p.appendChild(p1);

	var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("find elements in the DOM (5 points);");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"
  
    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li2 = document.createElement("li");
    var txt = document.createTextNode("create/add/remove elements (5 points);");
    li2.appendChild(txt);
    li.appendChild(li2);
    li2.style.color = "purple"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("change content of the elements (5 points);");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li2 = document.createElement("li");
    var txt = document.createTextNode("change styles of the elements (5 points);");
    li2.appendChild(txt);
    li.appendChild(li2);
    li2.style.color = "purple"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("change attributes of the elements (5 points);");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li2 = document.createElement("li");
    var txt = document.createTextNode("change classes of the elements (5 points).");
    li2.appendChild(txt);
    li.appendChild(li2);
    li2.style.color = "purple"
	
    var hr = document.createElement('hr');
	document.body.appendChild(hr); 
	var ref = document.getElementById('heading');

    var h = document.createElement("HEADER");
    document.body.appendChild(h);
    var h2 = document.createElement("H2");
    var txt = document.createTextNode("Submission");
    h2.appendChild(txt);
    h.appendChild(h2);
    h2.style.color = "red"

    var p = document.createElement("paragraph");
    document.body.appendChild(p);
    var p1 = document.createElement("p1");
    var txt = document.createTextNode("To submit your work, follow these instructions:");
    p1.appendChild(txt);
    p.appendChild(p1);

	var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("Create a new repository on Github, named lab7 (1 point).");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li2 = document.createElement("li");
    var txt = document.createTextNode("Clone this repository to your local machine and work inside it.");
    li2.appendChild(txt);
    li.appendChild(li2);
    li2.style.color = "purple"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("Create a new HTML file, called index.html, which has only one <h1> tag with Hello, World! message (1 point).");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li2 = document.createElement("li");
    var txt = document.createTextNode("Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).");
    li2.appendChild(txt);
    li.appendChild(li2);
    li2.style.color = "purple"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("Link this main.js file to your index.html file (Note: place your script at the end of the body section).");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li2 = document.createElement("li");
    var txt = document.createTextNode("Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).");
    li2.appendChild(txt);
    li.appendChild(li2);
    li2.style.color = "purple"

    var li = document.createElement("paragraph");
    document.body.appendChild(li);
    var li1 = document.createElement("li");
    var txt = document.createTextNode("Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points). After you finish your work, submit it to the Github (2 points).");
    li1.appendChild(txt);
    li.appendChild(li1);
    li1.style.color = "green"    
    
 }

	