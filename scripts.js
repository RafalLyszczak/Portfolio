function changeText1(){
    document.getElementById("h1text").innerHTML = "Rafal Lyszczak"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = `
    <p>
        Hi, welcome to my portfolio web project. I would like to give you a quick few on my person.
    </p> 
    <p>
        I am a Polish man who moved to the UK in October 2020, just before the COVID-19 lockdowns. IT, physiq, food, mecial freak.
    </p>
    <ul>
        <li>
            My first interaction with IT/Code was at school when I was 16. I found the code really interesting but never worked professionally with it.
        </li>
        <li>
            Sport is quite a new hobby for me (3 years), as is mobility and building muscles. My favorite part of that is progression; I don't like being stuck in one place.
        </li>
        <li>
            I love preaching food, especially desserts. My meal sorry started when I was 10. From small meals for myself to making parties for 14 people, traditional food is the key.
        </li>
        <li>
            My whole life, I was into the body; there was never anything weird or odd about humans. My medical career gives me the opportunity to explore even more.
        </li>
    </ul>
    <p>
        My life goal is going forward, exploring new things, and self-development, especially in education.
    </p>`;
    
    container.replaceChild(newDiv, originalDiv);

}
function changeText2(){
    document.getElementById("h1text").innerHTML = "Education"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = `
    <p>
        I obtain my Education in Poland, details below:<br>
    </p>
    <ul>
        <li>
            Zs1 in Hrubieszow - IT Specialist | Technician School (IB / BTEC) 2020-Equivalent English A-Levels with Specialization IT(),
        </li>
        <li>
            RQF Level 3/SSCQF Level 6-7/CCQFW Level 3 IT - 2020,</li>
        <li>
            Graphic designer [VCC + Europass] 2019: A program founded by the union to educate young, ambitious people in schools.
        </li>
        <li>
            Data Administrator [VCC + Europass]—2019—Program founded by the union to educate young, ambitious people in schools.
        </li>
        <li>
            HCA [NHS] 2023: Certificate with cooperation with the NHS in Royal Surrey Trust Hospital in Eduacion Center and onwards.
        </li>
    </ul>`;
    
    container.replaceChild(newDiv, originalDiv);

}
function changeText3(){
    document.getElementById("h1text").innerHTML = "My Previous Experience"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = `
    <p>
        I do not have professional work experience in coding or other IT departments.<br> My history of employment:
    </p>
    <ul>
        <li>
            Technician (school apprenticeship) | Internet Provider Company 01/05/2019–01/07/2019 It was my mandatory apprenticeship for my education to get qualification. I had to work for 2 months in a different place than I used to live. I spent some time working with routers, graphic programs, the marketing team (which we had to teach graphic editing), and customer service.
        </li>
        <li>
            Carrer | Self-employed 01/01/2021–01/02/2023: Private care for an elderly lady and her family. This job I got accidentally. My firend elderly lady needed some help, and from time to time I helped her, and she offered me to become her primary caregiver.
        </li>
        <li>
            HCA | NHS31/05/2023 – CURRENT Deliver high-quality care to patients and their families. In this one, I learned a lot about hospital work, how tons of data is transferred and confidently stored, medical abbreviation, working under pressure, and moving around new programs.
        </li>
    </ul>`;
    
    container.replaceChild(newDiv, originalDiv);

}
function changeText4(){
    document.getElementById("h1text").innerHTML = "My goal:"; // change h1 element
    var container = document.getElementById('text');
    var originalDiv = document.getElementById('main_text');
    var newDiv = document.createElement('div');
    newDiv.id = "main_text";
    newDiv.innerHTML = `
    <p>
        I started to code in the past, but as a hobby, then took quite a long break. I am definitely into code. Currently, I am working in the hospital as an HCA. I was comparing nursing to codding, and I realized I like codding more than nursing. The main reason is that computers and code are more familiar with my personality.
    </p>
    <h2>
        Goals:
    </h2>
    <ul>
        <li>
            Start carreer as front end developer (apprenticeship/entry posision/inter position)</li><li>Get know cod in professional way,
        </li>
        <li>
            Extend my skills to full-stack web developer,
        </li>
    </ul>`;
    
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
