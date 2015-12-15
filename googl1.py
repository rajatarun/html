import re;
def solution(S):
    x = [];
    arr = [];
    # write your code in Python
    for line in S.split("\n"):
        sp = S.split("\n");
        
        count = 0;
        if(line.__contains__(".") ):
            if(line.split(".")[1] == "png" or line.split(".")[1] == "jpeg" or line.split(".")[1] == "gif"):
            
                for i in line:
                    if(i == " "):
                        count +=1;
                val = 0;
                #print count;
                for i in range(4,count+4):
                    val = val+i;
                val = val+count+1;
                val = val+len(line)-count+1;
                arr.append(val);
                #print line;
    print max(arr);
            
##        a = re.findall("[0-9]",line);
##        if(len(a) == 1 and line.__contains__(".") == False):
##           x.append(line);
##        index = [];
##        for i in x:
##            index.append(sp.index(i));
##        b = [];
##        for i in range(len(index)-1):
##            b.append(sp[index[i]:index[i+1]]);
##        b.append(sp[index[len(index)-1]:len(sp)]);
##    print b
##    len1 = 0;
##    for i in b:
##        for j in i:
##            
##    return len1;
                       
                    
        

solution('dir1\n dir11\n dir12\n  picture.jpeg\n  dir121\n  file1.txt\ndir2\n file2.gif')

