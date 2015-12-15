g = open('careerdata.json','r');
file = g.read();

careerdata = [];
a = {}
a["title"] = input();
a["content"] = input();
a["link"] = input();
careerdata.append(a);
f = open("career.json",'w');


