const searchOverlay=document.getElementById("searchOverlay");
const searchInput=document.getElementById("searchInput");
const results=document.getElementById("searchResults");
const openSearch=document.getElementById("openSearch");
const closeSearch=document.getElementById("closeSearch");

const items=[
  ["Digital Services","Websites, SEO, social media, branding, tenders and business promotion.","#services"],
  ["Home & Appliance Services","Installation, repair support and home service coordination.","#services"],
  ["Stationery Shop","School, office and everyday stationery essentials.","#services"],
  ["MS Office Package","Computer coaching course.","#learning"],
  ["Advanced Excel","Computer coaching course.","#learning"],
  ["English Typing","Computer coaching course.","#learning"],
  ["Graphic Design","Computer coaching course.","#learning"],
  ["Web Page Design","Computer coaching course.","#learning"],
  ["Website Development","Computer coaching course.","#learning"],
  ["Software Installation","Computer coaching course.","#learning"],
  ["Office Computer Knowledge","Computer coaching course.","#learning"],
  ["C Programming","Computer coaching course.","#learning"],
  ["HTML","Computer coaching course.","#learning"],
  ["Python","Computer coaching course.","#learning"],
  ["Linux Training","Computer coaching course.","#learning"],
  ["Is It Free?","Webline Cloud tool.","https://isitfree.webline.cloud/"],
  ["Navneet's Portfolio","Webline Cloud member portfolio.","https://navneet.webline.cloud/"],
  ["Glass Studio Piano","Browser piano and audio studio.","https://piano.webline.cloud/"],
  ["Home Loan Prepayment","Loan prepayment calculator.","https://home-loan-prepayment.webline.cloud/"],
  ["Math Sprint","Calculation game.","https://domaths.webline.cloud/"]
];

function renderResults(q=""){
  const term=q.trim().toLowerCase();
  const found=term?items.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(term)):items.slice(0,6);
  results.innerHTML=found.length?found.map(x=>`<a class="search-result" href="${x[2]}" ${x[2].startsWith("http")?"target='_blank' rel='noopener'":""}><strong>${x[0]}</strong><small>${x[1]}</small></a>`).join(""):"<div class='search-result'>No matching service found.</div>";
}
function showSearch(){searchOverlay.classList.add("open");searchOverlay.setAttribute("aria-hidden","false");searchInput.value="";renderResults();setTimeout(()=>searchInput.focus(),50)}
function hideSearch(){searchOverlay.classList.remove("open");searchOverlay.setAttribute("aria-hidden","true")}
openSearch.addEventListener("click",showSearch);closeSearch.addEventListener("click",hideSearch);
searchInput.addEventListener("input",e=>renderResults(e.target.value));
searchOverlay.addEventListener("click",e=>{if(e.target===searchOverlay)hideSearch()});
document.addEventListener("keydown",e=>{
  if(e.key==="/" && document.activeElement.tagName!=="INPUT" && document.activeElement.tagName!=="TEXTAREA"){e.preventDefault();showSearch()}
  if(e.key==="Escape")hideSearch()
});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{if(searchOverlay.classList.contains("open"))hideSearch()}));
