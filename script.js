const list=document.getElementById('list');const q=document.getElementById('q');
q.addEventListener('input',e=>{const v=e.target.value.toLowerCase();Array.from(list.rows).forEach(r=>{
const n=r.cells[0].textContent.toLowerCase();const d=r.cells[1].textContent.toLowerCase();
r.style.display=(n.includes(v)||d.includes(v))?'':'none';});});
function resetSearch(){q.value='';q.dispatchEvent(new Event('input'));}
