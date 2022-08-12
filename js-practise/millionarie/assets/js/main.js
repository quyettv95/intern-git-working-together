const questions = [
  {
    id: 1,
    question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
    options: {
      a: "Austrlia mở rộng",
      b: "Wimbledon",
      c: "Roland Garos",
      d: "Mỹ mở rộng",
    },
    answer: "Austrlia mở rộng",
    score: 200000,
  },
  {
    id: 2,
    question:
      "Cùng với Hà Nội T&T (vô địch V-League 2010), CLB nào của Việt Nam tham dự AFC Cup 2011?",
    options: {
      a: "SHB Đà Nẵng",
      b: "Sông Lam Nghệ An",
      c: "Hoàng Anh Gia Lai",
      d: "Becamex Bình Dương",
    },
    answer: "Sông Lam Nghệ An",
    score: 400000,
  },
  {
    id: 3,
    question: "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
    options: {
      a: "Nhật Bản",
      b: "Hàn Quốc",
      c: "Qatar",
      d: "Iraq",
    },
    answer: "Qatar",
    score: 600000,
  },
  {
    id: 4,
    question: "Đội nào lên ngôi vô địch AFC Asian Cup 2011 tổ chức tại Qatar?",
    options: {
      a: "Nhật Bản",
      b: "Australia",
      c: "Hàn Quốc",
      d: "Uzbekistan",
    },
    answer: "Nhật Bản",
    score: 1000000,
  },
  {
    id: 5,
    question:
      "Ai là nhạc sĩ Việt Nam đầu tiên viết opera với tác phẩm “Cô sao” và sau đó là “Người tạc tượng”?",
    options: {
      a: "Trọng Đài",
      b: "Trần Hoàn",
      c: "Hoàng Vân",
      d: "Đỗ Nhuận",
    },
    answer: "Đỗ Nhuận",
    score: 2000000,
    checkPoint: true,
  },
  {
    id: 6,
    question: "Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?",
    options: {
      a: "Nghệ An",
      b: "Quảng Ninh",
      c: "Quảng Trị",
      d: "Quảng Ngãi",
    },
    answer: "Quảng Trị",
    score: 3000000,
  },
  {
    id: 7,
    question: "Trong các cây cầu sau, cầu nào là cầu xoay?",
    options: {
      a: "Cầu Thanh Trì",
      b: "Cầu Sông Hàn",
      c: "Cầu Thị Nại",
      d: "Cầu Cần Thơ",
    },
    answer: "Cầu Sông Hàn",
    score: 6000000,
  },
  {
    id: 8,
    question: "Đại Ngu là quốc hiệu của triều đại nào?",
    options: {
      a: "Triều Ngô",
      b: "Các chúa Nguyễn",
      c: "Nhà Tây Sơn",
      d: "Triều Hồ",
    },
    answer: "Triều Hồ",
    score: 10000000,
  },
  {
    id: 9,
    question: "Các vua Hùng đặt quốc hiệu nước ta là gì?",
    options: {
      a: "Văn Lang",
      b: "Âu Lạc",
      c: "Vạn Xuân",
      d: "Đại Việt",
    },
    answer: "Văn Lang",
    score: 14000000,
  },
  {
    id: 10,
    question: "An Dương Vương đặt quốc hiệu nước ta là gì?",
    options: {
      a: "Đại Việt",
      b: "Đại Cồ Việt",
      c: "Vạn Xuân",
      d: "Âu Lạc",
    },
    answer: "Âu Lạc",
    score: 22000000,
    checkPoint: true,
  },
  {
    id: 11,
    question:
      "Năm 1010, Lý Thái Tổ đã cho xây dựng điện nào ở trung tâm hoàng thành Thăng Long?",
    options: {
      a: "Điện Càn Thành",
      b: "Điện Càn Chánh",
      c: "Điện Kính Thiên",
      d: "Điện Càn Nguyên",
    },
    answer: "Điện Kính Thiên",
    score: 30000000,
  },
  {
    id: 12,
    question: '"Điêu tàn" là tập thơ đầu tiên của nhà thơ nào?',
    options: {
      a: "Anh Thơ",
      b: "Thế Lữ",
      c: "Bích Khê",
      d: "Chế Lan Viên",
    },
    answer: "Chế Lan Viên",
    score: 40000000,
  },
  {
    id: 13,
    question:
      "Hội nghị chống biến đổi khí hậu lần thứ 17- 2011 được tổ chức tại nước nào?",
    options: {
      a: "Đan Mạch (2011)",
      b: "Mexico (2010)",
      c: "Nam Phi (2011)",
      d: "Quatar và Hàn Quốc (2012)",
    },
    answer: "Nam Phi (2011)",
    score: 60000000,
  },
  {
    id: 14,
    question:
      "Ai được bầu làm Tổng bí thư Đảng cộng sản Việt Nam tại Đại hội XI?",
    options: {
      a: "Nguyễn Phú Trọng",
      b: "Nguyễn Sinh Hùng",
      c: "Trương Tấn Sang",
      d: "Nguyễn Tấn Dũng",
    },
    answer: "Nguyễn Phú Trọng",
    score: 85000000,
  },
  {
    id: 15,
    question: "Tỉnh nào đăng cai tổ chức Năm du lịch Quốc gia 2012?",
    options: {
      a: "Thanh Hoá",
      b: "Lâm Đồng",
      c: "Hải Phòng",
      d: "Thừa Thiên Huế",
    },
    answer: "Thừa Thiên Huế",
    score: 150000000,
    checkPoint: true,
  },
];

