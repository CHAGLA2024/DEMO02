
gsap.from("#PAGE3 #BOX",{
  opacity:0,
  scale:0,
  duration:1,
  rotate:720,
 scrollTrigger:{
 trigger:"#PAGE3 #BOX",
 scroller:"body",
 markers:false,
 start:"top 60%",
 }
})
gsap.from("#PAGE1 #BOX",{
  opacity:0,
  scale:0,
  duration:1,
  rotate:-720,
 scrollTrigger:{
 trigger:"#PAGE1 #BOX",
 scroller:"body",
 markers:false,
 start:"top 45%",
 }
})
gsap.from("#PAGE2 h1",{
  opacity:0,
  // scale:0,
  duration:1.5,
  x:500,
  scrollTrigger:{
    trigger:"#PAGE2 h1",
    sroller:"body",
    markers:false,
    start:"top 50%",

  }


})
gsap.from("#PAGE2 h2",{
  opacity:0,
  // scale:0,
  duration:1.5,
  x:-500,
  scrollTrigger:{
    trigger:"#PAGE2 h1",
    sroller:"body",
    markers:false,
    start:"top 50%",
    
  }


})
gsap.from("#nav h4",{
opacity:0,
duration:2,
delay:1,
y:-100,
stagger:0.5,


})
gsap.from("#footer h4",{
  opacity:0,
  duration:1,
  delay:0.5,
  y:-10,
  stagger:0.5,
  scrollTrigger:{
         trigger:"#footer h4",
          scroller:"body",
           markers:false,
            start:"top 86%",
            end:"bottom 60%",

    }
  
  })
gsap.to("#PAGE1 h3",{
  scale:0,
  duration:0.5,
  delay:5,
})