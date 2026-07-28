/* ===== 共享测验组件 =====
   用法:在 lesson 里放一个 <div class="quiz">,结构:
   <div class="quiz" data-answer="b">
     <div class="q">问题文本</div>
     <ul class="opts">
       <li><label><input type="radio" name="q1" value="a"> 选项A</label></li>
       <li><label><input type="radio" name="q1" value="b"> 选项B</label></li>
     </ul>
     <div class="reveal"><strong>答案: </strong>解析文本</div>
   </div>
   点击选项后自动判对错并展示解析。
*/
document.addEventListener("change", function(e){
  var inp = e.target;
  if(!inp || inp.type !== "radio" || !inp.closest(".quiz")) return;
  var box = inp.closest(".quiz");
  var correct = box.getAttribute("data-answer");
  var labels = box.querySelectorAll(".opts label");
  labels.forEach(function(lb){ lb.style.background=""; lb.style.borderColor=""; lb.style.fontWeight=""; });
  var picked = inp.value;
  var lb = inp.closest("label");
  if(picked === correct){
    lb.style.background="#e8f4ec"; lb.style.borderColor="#1c6b3a";
  } else {
    lb.style.background="#fbeee8"; lb.style.borderColor="#9a3b1c";
    // 标出正确项
    var right = box.querySelector('input[value="'+correct+'"]');
    if(right){ var rl=right.closest("label"); rl.style.borderColor="#1c6b3a"; rl.style.fontWeight="700"; }
  }
  box.classList.add("done");
});
