const E=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const H=(b,s=200,h={})=>new Response(b,{status:s,headers:{'content-type':'text/html;charset=utf-8',...h}});
const T={vi:{products:'Sản phẩm',news:'Tin tức',about:'Giới thiệu',contact:'Liên hệ',lang:'English'},en:{products:'Products',news:'News',about:'About Us',contact:'Contact',lang:'Tiếng Việt'}};
const DEF={hero:{vi:['Phớt cơ khí Sinoseal cho bơm và máy nén','Giải pháp làm kín chất lượng cao cho ngành dầu khí, lọc hóa dầu, hóa chất và nhiệt điện.'],en:['Sinoseal Mechanical Seals for Pumps and Compressors','High-quality sealing solutions for oil & gas, refinery, chemical and power industries.']},
about:{vi:['Về SNS-VN','Hãy giới thiệu công ty của bạn trong trang admin.'],en:['About SNS-VN','Describe your company in the admin page.']},
contact:{vi:['Liên hệ','Địa chỉ: ...\nĐiện thoại: ...\nEmail: ...'],en:['Contact','Address: ...\nPhone: ...\nEmail: ...']}};
const R={products:'product',news:'news'},L={vi:'vietnamese',en:'english'};
const IMG=/^https?:\/\/\S+\.(png|jpe?g|webp|gif|svg)(\?\S*)?$/i;
const paras=s=>(s||'').split(/\n\s*\n/);
const B=s=>paras(s).map(p=>IMG.test(p.trim())?`<img src="${E(p.trim())}" alt="">`:`<p>${E(p)}</p>`).join('');
const img=b=>(paras(b).find(p=>IMG.test(p.trim()))||'').trim();
const txt=b=>paras(b).filter(p=>!IMG.test(p.trim())).join(' ').replace(/\s+/g,' ').slice(0,155);
const U=(l,p)=>l=='en'?'/en'+(p=='/'?'':p):p;
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const CSS=`:root{--b:#0b5cb5;--n:#0a2f55;--g:#f1f5f8}*{box-sizing:border-box;margin:0}body{font:16px/1.6 Segoe UI,Arial,sans-serif;color:#1c2733}a{color:inherit;text-decoration:none}.w{max-width:1200px;margin:auto;padding:0 20px}header{position:sticky;top:0;background:#fff;box-shadow:0 1px #dde4ea;z-index:9}header .w{display:flex;align-items:center;justify-content:space-between;min-height:72px;flex-wrap:wrap}.lg{font:800 28px Arial;color:var(--b)}nav a{margin-left:26px;font-weight:700;color:var(--b);text-transform:uppercase;font-size:15px}nav .lang{border:1px solid var(--b);padding:3px 10px;border-radius:4px}.hero{background:linear-gradient(100deg,#0a58b0 40%,#a9c3df);color:#fff;padding:110px 0}.hero h1{font-size:46px;line-height:1.15;max-width:760px;margin-bottom:18px;color:#fff}.hero p{max-width:640px;font-size:19px;margin-bottom:28px}.bt{display:inline-block;background:var(--b);color:#fff;padding:12px 26px;font-weight:600;border:0;cursor:pointer;font-size:16px}.hero .bt{background:none;border:1px solid #fff;border-radius:40px}section{padding:56px 0}h1,h2{font-size:30px;margin-bottom:22px;color:#0b1b2b}.gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:22px}.cd{border:1px solid #dde4ea;padding:18px;text-align:center}.cd:hover{box-shadow:0 8px 24px rgba(11,92,181,.16)}.cd img,.im{display:block;width:100%;height:180px;object-fit:contain;background:var(--g);border-radius:6px;margin-bottom:12px}.cd h3{font-size:17px;font-weight:500}.ar{max-width:820px}.ar p{white-space:pre-line;margin-bottom:16px}.ar img{max-width:100%}footer{background:var(--n);color:#cfe0f2;padding:40px 0;white-space:pre-line}@media(max-width:700px){.hero h1{font-size:30px}nav a{margin:0 12px 0 0}}`;

async function init(env){if(!init.d){await env.DB.prepare('CREATE TABLE IF NOT EXISTS c(type TEXT,slug TEXT,vi_t TEXT,vi_b TEXT,en_t TEXT,en_b TEXT,ts INTEGER,PRIMARY KEY(type,slug))').run();init.d=1}}
const all=async(env,t)=>(await env.DB.prepare('SELECT * FROM c WHERE type=?1 ORDER BY ts DESC').bind(t).all()).results;
const one=(env,t,s)=>env.DB.prepare('SELECT * FROM c WHERE type=?1 AND slug=?2').bind(t,s).first();
async function S(env,k,l){const r=await one(env,'set',k);return r&&(r[l+'_t']||r[l+'_b'])?[r[l+'_t'],r[l+'_b']]:DEF[k][l]}
async function tr(env,s,f,t){if(!s)return'';return(await Promise.all(paras(s).map(async p=>{if(!p.trim()||IMG.test(p.trim()))return p;try{return(await env.AI.run('@cf/meta/m2m100-1.2b',{text:p,source_lang:L[f],target_lang:L[t]})).translated_text}catch(e){return p}}))).join('\n\n')}

