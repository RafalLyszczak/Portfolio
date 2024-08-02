function changeText1(){
    document.getElementById("h1text").innerHTML = "Rafal Lyszczak"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = '<p>Hi welcome to my porfolio web project. I would like to give you quick few on my person.</p><p><p>I am polish guy, who moved to uk in October 2020 just beofre COVID-19 Lockdowns.IT, physiq, food, mecial freak.</p><ul id="ulelement"><li>First contact with IT/Code had at school when was 16, find out code realy intresting, but never wokred profesional way with it.</li><li>Sport is quite new hobby for me (3 years), mobility, buidling muscles. My favoure part of that is progression, dont like stuck in one place.</li><li>Love preapring food specially dessets, my meal sorry started since i was 10. From small meals for my-self to making parties for 14 people. Traditional food is the key. </li><li>My whole life i was into body, there was never anhthing weird or odd in human. My medical career ghave me opportnity to expolore even more.</li></ul><p>My life goal is going foward and exploring new things, and self-development specialy education. </p>';
    
    container.replaceChild(newDiv, originalDiv);

}
function changeText2(){
    document.getElementById("h1text").innerHTML = "Education"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = "<p>I obtain my Education in Poland, details below:<br></p><ul><li>Zs1 in Hrubieszow - IT specialist | technician school (IB / BTEC) -2020 - equivalent o english A-levels with specialization  IT(),</li><li>RQF Level 3 / SCQF Level 6-7 / CQFW Level 3 IT - 2020,</li><li>Graphic designer [VCC +Europass] – 2019 - Program foundated by union to eduate young ambitious people in Schools.,</li><li>Data administrator [VCC +Europass] – 2019 - Program foundated by union to eduate young ambitious people in Schools.,</li><li>HCA [NHS] - 2023 - Certificate with cooperation with NHS in Royal Surrey Trust Hospital in Eduacion center and on wards.</li></ul>";
    
    container.replaceChild(newDiv, originalDiv);

}
function changeText3(){
    document.getElementById("h1text").innerHTML = "My Previous Experience"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = "<p>I do not have big work eperience in coding or other It departments.<br>My Hisory of employment:</p><ul><li>Technician (school apprenticeship) | Internet Provider Company 01/05/2019 – 01/07/2019 - Was my mandatory apprenticeship for my eduaction to get qualifacion. Had work for 2 months in diffrent place than I used to live my spend some time work with routers, graphic programs, margeting team (which we had to teach graphic editing) and Customers Service</li><li>Carrer | Self-employed01/01/2021 – 01/02/2023 - Private care for an elderly lady and her family. This job i get accidentally. My firend eldery lady neded some help times to times i help her and she offered me to become her priave carrer</li><li>HCA | NHS31/05/2023 – CURRENT Deliver high quality care to patients and their families. In this one i learned alot how to Hospital work and tons of data is transfered and confidentaly stored, medical abbroviation, wiking under the pressure, and move around new programs</li></ul>";
    
    container.replaceChild(newDiv, originalDiv);

}
function changeText4(){
    document.getElementById("h1text").innerHTML = "My goal:"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = "<p>I started code in the past but as hobby, then had quite long break. I am defnietly into code. Currently I am working in hospital as HCA. I was comparning Nursing to codding, and i realize i enoy codding more than Nursing. Main reason is Computers and code is more familiar with my personality.</p><h2>Goals:</h2><ul><li>Start carreer as front end developer (apprenticeship/entry posision/inter position)</li><li>Get know cod in professional way</li><li>Extend my skills to full stack web developer</li></ul>";
    
    container.replaceChild(newDiv, originalDiv);

}
function copyText(){
    var text = "rafal.tron532@gmail.com";

    navigator.clipboard.writeText(text).then(function() {
        alert('Email address has been coppied.');
    }).catch(function(error) {
        console.error('Sorry copying failed', error);
    });
}
