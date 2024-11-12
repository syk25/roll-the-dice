// 플레이어1 주사위 설정
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let $img1 = document.querySelector(".img1");
let dice1Attribute = `./images/dice${randomNumber1}.png`;
let dice1 = $img1.setAttribute("src", dice1Attribute);

// 플레이어2 주사위 설정
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let $img2 = document.querySelector(".img2");
let dice2Attribute = `./images/dice${randomNumber2}.png`;
let dice2 = $img2.setAttribute("src", dice2Attribute);


// 승패결과
let $h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    $h1.innerText = "1번 승! 🚀";
} else if (randomNumber1 < randomNumber2) {
    $h1.innerText = "2번 승! 🚀";
} else {
    $h1.innerText = "무승부!";
}
