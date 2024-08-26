function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "HTML not found.";}
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};
includeHTML();
window.setTimeout(function(){
goIncludeHTML();
}, 4000);

window.setTimeout(function() {
var contents = document.getElementsByClassName("content");
for (var i = 0; i < contents.length; i++) {
      contents[i].style.opacity ="0";
    }
    var loaderBox = document.getElementById("loaderBox");
    loaderBox.style.opacity = "0";
loaderBox.style.animation = "fade-out 1s ease-in-out";
window.setTimeout(function() {
    loaderBox.style.display = "none";
}, 1000);
    for (var i = 0; i < contents.length; i++) {
contents[i].style.opacity ="1";
      contents[i].style.animation = "fade-in 1s ease-in-out";
    }
  }, 4500);
var svg = document.querySelector('svg');
    svg.addEventListener('load', function() {
      svg.classList.add('active');
    });

const texts = [
    "سـبـحـان الـلّٰـه وبـحـمـده، سـبـحـان الـلّٰـه الـعـظـيـم.",
    "لا إلـه إلا الـلّٰـه وحـده لا شـريـك لـه، لـه الـمـلـك ولـه الـحـمـد وهـو عـلـى كـل شـيء قـديـر.",
    "لا حـول ولا قـوة إلا بـالـلّٰـه.",
    "الـلـهم صـلِّ وسـلـم وبـارك عـلـى سـيـدنـا مـحـمـد.",
    "سـبـحـان الـلّٰـه، والـحـمـد لـلّٰـه، ولا إلـه إلا الـلّٰـه، والـلّٰـه أكـبـر.",
    "الـحـمـد لـلّٰـه رب الـعـالـمـيـن.",
    "أسـتـغـفـر الـلّٰـه الـذي لا إلـه إلا هـو الـحـي الـقيـوم، وأتـوب إلـيـه.",
    "الـلّٰـه أكـبـر كـبـيـرًا، والـحـمـد لـلّٰـه كـثـيـرًا، وسـبـحـان الـلّٰـه بـكـرة وأصـيـلًا.",
    "لا إلـه إلا أنـت سـبـحـانـك إنـي كـنـت مـن الـظـالـمـيـن.",
    "الـلـهم أعـنّـي عـلـى ذكـرك، وشـكـرك، وحـسـن عـبـادتـك."
];

const marqueeElement = document.querySelector('.marquee p');
let previousText = '';

setInterval(function() {
    let randomIndex = Math.floor(Math.random() * texts.length);
    let newText = texts[randomIndex];

    while(newText === previousText) {
        randomIndex = Math.floor(Math.random() * texts.length);
        newText = texts[randomIndex];
    }

    marqueeElement.textContent = newText;
    previousText = newText;
}, 8000);

function cls(){
const swal = Swal.mixin({
  customClass: {
    confirmButton: "alertBtns confirmButton",
    cancelButton: "alertBtns cancelButton",
    closeButton: "closeButton"
  },
  buttonsStyling: false
});
swal.fire({
  title: "هل أنت متأكد؟",
  html: "<span dir='rtl'>إعادة جميع الأعمال يعني أنه سيتم إظهار جميع الأعمال التي أتممتها أنت في الموقع.</span>",
  iconHtml: "<i class='fa fas fa-exclamation-triangle warning-icon'></i>",
  showCancelButton: true,
  showCloseButton: true,
  confirmButtonText: "نعم، أعدها!",
  cancelButtonText: "لا، ألغِ ذلك!",
  reverseButtons: true,
}).then((result) => {
  if (result.isConfirmed) {
    localStorage.clear();
setTimeout(function(){
location.reload();
},300);
  }
});
}

function inap(){
const swal = Swal.mixin({
  customClass: {
    closeButton: "closeButton",
    confirmButton: "okBtn",
  },
  buttonsStyling: false
});
swal.fire({
  confirmButtonText: "حسنٌ",
  title: "تثبيت التطبيق:",
  html: `<details dir='rtl'><summary>للآندرويد</summary>
افتح الموقع باستخدام متصفح كروم، انقر على القائمة الجانبية ثم انقر على "إضافة إلى الصفحة الرئيسية" ثم اضغط "تثبيت".
</details>
<details dir='rtl'><summary>للآيفون وللآيباد</summary>
افتح الموقع باستخدام متصفح سفاري، انقر على زر المشاركة، ثم انقر على "إضافة إلى الصفحة الرئيسية".
</details>
`,
  iconHtml: "<i class='fa fas fa-download install-app-icon'></i>",
  showCloseButton: true,
});
}

