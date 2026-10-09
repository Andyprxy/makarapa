const menu=document.querySelector('.menu'),nav=document.querySelector('.nav-links');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){closeMenu();menu.focus()}});
matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
const pause=document.querySelector('.ribbon-control');pause?.addEventListener('click',()=>{const paused=document.querySelector('.ribbon').classList.toggle('paused');pause.textContent=paused?'Play ribbon ↗':'Pause ribbon Ⅱ';pause.setAttribute('aria-pressed',String(paused))});
const dialog=document.querySelector('#lightbox');if(dialog){document.querySelectorAll('.gallery-grid button').forEach(b=>b.addEventListener('click',()=>{let im=b.querySelector('img');document.querySelector('#lightbox-image').src=im.src;document.querySelector('#lightbox-image').alt=im.alt;document.querySelector('#lightbox-caption').textContent=im.alt;dialog.showModal()}));document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}})}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==v)other.pause()})));
