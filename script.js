const calendar = document.getElementById("calendar");
const inputPage = document.getElementById("input-page");
const selectedDateElement = document.getElementById("selected-date");
const currentDateElement = document.getElementById("current-date");
const calenderpage = document.getElementById('calenderpage');
const inputbox = document.getElementById('inputbox');
const illust = document.getElementById('illust');





const dataKey = "mealData";
let mealData = JSON.parse(localStorage.getItem(dataKey)) || {};
let previousMealData = {};

const maxValues = {
    water: 1,
    staple: 7,
    side2: 6,
    main: 5,
    dairy: 2,
    fruit: 2
};

function createCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    currentDateElement.textContent = `${year}.${month + 1}`;

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const emptyDays = firstDayOfMonth % 7;

    let calendarHtml = "";

   for (let i = 0; i < emptyDays; i++) {
        calendarHtml += `<div class="day empty"></div>`;
    }

    for (let day = 1; day <= lastDateOfMonth; day++) {
        const isToday = day === today;
        const data = mealData[day] || { water: 0, staple: 0, side2: 0, main: 0, dairy: 0, fruit: 0 };
        calendarHtml += createDayBox(day, data, isToday);
    }

    calendar.innerHTML = calendarHtml;
}

function createDayBox(day, data, isToday) {
    const waterBoxes = createBoxDisplay(data.water, maxValues.water);
    const stapleBoxes = createBoxDisplay(data.staple, maxValues.staple);
    const side2Boxes = createBoxDisplay(data.side2, maxValues.side2);
    const mainBoxes = createBoxDisplay(data.main, maxValues.main);
    const dairyBoxes = createBoxDisplay(data.dairy, maxValues.dairy);
    const fruitBoxes = createBoxDisplay(data.fruit, maxValues.fruit);


const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date(year, month, day);
const dayOfWeek = date.getDay();

const dateClass = dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : '';

    return `
       <div class="day ${isToday ? 'current-day' : ''}" id="day-${day}" onclick="openInputPage(${day})">
            <strong class="${dateClass}">${day}</strong> <!-- 日にちを表示 -->
            <div class="box-display water">${waterBoxes}</div>
            <div class="box-display staple">${stapleBoxes}</div>
            <div class="box-display side2">${side2Boxes}</div>
            <div class="box-display main">${mainBoxes}</div>
            <div class="box-display-item"> <!-- 新たに追加 -->
                <div class="box-display dairy">${dairyBoxes}</div>
                <div class="box-display fruit">${fruitBoxes}</div>
            </div> <!-- ここまで -->
        </div>`;
}


/*
function createDayBox(day, data, isToday) {
    const waterBoxes = createBoxDisplay(data.water, maxValues.water);
    const stapleBoxes = createBoxDisplay(data.staple, maxValues.staple);
    const side2Boxes = createBoxDisplay(data.side2, maxValues.side2);
    const mainBoxes = createBoxDisplay(data.main, maxValues.main);
    const dairyBoxes = createBoxDisplay(data.dairy, maxValues.dairy);
    const fruitBoxes = createBoxDisplay(data.fruit, maxValues.fruit);

    return `
        <div class="day ${isToday ? 'current-day' : ''}" id="day-${day}" onclick="openInputPage(${day})">
            <strong>${day}</strong>
            <div class="box-display water">${waterBoxes}</div>
            <div class="box-display staple">${stapleBoxes}</div>
            <div class="box-display side2">${side2Boxes}</div>
            <div class="box-display main">${mainBoxes}</div>
            <div class="box-display dairy">${dairyBoxes}</div>
            <div class="box-display fruit">${fruitBoxes}</div>
        </div>`;
}
*/

function createBoxDisplay(filledCount, maxCount) {
    return Array.from({ length: maxCount }, (_, i) => `<span class="${i < filledCount ? 'filled' : 'empty'}">■</span>`).join('');
}

function openInputPage(day) {
    inputPage.style.display = "block";
    calendar.style.display = "none";
    calenderpage.style.display = 'none'; 
    illust.style.display = "none";

   
   


    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1);
    const date = String(day);

    // 曜日を計算
    const selectedDate = new Date(year, now.getMonth(), day);
    const dayOfWeek = selectedDate.getDay(); // 0: 日曜日, 1: 月曜日, ..., 6: 土曜日

    // 曜日を文字列に変換
    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
    const weekDay = dayNames[dayOfWeek];

    // 曜日を含めて表示
    selectedDateElement.textContent = `${year}.${month}.${date} (${weekDay})`;

    currentDateElement.style.display = 'none'
    

    previousMealData = { ...mealData[day] };

    const data = mealData[day] || { water: 0, staple: 0, side2: 0, main: 0, dairy: 0, fruit: 0 };

    updateInputBoxes("water-boxes", data.water, maxValues.water);
    updateInputBoxes("staple-boxes", data.staple, maxValues.staple);
    updateInputBoxes("side2-boxes", data.side2, maxValues.side2);
    updateInputBoxes("main-boxes", data.main, maxValues.main);
    updateInputBoxes("dairy-boxes", data.dairy, maxValues.dairy);
    updateInputBoxes("fruit-boxes", data.fruit, maxValues.fruit);
}


