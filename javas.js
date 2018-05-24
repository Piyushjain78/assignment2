function solution1(a,b,c)
{
    var s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}

function solution2(celsius)
{
    //c/5 = (f-32)/9
     var f=9*(celsius/5)+32;
     return f;
}

function solution3()
{
    /*var a=[];
    for(var i=0;i<3;i++)
    {
        var t=a.push([i]);
       // return t;
       console.log(t);
    }
    console.log("hello");*/
    
    var a=2,b=4,c=1;
    if(a>b&&a>c)
    {
        return a;
    }
    if(b>a&&b>c)
    {
        return b;
    }
    if(c>a&&a>b)
    {
        return c;
    }
}

function solution4()
{
   var string="my country is india";
  // var t=string.charAt(0).toUpperCase();
  // return t;
  var c=[];
  var t= string.split(" ");
  for(var i=0;i<t.length;i++)
  {
      c[i]=t[i].charAt(0).toUpperCase()+t[i].substring(1);
  }
  return c.join(" ");
}

function solution5()
{

    var t=30;
    if(t%3==0||t%7==0)
    {
        return t;
    }
    else{console.log("not multiple of 3 or 7");}
}

function solution6()
{
   var s1="GAGCCTACTAACGGGAT";
   var s2="CATCGTAATGACGGCCT";
   
   var count=0;
   
   for(var i=0;i<s1.length;i++)
   {
   if(s1[i]!=s2[i])
   {
       count++;
   }
   }
   return count;
}

function solution7()
{
    var s1="The quick brown fox Jumps over the lazy dog";
    var c=new Array(200);
    var flag=true;
    for(var i=0;i<c.length;i++)
    {
        c[i]=0;
    }

    for(var i=0;i<s1.length;i++)
    {
       c[s1[i].toLowerCase().charCodeAt()]++;
    }

    for(var i=97;i<123;i++)
    {
        if(c[i]==0)
        {
            flag=false;
        }
    }
    
    if(flag==true)
    console.log("String is pangram");
    if(flag==false)
    console.log("String is not pangram");

}

function solution8()
{
    var s1="downstream";
    var c=new Array(200);
    var flag=true;
    for(var i=0;i<c.length;i++)
    {
        c[i]=0;
    }

    for(var i=0;i<s1.length;i++)
    {
       c[s1[i].toLowerCase().charCodeAt()]++;
    }

    for(var i=97;i<123;i++)
    {
        if(c[i]>1)
        {
            flag=false;
        }
    }
    
    if(flag==true)
    console.log("String is isogram");
    if(flag==false)
    console.log("String is not isogram");

}