function mpc(){
const swal = Swal.mixin({
  customClass: {
    closeButton: "closeButton",
    confirmButton: "okBtn",
  },
  buttonsStyling: false
});
swal.fire({
  confirmButtonText: "حسنٌ",
  title: "أبرز المساهمين:",
  html: `<span dir='rtl'>
✯ إبراهيم الدخيل.
<br>
✯ إبراهيم الشايع.
<br>
✯ حسن الدعيجي.
<br>
✯ سليمان خليل.
<br>
✯ عبدالعزيز القحطاني.
<br>
✯ عيد العتيبي.
<br><br>
<span dir='rtl' style='font-weight: 500;'>جزى الله الجميع خيرًا.</span>
</span>`,
  iconHtml: "<i class='fa fas fa-star star-icon'></i>",
  showCloseButton: true,
});
}

function updateViewportMetaTag() {
  var viewportMetaTag = document.querySelector('meta[name="viewport"]');

  if (screen.width <= 380) {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.65');
  }
else if (screen.width <= 434) {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.85');
  }
 else if (screen.width >= 1000) {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.05');
  } else {
    viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
  }
}

updateViewportMetaTag();

window.addEventListener('resize', updateViewportMetaTag);

function pwaOnlyFunction() {
  document.querySelector('#install-app').style.display="none";
document.querySelector('#most-prominent-contributors').style.left="-50px";
}

function checkUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('on') && urlParams.get('on') === 'pwa') {
    pwaOnlyFunction();
  }
}

checkUrl();

function displayDates() {
    var today = moment();
    var hijriDate = today.format('التاريخ الهجري: ' + 'iD' + ' / ' + 'iM' + ' / ' + 'iYYYY' + 'ھ');
    var miladiDate = today.format('التاريخ الميلادي: ' + 'D' + ' / ' + 'M' + ' / ' + 'YYYY' + 'م');

    document.getElementById('hijri-date').textContent = hijriDate;
    document.getElementById('miladi-date').textContent = miladiDate;
}

displayDates();

function hideRow(checkbox) {
  var row = checkbox.parentNode.parentNode;
  var rowId = row.getAttribute('data-row-id'); // Get data-row-id

  if (checkbox.checked) {
    localStorage.setItem(rowId, 'hidden'); // Use rowId for localStorage
    setTimeout(function() {
      row.style.display = 'none';
      row.style.opacity = '0.5';
      row.style.filter = 'grayscale(1)';
      row.querySelector('input[type="checkbox"]').disabled = true;
    }, 150);
  } else {
    localStorage.removeItem(rowId); // Use rowId for localStorage
    row.style.display = '';
    row.style.animation = '';
  }
}

