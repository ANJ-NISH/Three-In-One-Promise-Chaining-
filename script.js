let btn=document.getElementById("btn");

function PromiseAPI1(url)
{
    return new Promise((resolve)=>
    {
      setTimeout(async ()=>{
         
        const response=await fetch(url);
        const data=await response.json();

        let headpost=document.createElement('h1');
        headpost.style.fontFamily="Consolas";
        headpost.style.margin="30px";

        let headingcontent=document.createTextNode("BLOG POSTS");
        headpost.appendChild(headingcontent);

        let bigcontainer=document.createElement('div');
        bigcontainer.style.display="flex";
        bigcontainer.style.width="100%";
        bigcontainer.style.justifyContent="space-evenly";
        bigcontainer.style.flexWrap="wrap";
        
        let dataarr=data.posts;

        dataarr.forEach((post)=>{

            let postdiv=document.createElement('div');
            postdiv.style.border="1px solid white";
            postdiv.style.backgroundColor="#ffffff";
            postdiv.style.marginTop="20px";
            postdiv.style.width="22%";
            postdiv.style.color="black";
            postdiv.style.borderRadius="10px";
            postdiv.style.display="flex";
            postdiv.style.flexDirection="column";
            postdiv.style.alignItems="center";
            postdiv.style.padding="10px";

            let heading=document.createElement('h3');
            heading.style.fontFamily="Papyrus";
            let headtext=document.createTextNode(post.title);
            heading.appendChild(headtext);

            let para=document.createElement('p');
            let paratext=document.createTextNode(post.body);
            para.style.fontFamily="Consolas";
            para.appendChild(paratext);

            let line=document.createElement('hr');
            line.style.color="gray";
            line.style.width="90%";

            let tagele=document.createElement('div');
            tagele.style.fontFamily="Consolas";
            tagele.style.color="blue";

            post.tags.forEach((tag)=>
            {
                let tagtext=document.createTextNode(`#${tag}  `);
                tagele.appendChild(tagtext);
            })

            let heartele=document.createElement("i");
            heartele.classList.add("fa-regular");
            heartele.classList.add("fa-heart");
            heartele.style.color="red";
            heartele.style.marginRight="5px";

            let likes=document.createTextNode(`${post.reactions.likes}`);
            
            let disele=document.createElement("i");
            disele.classList.add("fa-regular");
            disele.classList.add("fa-thumbs-down");
            disele.style.marginRight="5px";
            disele.style.marginLeft="10px";

            let dislikes=document.createTextNode(`${post.reactions.dislikes}`);

            let viewele=document.createElement("i");
            viewele.classList.add("fa-regular");
            viewele.classList.add("fa-eye");
            viewele.style.marginLeft="8px";
            viewele.style.marginRight="5px";

            let views=document.createTextNode(post.views);

            let reactdiv=document.createElement('div');
            reactdiv.style.marginTop="18px";
            reactdiv.appendChild(heartele);
            reactdiv.appendChild(likes);
            reactdiv.appendChild(disele);
            reactdiv.appendChild(dislikes);
            reactdiv.appendChild(viewele);
            reactdiv.appendChild(views);

            postdiv.appendChild(heading);
            postdiv.appendChild(para);
            postdiv.appendChild(line);
            postdiv.appendChild(tagele);
            postdiv.appendChild(reactdiv);
            bigcontainer.appendChild(postdiv);

        })

        document.body.appendChild(headpost);
        document.body.appendChild(bigcontainer);
        resolve(true);
      },1000);
    })
}


