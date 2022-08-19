// 11) তাড়া˱ড়া কের ɾু েলর জনƟ ĺবর হǱ িকˍ রাʅা পার হওয়ার সময় ĺদখেল, ƪািফক
// িসগনƟাল লাল রং। এই অবʆায় যিদ তু িম রাʅা পার হওয়ার ĺচɳা কর, তাহেল ĺডǻার হেত
// পাের। যিদ হলদু রং হয় তাহেল ĺতামার ĺথেম যাওয়া উিচত। আর যিদ ƪািফক িসগনƟাল িƣন
// হয় তাহেল ĺতামার রাʅা পার হওয়া উিচত। তাই একটা ĺকাড িলেখ ĺফেলা। ĺযখােন আমরা
// signal নােম একটা ĺভিরেয়বল থাকেব। ĺসটার মান green, yellow বা red হেত পাের।
// ĺসই অনসু াের িডফােরȥ িডফােরȥ কাজ হেব। ĺতা, ĺসই ĺকাড ফটাফট িলেখ ĺফেলা।

let trafficSignal = 'green';

switch (trafficSignal) {
    case 'red':
       
        console.log("It's dangerous.");
        break;
    case 'green':
     
        console.log("You can go");
        break;
    case 'yellow':
       
        console.log("Stop th e car");
        break;
   
    default:
        console.log("signal not found")
}


// 12) Ƶিতিদন ĺতামার কাজ িক?
// ১) রাত ৮ টা বােজ মিডউল আনলক কেরা
// ২) ফটাফট িভিডও ĺদেখ ĺদেখ Ƶাকǅস কেরা
// ৩) িভিডও ĺদখেত ĺদখেত ĺনাটস নাও
// ৪) মিডউল ĺশষ হেল পুরা মিডউল িনেজ িনেজ Ƶাকǅস কেরা
// ৫) ĺকান িকছু বঝু েত না পারেল (িচȭা কের ĺদেখা এইখােন িকˍ একটা শতŪ আেছ ), সােপাটŪ ĺসশেন
// জেয়ন কেরা
// এখন ĺতামার কাজ হেǱ একটা for লপু ১০ বার চািলেয় উপেরর িজিনসʟলা আউটপুট িহেসেব
// ĺদখােনা।

let listOfWork = ["Unlock module at 8 pm",
 "Watch the videos and practice", 
 "Take notes while watching videos", 
 "After finishing the module practice it again", 
 "If you don't understand the topic you can join support session"]



for (let i = 0; i < 2; i++) {

    for (let w = 0; w < listOfWork.length; w++) {
        let work = listOfWork[j];
        console.log(work );
    }
}



// 13) আবার একই িজিনস while লপু চািলেয় ১০ বার ĺদখােনা।

let routineOfWatching = ["Unlock module at 8 pm",
 "Watch the videos and practice", 
 "Take notes while watching videos",
"After finishing the module practice it again",
 "If you don't understand the topic you can join support session"]

let i = 9;   
while (i > 0) {    
    let r = routineOfWatching.length - 1;   
    while (r >= 0) {   
        let routine = routineOfWatching[r];
        console.log(routine);
        r--;  
    }
    i--;  
}


// 14) উপেরর Ƶেɉমটাই while লপু িরভাসŪ ওেয়েত (decremental িহেসেব)কের ĺদখাও

let dailyRoutine = ["Unlock module at 8 pm",
 "Watch the videos and practice", 
 "Take notes while watching videos",
"After finishing the module practice it again",
 "If you don't understand the topic you can join support session"]

let i = 2;   
while (i > 0) {    
    let r = dailyRoutine.length - 1;   
    while (r >= 0) {   
        let routine = dailyRoutine[r];
        console.log(routine);
        r--;  
    }
    i--;  
}

// 15) উপেরর Ƶেɉমটাই for লপু িরভাসŪ ওেয়েত (decremental িহেসেব)কের ĺদখাও

let dailyLearningRoutine = ["Unlock module at 8 pm", 
"Watch the videos and practice", 
"Take notes while watching videos", 
"After finishing the module practice it again", 
"If you don't understand the topic you can join support session"]

for (i = 3; i > 0; i--) {
    for (l = dailyLearningRoutine.length - 1; l > 0; l--) {
        let learningProcess = dailyLearningRoutine[j];
        console.log(learningProcess );
    }
}


// 16) ĺতামার কােছ: ৮০০০০ টাকার ĺবিশ হেল তু িম mac িকনেব, ৬০ টাকার ĺবিশ হেল gaming লƟাপটপ
// িকনেব, ৪০ হাজার টাকার ĺবিশ হেল lenovo yoga কিɑউটার িকনেব , ২০ হাজার টাকার ĺবিশ হেল পুরান
// লƟাপটপ িকনেব। না হয় তু িম ĺমাবাইল িদেয় কাজ চালােব।

let myMoney = 20000;

if (myMoney > 80000) {
    console.log("Buy Macbook")
} 
else if (myMoney > 60000) {
    console.log("Buy Gaming laptop")
} 
else if (myMoney > 40000) {
    console.log("Buy a Lenovo yoga")
} 
else if (myMoney > 20000) {
    console.log("Buy laptop")
} 
else {
    console.log("Buy my phone")
}


// 17) আসেক আমার মন ভােলা ĺনই এই কথা ৩৯ বার আউটপুট িহেসেব ĺদখাও।

let sentence = "Ajke amar mon bhalo nei";

for (i = 0; i < 39; i++) {
    console.log(i);
}
// 18) while লপু িকভােব কাজ কের

let i = 0;
while (i < 10) {   
    console.log(i);  

    i++;    
}

// 19) একটা ĺকাড িলেখ ৫৮ ĺথেক ৯৮ পযŪȭ যত সংখƟা আেছ ĺসʟলােক ĺদখাও

for (i = 58; i <= 98; i++) {
    console.log(i);
}

// 20) একটা ĺকাড িলেখ ৪১২ ĺথেক ৪৫৬ পযŪȭ যত ĺজার সংখƟা আেছ ĺসʟলােক
// ĺদখাও

for (i = 412; i <= 456; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}