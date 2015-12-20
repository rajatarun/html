import urllib as a
b = a.urlopen("https://s3-us-west-2.amazonaws.com/tarunproject/acne.txt");
c = b.read();
c = c.replace("\r","").replace("\r","").replace("\n","");
import re
#d = re.findall("[a-zA-Z0-9!? ,'""*;:-]*[^.\\r\\n,]",c);
d = c.split(".");
#print d;
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
tfidf = TfidfVectorizer();
tf = tfidf.fit_transform(d)
mat = linear_kernel(tf,tf)
import numpy
m = numpy.array(mat).tolist();
#print m;
sum = [];
for i in m:
    sum1 = 0;
    for j in i:
        sum1 = sum1+j;
    sum.append(sum1);
#print sum;
val = [];
#print numpy.median(sum),numpy.max(sum);
#print len(sum),len(m);
for i in range(len(sum)):
    if(sum[i] >= round(numpy.median(sum))):
        val.append(i);
#print val;
dict = {};
for i in sum:
	if(dict.has_key(i) == False):
		dict[i]=[];
for i in range(len(sum)):
	dict[sum[i]].append(i);
userinput  = input("Enter number of sentences max is "+str(len(sum)));
finallist = [];
dectoace = sorted(dict.keys());
shit = dectoace;
shit.reverse();
#print shit;
for keys in shit:
	if(len(finallist) <=  userinput):
		for i in dict[keys]:
			finallist.append(i);
di = [];
index =1;
for i in finallist:
	di.append(str(index)+": "+d[i].strip());
	index+=1;
from pptx import Presentation
prs = Presentation()

for i in di[0:userinput]:
	print i;
	title_slide_layout = prs.slide_layouts[0];
	slide = prs.slides.add_slide(title_slide_layout);
	title = slide.shapes.title;
	subtitle = slide.placeholders[1];
	subtitle.text="";
	title.text = i;
prs.save('test.pptx')


	