/*
function openInputPage(day) {
    inputPage.style.display = "block";
    calendar.style.display = "none";

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1);
    const date = String(day);

    selectedDateElement.textContent = `${year}.${month}.${date}`;


    currentDateElement.style.display = "none"; 

    const data = mealData[day] || { water: 0, staple: 0, side2: 0, main: 0, dairy: 0, fruit: 0 };
    updateInputBoxes("water-boxes", data.water, maxValues.water);
    updateInputBoxes("staple-boxes", data.staple, maxValues.staple);
    updateInputBoxes("side2-boxes", data.side2, maxValues.side2);
    updateInputBoxes("main-boxes", data.main, maxValues.main);
    updateInputBoxes("dairy-boxes", data.dairy, maxValues.dairy);
    updateInputBoxes("fruit-boxes", data.fruit, maxValues.fruit);
}
*/

function imgopen() {
    inputbox.style.display = "none";
    illust.style.display = "block";
    changeBackground();
    
}

function imgclose() {
    resetBackground();
    inputbox.style.display = "block";
    illust.style.display = "none";
}
function changeBackground() {
    document.body.style.backgroundImage = "green.png";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor = "";
}

function resetBackground() {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "white";
}


function showCalendar() {
    inputPage.style.display = "none";
    calendar.style.display = "grid";
    calenderpage.style.display = 'block';
    illust.style.display = "none";


    createCalendar();
   
    currentDateElement.style.display = 'block';

    
}

function updateInputBoxes(containerId, filledCount, maxCount) {
    const container = document.getElementById(containerId);
    container.innerHTML = Array.from({ length: maxCount }, (_, i) => 
        `<div class="box ${i < filledCount ? 'selected' : ''}" onclick="toggleBox('${containerId}', ${i}, ${maxCount})"></div>`
    ).join('');
}

function toggleBox(containerId, index, maxCount) {
    const container = document.getElementById(containerId);
    const boxes = container.children;
    boxes[index].classList.toggle('selected');
    const selectedCount = Array.from(boxes).filter(box => box.classList.contains('selected')).length;
    saveBoxData(containerId, selectedCount, maxCount);
}

function saveBoxData(containerId, filledCount) {
    const selectedDateText = document.getElementById("selected-date").textContent;
    const day = parseInt(selectedDateText.split('.')[2]); // 日付の部分だけを取得

    mealData[day] = mealData[day] || { water: 0, staple: 0, side2: 0, main: 0, dairy: 0, fruit: 0 };

    const categoryMap = {
        "water-boxes": "water",
        "staple-boxes": "staple",
        "side2-boxes": "side2",
        "main-boxes": "main",  
        "dairy-boxes": "dairy",
        "fruit-boxes": "fruit"
    };

    mealData[day][categoryMap[containerId]] = filledCount;
}

/*
function saveBoxData(containerId, filledCount) {
    const day = parseInt(document.getElementById("selected-date").textContent);
    mealData[day] = mealData[day] || { water: 0, staple: 0, side2: 0, main: 0, dairy: 0, fruit: 0 };

    const categoryMap = {
        "water-boxes": "water",
        "staple-boxes": "staple",
        "side2-boxes": "side2",
        "main-boxes": "main",  
        "dairy-boxes": "dairy",
        "fruit-boxes": "fruit"
    };

    mealData[day][categoryMap[containerId]] = filledCount;
}
*/

function saveData() {
    localStorage.setItem(dataKey, JSON.stringify(mealData));
    showCalendar();
}

function backCalendar() {
    showCalendar();

    // 戻るボタンが押されたときに、前の状態を復元
    const day = parseInt(document.getElementById("selected-date").textContent.split('.').pop());
    mealData[day] = previousMealData; // 保存した状態を復元
    createCalendar(); // カレンダーを再作成
}

/*
function saveData() {
    localStorage.setItem(dataKey, JSON.stringify(mealData));
    showCalendar();
}
*/

createCalendar();                        