// define audio
const beginAudio = new Audio("/js-practise/millionarie/assets/audio/begin.mp3");
const startAudio = new Audio("/js-practise/millionarie/assets/audio/start.mp3");
const correctAudio = new Audio(
  "/js-practise/millionarie/assets/audio/correct.mp3"
);
const wrongAudio = new Audio("/js-practise/millionarie/assets/audio/wrong.mp3");
const questionAudio = new Audio(
  "/js-practise/millionarie/assets/audio/question.mp3"
);

// question countdown
beginAudio.play();
let time = 60;
let countdown = setInterval(function () {
  if (time <= 0 && startBtn.classList.contains("close")) {
    // clearInterval(countdown);
    reset();
    alert("time out");
  } else if (startBtn.classList.contains("close")) {
    time--;
  }

  document.getElementById("timer").innerHTML = time;
}, 1000);

// choose right question
//render questions
var questIndex = 0;
let total = 0;

function renderQuest(questIndex) {
  document.querySelector(".currentMoney").innerHTML = total + " vnd";

  document.querySelector(".quest-index").innerHTML =
    "Cau so: " + questions[questIndex].id;
  document.querySelector(".point").innerHTML =
    "Thuong: " + questions[questIndex].score;
  document.querySelector(".question").innerHTML =
    questions[questIndex].question;
  document.querySelector("#answerA").children[1].innerText =
    questions[questIndex].options.a;
  document.querySelector("#answerB").children[1].innerText =
    questions[questIndex].options.b;
  document.querySelector("#answerC").children[1].innerText =
    questions[questIndex].options.c;
  document.querySelector("#answerD").children[1].innerText =
    questions[questIndex].options.d;

  let ansOptions = document.getElementsByClassName("answer-item");

  for (let x of ansOptions) {
    if (x.classList.contains("close")) {
      x.classList.remove("close");
    }
  }
  // var time = 60;

  const leave = document.getElementById("leave");
  leave.addEventListener("click", () => {
    reset();
  });
}

renderQuest(questIndex);

let startBtn = document.getElementById("start");

//start game function
function start() {
  startAudio.play();
  time = 60;
  questIndex = 0;
  startBtn.classList.add("close");
  document.getElementById("game").classList.remove("close");
}

//choose wrong or time out or leave
function reset() {
  // time = 60;
  // clearInterval(countdown);

  // questIndex = 0;
  // startBtn.classList.remove("close");
  // document.getElementById("game").classList.add("close");

  location.reload();
}

startBtn.addEventListener("click", () => {
  start();
});

//check answer
let ansOptions = document.getElementsByClassName("answer-item");

for (let ans of ansOptions) {
  ans.addEventListener("click", () => {
    if (
      ans.children[1].innerText == questions[questIndex].answer &&
      questIndex < questions.length - 1
    ) {
      correctAudio.play();
      total += questions[questIndex].score;
      questIndex++;
      renderQuest(questIndex);
      time = 60;
      // clearInterval(countdown);
    } else if (
      ans.children[1].innerText == questions[questIndex].answer &&
      questIndex == questions.length - 1
    ) {
      total += questions[questIndex].score;
      correctAudio.play();
      alert("ban da chien thang voi phan thuong la: " + total);
    } else {
      wrongAudio.play();
      // await new Promise(r => setTimeout(r, 5000));
      alert("ban da tra loi sai. phan thuong cua ban la: " + total);
      reset();
    }
  });
}

// 50/50
function half(questIndex) {
  let ansOptions = document.getElementsByClassName("answer-item");
  let ansContents = [];
  for (let x of ansOptions) {
    if (x.children[1].innerHTML != questions[questIndex].answer) {
      ansContents.push(x);
    }
  }
  // console.log(ansContents);

  let random = [Math.floor(Math.random() * ansContents.length)];
  // console.log(random);
  for (let i = 0; i < ansContents.length; i++) {
    if (i != random) {
      // console.log(ansContents[i]);
      ansContents[i].classList.add("close");
    }
  }
  // console.log(ansContents);
}

const fifty = document.getElementById("50/50");

const help = document.getElementsByClassName("help-item");
// console.log(help);

for (const x of help) {
  x.addEventListener("click", function () {
    if (x.id == "50/50" && x.children[1].style.visibility != "visible") {
      half(questIndex);
    }

    x.children[1].style.visibility = "visible";
    // console.log(x.style.visibility);
  });
}

// vitory