function solution10()
{
    var feed=[

        {
            name:"p",
        post:
        {
          
        postcontent:{

            postimage:"piyush",
            like:["abc","xyz","pk"],
            comment:{
                
                like:["g","h","k"],
                replay:["not","nice","lol"],
                writecomment:{
                    comment1:["abcds","xyz","cdd"],
                    gif:["car","study","play"],
                    stiker:["bird","angry","working"]
                },

                share:["piyush","rohit","ram"]

            }
        
        }
    }
    },

    {
        name:"c",
        post:
        {
          
        postcontent:{

            postimage:"piyush",
            like:["abc","xyz","pk"],
            comment:{
                
                like:["g","h","k"],
                replay:["not","nice","lol"],
                writecomment:{
                    comment1:["abc","xsdfyz","c"],
                    gif:["car","study","play"],
                    stiker:["bird","angry","working"]
                },

                share:["piyush","rohit","ram"]

            }
        
        }
    }
    },

    {
        name:"j",
        post:
        {
          
        postcontent:{

            postimage:"piyush",
            like:["abc","xyz","pk"],
            comment:{
                
                like:["g","h","k"],
                replay:["not","nice","lol"],
                writecomment:{
                    comment1:["abcasd","xasd","sd"],
                    gif:["car","study","play"],
                    stiker:["bird","angry","working"]
                },

                share:["piyush","rohit","ram"]

            }
        
        }
    }
    },

    {
        
        
    name:"k" ,   
        post:
        {
          
        postcontent:{

            postimage:"piyush",
            like:["abc","xyz","pk"],
            comment:{
                
                like:["g","h","k"],
                replay:["not","nice","lol"],
                writecomment:{
                    comment1:["abc","z","g"],
                    gif:["car","study","play"],
                    stiker:["bird","angry","working"]
                },

                share:["piyush","rohit","ram"]

            }
        
        }
    }
    },

    {   name:"mh",
        post:
        {
          
        postcontent:{

            postimage:"piyush",
            like:["abc","xyz","pk","c"],
            comment:{
                
                like:["g","h","k","kl"],
                replay:["not","nice","lol"],
                writecomment:{
                    comment1:["abc","xyz","c","pop"],
                    gif:["car","study","play"],
                    stiker:["bird","angry","working"]
                },

                share:["piyush","rohit","ram"]

            }
        
        }
    }
    },

    {
        name:"p",
        post:
        {
          
        postcontent:{

            postimage:"piyush",
            like:["abc","xyz","pk"],
            comment:{
                
                like:["g","h","k"],
                replay:["not","nice","lol"],
                writecomment:{
                    comment1:["abc","xz","d"],
                    gif:["car","study","play"],
                    stiker:["bird","angry","working"]
                },

                share:["piyush","rohit","ram"]

            }
        
        }
    }
    }
    ]
    /*sol1*/

    var c=0;
for(var i=0;i<feed.length;i++)
{
    if(feed[i].name=="p")
    {
      c++;
    }
}
    console.log(c);

    /*sol2*/
console.log(feed[4].post.postcontent.like.length);

    /*sol3*/

console.log(feed[4].post.postcontent.like);

/*sol4*/
console.log(feed[4].post.postcontent.like[0]);
/*sol5*/

for(var i=0;i<feed[4].post.postcontent.like.length;i++)
{
    for(var j=0;j<feed[4].post.postcontent.comment.writecomment.comment1.length;j++)
    {
        if(feed[4].post.postcontent.like[i]==feed[4].post.postcontent.comment.writecomment.comment1[j])
        {
            console.log(feed[4].post.postcontent.like[i]);
        }
    }
}

/*sol6*/
var array1=[];
var array2=[];
var t=0;
var l=0;
for(var i=0;i<feed.length;i++)
{
    for(var j=0;j<feed[i].post.postcontent.comment.writecomment.comment1.length;j++)
    {
       
      if(feed[i].post.postcontent.comment.writecomment.comment1[j]==feed[i].post.postcontent.comment.writecomment.comment1[j])
      {
        
        (array1[t]=feed[i].post.postcontent.comment.writecomment.comment1[j]);
        t++;
    
      }
   }
  // console.log(array1);
}
var count = 1;
var maxCount=1;
var maxElement;
for(p = 0; p< array1.length; p++){
    
    for(p1 = p+1; p1 < array1.length; p1++){
        if(array1[p1] == array1[p]){
            count++;
            /* If count of current element is more than 
            maxCount, uodate maxCount and maxElement */
            if(count > maxCount){
                maxCount = count;
                maxElement = array1[p1];
            }
        }
    }
}
console.log(maxElement);

}

/*sol11*/

function solution11()
{
    var friendlist=[
        {
            all:
                {
                    image:"pj",
                    friendlistt:["piyush","piyush","fakesingh","fake","mohan k"],
                    message:["piyush","jain","fake singh"],
                    editlist:["ram","moghan"]
                }
            
        }
    ]

    /*sol1*/
    
    var friend=friendlist[0].all.friendlistt;
    var f=friend.sort().join();
    var r=f.replace(/fake[a-z]*/g,"");
    console.log(r);
    //console.log(f)

    /*sol2*/
        
        friendlist[0].all.friendlistt.push("ram");
        friendlist[0].all.friendlistt.push("shaym");
        console.log(friendlist[0].all.friendlistt);
     
     /*sol3*/   

     console.log(friendlist[0].all.friendlistt.sort());

     /*sol4*/
     
     for(var i=0;i<friendlist[0].all.friendlistt.length;i++)
     {
        console.log(friendlist[0].all.friendlistt[i].charAt(0));        
     }
     var io;
     var t=friendlist[0].all.friendlistt.join();
     io=t.indexOf(" ");
     console.log(t.charAt(io+1));
     
     /*sol6*/
     for(var i=0;i<friendlist[0].all.friendlistt.length;i++)
     {
         for(var j=i+1;j<friendlist[0].all.friendlistt.length;j++)
         {
             if(friendlist[0].all.friendlistt[i]==friendlist[0].all.friendlistt[j])
             console.log(friendlist[0].all.friendlistt[i]);
         }
     } 
     
}

function solution9()
{
    var ch="";
    var str="world wide lens";
    var res=str.split(" ");
    for(var i=0;i<res.length;i++)
    {
        ch+=res[i].charAt(0).toUpperCase();
    }console.log(ch);
}