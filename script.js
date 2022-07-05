// gsap.to("#first",{
   
//        top:"-100%",
//         duration:2,
//         ease:Expo.easeInOut,
//     })
    var tl = gsap.timeline();

tl.to("#maintxt" , {
    duration:2,
    opacity:1,
    ease:Expo.easeInOut,
    onClick: function(){
        $(' #maintxt h1').textillate({ in: { effect: 'fadeInUp' } });   
    }
})

gsap.to("#nav h1" , {
    duration:3,
    opacity:1,
    ease:Expo.easeInOut,
    onClick: function(){
        $(' #nav h1').textillate({ in: { effect: 'fadeIn' } });   
    }
})
// gsap.to("#maintxt img" , {
//     duration:1,
//     opacity:1,
//     ease:Expo.easeInOut,
//     onClick: function(){
//         $(' #maintxt img').textillate({ in: { effect: 'fadeIn' } });   
//     }
// })
gsap.to("#rich" , {
    duration:2,
    opacity:1,
    ease:Expo.easeInOut,
    onClick: function(){
        $(' #rich').textillate({ in: { effect: 'fadeInUp' } });   
    }
})


gsap.to("#first",{
    ScrollTrigger:{
    trigger:"#menu",
start:"center center",
end:"top 50%",
    scrub:2,
    pin :true,
    markers:true
    },
        // rotate:"260deg",
        duration:3,
        top:"-100%",
        ease:Expo.easeInOut,
    })
// gsap.to("first",{
//     ScrollTrigger:{
//         trigger:"#first",
//         markers:true,
//         start:"top 100%",

//         pin:true
//     }
// })