function shell(o,b){const{l,p,t,d,s}=o;return H(`<!doctype html><html lang="${l}"><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>${E(t)}</title><meta name=description content="${E(d)}"><link rel=canonical href="${s}${U(l,p)}"><link rel=alternate hreflang=vi href="${s}${U('vi',p)}"><link rel=alternate hreflang=en href="${s}${U('en',p)}"><link rel=alternate hreflang=x-default href="${s}${U('vi',p)}"><meta property=og:title content="${E(t)}"><meta property=og:description content="${E(d)}">${o.i?`<meta property=og:image content="${E(o.i)}">`:''}<style>${CSS}</style><script type=application/ld+json>${JSON.stringify(o.ld).replace(/</g,'\\u003c')}</script></head><body><header><div class=w><a class=lg href="${U(l,'/')}">SNS-VN</a><nav>${Object.keys(T.vi).slice(0,4).map(k=>`<a href="${U(l,'/'+k)}">${T[l][k]}</a>`).join('')}<a class=lang href="${U(l=='vi'?'en':'vi',p)}">${T[l].lang}</a></nav></div></header>${b}<footer><div class=w>${E(o.f)}</div></footer></body></html>`)}
const card=(k,r,l)=>{const b=r[l+'_b']||r.vi_b,i=img(b);return`<a class=cd href="${U(l,'/'+k+'/'+r.slug)}">${i?`<img src="${E(i)}" alt="${E(r[l+'_t']||r.vi_t)}" loading=lazy>`:'<div class=im></div>'}<h3>${E(r[l+'_t']||r.vi_t)}</h3></a>`};