function goIncludeHTML(){

  const selectElement = document.getElementById("select");
    const tables2select = document.querySelectorAll('table');
  
    selectElement.addEventListener("change", function() {
      const selectedValue = this.value;
  for(t = 0; t < tables2select.length; t++){
  table2select = tables2select[t];
     
      for (let i = 1; i < table2select.rows.length; i++) {
        const row = table2select.rows[i];
        const firstCell = row.cells[0]; 
  
        if (selectedValue === "" || firstCell.textContent === selectedValue) {
          row.style.display = ""; 
        } 
      else if(selectedValue === "" || firstCell.textContent === "المادة"){
          row.style.display = "";
      }
      else {
          row.style.display = "none"; 
        }
      }
  }
    });
  
  const workTr = document.querySelectorAll('.work-tr');
  
  var timeInMS = {
      day: 60 * 60 * 24 * 1000,
      hour: 60 * 60 * 1000
  }
  
  function checkExpiration() {
      const currentDate = new Date();
  
      workTr.forEach(row => {
          const expireDate = new Date(row.getAttribute('data-expire'));
  
                  var startedText, nearExpiryText, endedText;
          nearExpiryText = ['تبقى عليه يوم واحد فقط!', 'تبقى عليه أقل من يوم!', 'تبقى عليه ساعة واحدة!', 'تبقى عليه أقل من ساعة!'];
          endedText = 'انتهى.';
          if(document.querySelector('.exams').contains(row)) {
              startedText = 'لم يُختبَر بعد.';
          } else {
              startedText = 'بدأ.';
          }
  
          if(currentDate > expireDate) {
              row.classList.add('expired');
              row.classList.remove('near-expiry');
              row.querySelector('.status').textContent = endedText;
              row.setAttribute('data-status', 'ended');
          }
  else if(expireDate - currentDate == timeInMS.hour) {
              row.classList.add('near-expiry');
              row.classList.remove('expired');
              row.querySelector('.status').textContent = nearExpiryText[2];
              row.setAttribute('data-status', 'near-expiry');
          } else if(expireDate - currentDate < timeInMS.hour) {
              row.classList.add('near-expiry');
              row.classList.remove('expired');
              row.querySelector('.status').textContent = nearExpiryText[3];
              row.setAttribute('data-status', 'near-expiry');
          }
  else if(expireDate - currentDate == timeInMS.day) {
              row.classList.add('near-expiry');
              row.classList.remove('expired');
              row.querySelector('.status').textContent = nearExpiryText[0];
              row.setAttribute('data-status', 'near-expiry');
          } else if(expireDate - currentDate < timeInMS.day) {
              row.classList.add('near-expiry');
              row.classList.remove('expired');
              row.querySelector('.status').textContent = nearExpiryText[1];
              row.setAttribute('data-status', 'near-expiry');
          } else {
              row.classList.remove('near-expiry');
              row.classList.remove('expired');
              row.querySelector('.status').textContent = startedText;
              row.setAttribute('data-status', 'started');
          }
      });
  }
  
  checkExpiration();
  
  setInterval(checkExpiration, 1000);
  
  workTr.forEach(row => { 
    // Assuming data-row-id is already set in your HTML
    row.querySelector('input[type="checkbox"]').addEventListener('change', function() {
      hideRow(this);
    });
  
    var rowId = row.getAttribute('data-row-id'); // Get data-row-id
    var rowState = localStorage.getItem(rowId); // Use rowId for localStorage
    if (rowState === 'hidden') {
      row.style.opacity = '0.5';
      row.style.filter = 'grayscale(1)';
      row.style.display = 'none';
      row.querySelector('input[type="checkbox"]').checked = true;
      row.querySelector('input[type="checkbox"]').disabled = true;
    }
  });
  
  function sortRows(table) {
      var rows = Array.from(table.getElementsByTagName('tr'));
  
      var rowsToSort = rows.slice(2);
  
      var rowsWithDataStatus = [];
      var rowsWithoutDataStatus = [];
  
      rowsToSort.forEach(function(row) {
          if(row.hasAttribute('data-status')) {
              rowsWithDataStatus.push(row);
          } else {
              rowsWithoutDataStatus.push(row);
          }
      });
  
      rowsWithDataStatus.sort(function(row1, row2) {
          var status1 = row1.getAttribute('data-status');
          var status2 = row2.getAttribute('data-status');
  
          if(status1 !== status2) {
              if(status1 === 'near-expiry') {
                  return -1;
              } else if(status2 === 'near-expiry') {
                  return 1;
              } else if(status1 === 'started') {
                  return -1;
              } else if(status2 === 'started') {
                  return 1;
              } else {
                  return 0;
              }
          }
  
          var expire1 = new Date(row1.getAttribute('data-expire'));
          var expire2 = new Date(row2.getAttribute('data-expire'));
  
          if(expire1 < expire2) {
              return -1;
          } else if(expire1 > expire2) {
              return 1;
          } else {
              return 0;
          }
      });
  
      while(table.firstChild) {
          table.removeChild(table.firstChild);
      }
  
      for(var i = 0; i < 2; i++) {
          table.appendChild(rows[i]);
      }
  
      rowsWithDataStatus.forEach(function(row) {
          table.appendChild(row);
      });
  
      rowsWithoutDataStatus.forEach(function(row) {
          table.appendChild(row);
      });
  }
  
  var tables = document.querySelectorAll('.exams, .assignments, .researches, .projects');
  
  tables.forEach(function(table) {
      sortRows(table);
  });
  
  const hideEndedRows = document.getElementById('hide-ended-rows');
  const rows = document.querySelectorAll('tr[data-status="ended"]');
  
  const endedRowsState = localStorage.getItem('endedRowsState');
  if (endedRowsState && endedRowsState === 'hidden') {
      hideRows();
  }
  
  hideEndedRows.addEventListener('click', function () {
          hideRows();
  });
  
  function hideRows() {
    rows.forEach(row => {
      setTimeout(() => {
        row.style.display = 'none';
        row.style.opacity = '0.5';
        row.style.filter = 'grayscale(1)';
        row.querySelector('input[type="checkbox"]').disabled = true;
      }, 0);
    });
    hideEndedRows.dataset.state = 'hidden';
    localStorage.setItem('endedRowsState', 'hidden');
  }

}
