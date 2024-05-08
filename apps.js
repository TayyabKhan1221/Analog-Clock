setInterval(() => {
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  let sec_dor = document.querySelector(".sec_dot");
  let min_dor = document.querySelector(".min_dot");
  let hr_dor = document.querySelector(".hr_dot");
  let hr = document.getElementById("hr");
  let mn = document.getElementById("mn");
  let sc = document.getElementById("sc");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hh.style.strokeDashoffset = 510 - (510 * h) / 12;
  //   12 hrs
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;
  //   60 minutes
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;
  // 60 seconds

  sec_dor.style.transform = `rotateZ(${s * 6}deg)`;
  //   360 / 60seconds = 6
  min_dor.style.transform = `rotateZ(${m * 6}deg)`;
  // 360 / 60minutes = 6
  hr_dor.style.transform = `rotateZ(${h * 6}deg)`;
  //360 / 12hrs = 30

  hr.style.transform = `rotateZ(${h * 30}deg)`
  mn.style.transform = `rotateZ(${m * 6}deg)`
  sc.style.transform = `rotateZ(${s * 6}deg)`
});