export const onRequest=async({request,env})=>{
 if(!env.DB)return H('Chưa gắn database D1 với tên biến DB (xem hướng dẫn).',500);
 await init(env);const u=new URL(request.url),s=u.origin;let p=u.pathname.replace(/\/+$/,'')||'/';
 if(p.startsWith('/admin'))return admin(request,env,u,p);
 if(p=='/robots.txt')return new Response(`User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${s}/sitemap.xml`);
 if(p=='/sitemap.xml'){const rs=(await env.DB.prepare('SELECT type,slug FROM c WHERE type!=?1').bind('set').all()).results;const ps=['/','/products','/news','/about','/contact',...rs.map(r=>'/'+(r.type=='product'?'products':'news')+'/'+r.slug)];return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${ps.flatMap(x=>['vi','en'].map(l=>`<url><loc>${s}${U(l,x)}</loc></url>`)).join('')}</urlset>`,{headers:{'content-type':'application/xml'}})}
 let l='vi';if(p=='/en'||p.startsWith('/en/')){l='en';p=p.slice(3)||'/'}
 const[ct,cb]=await S(env,'contact',l),org={'@context':'https://schema.org','@type':'Organization',name:'SNS-VN',url:s};
 const P=(t,d,b,x={})=>shell({l,p,s,t:t+' | SNS-VN',d,f:ct+'\n'+cb,ld:x.ld||org,i:x.i},b);
 const m=p.split('/').filter(Boolean),k=m[0];
 if(!m.length){const[ht,hb]=await S(env,'hero',l),[at,ab]=await S(env,'about',l),pr=await all(env,'product'),nw=await all(env,'news');
  return P(ht,hb,`<div class=hero><div class=w><h1>${E(ht)}</h1><p>${E(hb)}</p><a class=bt href="${U(l,'/products')}">${T[l].products} ›</a></div></div><section><div class=w><h2>${T[l].products}</h2><div class=gr>${pr.slice(0,10).map(r=>card('products',r,l)).join('')}</div></div></section><section style="background:#f1f5f8"><div class=w><h2>${T[l].news}</h2><div class=gr>${nw.slice(0,4).map(r=>card('news',r,l)).join('')}</div></div></section><section><div class="w ar"><h2>${E(at)}</h2>${B(ab)}</div></section>`)}
 if(R[k]){const rows=await all(env,R[k]);
  if(!m[1])return P(T[l][k],T[l][k],`<section><div class=w><h1>${T[l][k]}</h1><div class=gr>${rows.map(r=>card(k,r,l)).join('')}</div></div></section>`);
  const r=rows.find(x=>x.slug==m[1]);if(r){const t=r[l+'_t']||r.vi_t,b=r[l+'_b']||r.vi_b,i=img(b);
   return P(t,txt(b),`<section><div class="w ar"><h1>${E(t)}</h1>${B(b)}</div></section>`,{i,ld:{'@context':'https://schema.org','@type':k=='news'?'Article':'Product',[k=='news'?'headline':'name']:t,description:txt(b),image:i||undefined,datePublished:new Date(r.ts).toISOString()}})}}
 if(k=='about'||k=='contact'){const[t,b]=await S(env,k,l);return P(t,txt(b),`<section><div class="w ar"><h1>${E(t)}</h1>${B(b)}</div></section>`)}
 return H('Not found',404)};

async function admin(req,env,u,p){
 const pw=env.ADMIN_PASSWORD;if(!pw)return H('Hãy tạo biến ADMIN_PASSWORD trong Cloudflare.');
 const tok=await sha(pw+'sns-vn'),ok=(req.headers.get('Cookie')||'').includes('t='+tok),go=x=>new Response(null,{status:302,headers:{Location:x}});
 if(p=='/admin/login'&&req.method=='POST'){const f=await req.formData();return f.get('p')==pw?new Response(null,{status:302,headers:{Location:'/admin','Set-Cookie':`t=${tok};Path=/;HttpOnly;Secure;SameSite=Strict;Max-Age=2592000`}}):go('/admin')}
 if(!ok)return H(`<meta name=viewport content="width=device-width"><body style="font-family:sans-serif;max-width:320px;margin:90px auto"><h2>SNS-VN Admin</h2><form method=post action=/admin/login><input type=password name=p placeholder="Mật khẩu" style="width:100%;padding:10px"><br><br><button style="padding:10px 20px">Đăng nhập</button></form>`);
 if(req.method=='POST'){const f=await req.formData(),g=n=>(f.get(n)||'').trim(),type=g('type');
  if(p=='/admin/del')await env.DB.prepare('DELETE FROM c WHERE type=?1 AND slug=?2').bind(type,g('slug')).run();
  if(p=='/admin/save'){const slug=g('slug').toLowerCase().replace(/[^a-z0-9-]+/g,'-').replace(/^-|-$/g,'')||Date.now().toString(36);
   const[a,b,c,d]=[g('vt'),g('vb'),g('et'),g('eb')];
   const vt=a||await tr(env,c,'en','vi'),vb=b||await tr(env,d,'en','vi'),et=c||await tr(env,a,'vi','en'),eb=d||await tr(env,b,'vi','en');
   await env.DB.prepare('INSERT OR REPLACE INTO c VALUES(?1,?2,?3,?4,?5,?6,?7)').bind(type,slug,vt,vb,et,eb,Date.now()).run()}
  return go('/admin')}
 const q=(u.searchParams.get('e')||'').split('/'),v=(q[1]&&await one(env,q[0],q[1]))||{},rows=(await env.DB.prepare('SELECT type,slug,vi_t FROM c ORDER BY type,ts DESC').all()).results;
 const i=(n,lb,val)=>`<label>${lb}<input name=${n} value="${E(val)}"></label>`,t=(n,lb,val)=>`<label>${lb}<textarea name=${n} rows=8>${E(val)}</textarea></label>`;
 return H(`<meta name=viewport content="width=device-width"><title>Admin</title><style>body{font-family:sans-serif;max-width:900px;margin:20px auto;padding:0 16px}label{display:block;margin:10px 0;font-weight:600}input,textarea,select{width:100%;padding:8px;font:inherit;margin-top:4px}table{width:100%;border-collapse:collapse}td{padding:6px;border-bottom:1px solid #ddd}button{padding:10px 22px;cursor:pointer}small{color:#666;font-weight:400}</style>
<h2>SNS-VN Admin &nbsp;<a href="/" style="font-size:14px">Xem website</a></h2>
<h3>${v.slug?'Sửa':'Thêm mới'}</h3><form method=post action=/admin/save>
<label>Loại <select name=type>${[['product','Sản phẩm'],['news','Bài viết / Tin tức'],['set','Nội dung trang (slug: hero, about, contact)']].map(o=>`<option value=${o[0]} ${v.type==o[0]||q[0]==o[0]?'selected':''}>${o[1]}</option>`).join('')}</select></label>
${i('slug','Slug (đường dẫn, chữ không dấu, vd: phot-co-khi-cm)',v.slug||'')}
<small>Chỉ cần nhập 1 ngôn ngữ, để trống ngôn ngữ kia hệ thống sẽ tự dịch. Muốn dịch lại: xóa ô ngôn ngữ kia rồi lưu. Chèn ảnh: dán link ảnh (.jpg/.png) trên một dòng riêng, cách các đoạn bằng 1 dòng trống.</small>
${i('vt','Tiêu đề (Tiếng Việt)',v.vi_t||'')}${t('vb','Nội dung (Tiếng Việt)',v.vi_b||'')}${i('et','Title (English)',v.en_t||'')}${t('eb','Content (English)',v.en_b||'')}
<button>Lưu</button></form><h3>Danh sách</h3><table>${rows.map(r=>`<tr><td>${r.type}</td><td>${E(r.vi_t||r.slug)}<br><small>${E(r.slug)}</small></td><td><a href="/admin?e=${r.type}/${r.slug}">Sửa</a></td><td><form method=post action=/admin/del onsubmit="return confirm('Xóa?')"><input type=hidden name=type value="${r.type}"><input type=hidden name=slug value="${E(r.slug)}"><button style="padding:4px 10px;width:auto">Xóa</button></form></td></tr>`).join('')}</table>`)}
