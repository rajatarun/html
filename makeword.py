a ="peanutbutter";
b = ["peanut","butter"]
d = [];
for i in range(len(a)+1):
    if(a != ""):
        c = a[:i];
        #print c;
        if(b.__contains__(c)):
            #print c;
            d.append(c);
            a = a.replace(c,"");
e = "";
for i in d:
    e+= i+" ";
    
print e