function PromiseAPI2(url)
{
   return new Promise((resolve)=>
   {
       setTimeout(async()=>{
        
        const response=await fetch(url);
        const data=await response.json();
       
        let headprod=document.createElement('h1');
        headprod.style.fontFamily="Consolas";
        headprod.style.margin="30px";

        let headingcontent=document.createTextNode("PRODUCTS");
        headprod.appendChild(headingcontent);

        let bigcontainer=document.createElement('div');
        bigcontainer.style.display="flex";
        bigcontainer.style.width="100%";
        bigcontainer.style.justifyContent="space-evenly";
        bigcontainer.style.flexWrap="wrap";

        let dataarr=data.products;

        dataarr.forEach((indiprod)=>{
            let postdiv=document.createElement('div');
            postdiv.style.border="1px solid white";
            postdiv.style.backgroundColor="#ffffff";
            postdiv.style.marginTop="20px";
            postdiv.style.width="22%";
            postdiv.style.color="black";
            postdiv.style.borderRadius="10px";
            postdiv.style.display="flex";
            postdiv.style.flexDirection="column";
            postdiv.style.alignItems="center";
            postdiv.style.padding="10px";

            let imgele=document.createElement("img");
            imgele.setAttribute("src",indiprod.images[0]);
            imgele.style.width="95%";
            imgele.style.height="200px";

            let headele=document.createElement("h3");
            headele.style.fontFamily="Consolas";
            let titlecontent=document.createTextNode(indiprod.title);
            headele.appendChild(titlecontent);

            let descele=document.createElement("p");
            descele.style.fontFamily="Consolas";
            let desc=document.createTextNode(`${indiprod.description.slice(0,30)}...`);
            descele.appendChild(desc);

            let priceele=document.createElement("span");
            priceele.style.fontFamily="Consolas";
            let price=document.createTextNode(`$${indiprod.price} (${indiprod.discountPercentage}% off)`);
            priceele.appendChild(price);

            let ratingint=parseInt(indiprod.rating);

            let ratediv=document.createElement('div');
            ratediv.style.marginTop="8px";

            for(let i=0;i<ratingint;i++)
            {
                let starele=document.createElement("i");
                starele.classList.add("fa-solid");
                starele.classList.add("fa-star");

                ratediv.appendChild(starele);
            }

            let btndiv=document.createElement("div");
            btndiv.style.marginTop="15px";
            btndiv.style.display="flex";

            let cartbtn=document.createElement("button");
            cartbtn.style.width="90px";
            cartbtn.style.height="50px";
            cartbtn.style.border="1px solid #eeeeee";
            cartbtn.style.fontSize="12px";
            cartbtn.style.fontWeight="bold";
            cartbtn.style.fontFamily="Consolas";
            cartbtn.style.borderRadius="10px";
            cartbtn.style.backgroundColor="#eeeeee";
            cartbtn.style.padding="10px";
            cartbtn.style.marginRight="25px";
            let carttext=document.createTextNode("ADD TO CART");
            cartbtn.appendChild(carttext);

            let buybtn=document.createElement("button");
            buybtn.style.width="60px";
            buybtn.style.height="50px";
            buybtn.style.border="1px solid #eeeeee";
            buybtn.style.fontSize="12px";
            buybtn.style.fontWeight="bold";
            buybtn.style.fontFamily="Consolas";
            buybtn.style.borderRadius="10px";
            buybtn.style.backgroundColor="#eeeeee";
            buybtn.style.padding="10px";
            let buytext=document.createTextNode("BUY NOW");
            buybtn.appendChild(buytext);

            btndiv.appendChild(cartbtn);
            btndiv.appendChild(buybtn);

            postdiv.appendChild(imgele);
            postdiv.appendChild(headele);
            postdiv.appendChild(descele);
            postdiv.appendChild(priceele);
            postdiv.appendChild(ratediv);
            postdiv.appendChild(btndiv);
            bigcontainer.appendChild(postdiv);
        })

        document.body.appendChild(headprod);
        document.body.appendChild(bigcontainer);

        resolve(true);
       },2000);
   })
}

function PromiseAPI3(url)
{
    return new Promise((resolve)=> {
        setTimeout(async ()=>{
         
            const response=await fetch(url);
            const data=await response.json();

            let todohead=document.createElement('h1');
            todohead.style.fontFamily="Consolas";
            todohead.style.margin="30px";

            let headingcontent=document.createTextNode("TO DO LIST");
            todohead.appendChild(headingcontent);

            let table=document.createElement("table");
            table.style.width="90%";
            table.style.margin="20px";
            table.style.border="none";
            table.style.borderCollapse="collapse";

            let thead=document.createElement("th");
            thead.style.width="90vw";
            thead.style.height="30px";
            thead.style.fontSize="25px";
            thead.style.fontFamily="Consolas";

            let td1=document.createElement("td");
            let td2=document.createElement("td");
            td2.style.textAlign="center";
            td1.style.width="98%";
            td2.style.width="2%";
            let td1t=document.createTextNode("List Item");
            let td2t=document.createTextNode("Completion Status");
            td1.appendChild(td1t);
            td2.appendChild(td2t);

            thead.appendChild(td1);
            thead.appendChild(td2);
            table.appendChild(thead);

            let dataarr=data.todos;

            dataarr.forEach((doitem)=>
            {
                let trow=document.createElement("tr");
                trow.style.width="90vw";
                trow.style.height="70px";
                trow.style.fontSize="25px";
                trow.style.fontFamily="Consolas";
                trow.style.borderBottom="1px solid black";  
                
                let td1=document.createElement("td");
                let td2=document.createElement("td");
                td1.style.width="70%";
                td2.style.width="30%";
                let td1t=document.createTextNode(doitem.todo);
                let td2t;

                if(doitem.completed)
                {
                    td2t=document.createElement("i");
                    td2t.classList.add("fa-solid");
                    td2t.classList.add("fa-check");
                }
                else
                {
                    td2t=document.createElement("i");
                    td2t.classList.add("fa-regular");
                    td2t.classList.add("fa-circle-xmark");
                }
                td1.appendChild(td1t);
                td2.appendChild(td2t);

                trow.appendChild(td1);
                trow.appendChild(td2);
                table.appendChild(trow);

            })

            document.body.appendChild(todohead);
            document.body.appendChild(table);
            resolve(true);
            
        },3000)
    })
}


btn.addEventListener("click",()=>{

    PromiseAPI1("https://dummyjson.com/posts").then((boolbval)=> {if(boolbval){return PromiseAPI2("https://dummyjson.com/products")}})
        .then((boolbval2)=> {if(boolbval2){return PromiseAPI3("https://dummyjson.com/todos")}}).then((boolbval3)=> console.log("Promise Chaining completed"));

})

