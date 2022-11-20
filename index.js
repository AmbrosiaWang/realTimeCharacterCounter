const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");



textareaEl.addEventListener("keyup",function(){
    updateCounter();
});

updateCounter()
// 可讓網頁刷新時 使畫面totalCounterEl & remaininCounterEl 有數字呈現(就是先執行下面函式)

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;

}