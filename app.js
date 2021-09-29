new fullpage ("#Full-Page",
{
    autoScolling: true,
    navigation:true,
    onLeave : (origin,destination,direction)=>{
        const section = destination.item;
        const title= section.querySelector("h1");
        const tl= new TimelineMax({delay : 0.5 });

        tl.fromTo (title , 0.5 , {y: "50", opacity:0}, {y:0, opacity:1});
// console.log(destination);
// console.log("5");

if(destination.index===1)
{
    const chairs= document.querySelectorAll(".chair");
    const desciption = document.querySelector(".description");
    tl.fromTo(chairs,0.6, { x: "100%" },{x:"-60%"})
    .fromTo(desciption,0.5, {y: "50", opacity:0}, {y:0, opacity:1})

    .fromTo(chairs[0], 1 ,{opacity:1},{opacity:1})
    .fromTo(chairs[1], 1 ,{opacity:0},{opacity:1})
    .fromTo(chairs[2], 1 ,{opacity:0},{opacity:1});

}

}

}


);
