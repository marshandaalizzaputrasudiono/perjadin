import{e as l,f as p,o as u,c as m,a as t,b as _,u as f,R as g}from"./index-mEN3WSPV.js";const h=[{name:"Admin",username:"admin",password:"admin123",role:"admin"},{name:"Danda",username:"danda",password:"danda123",role:"petugas"},{name:"Gilang",username:"gilang",password:"gilang123",role:"petugas"}],w={class:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin6","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed"},b={class:"position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center"},y={class:"d-flex align-items-center justify-content-center w-100 py-5"},v={class:"row justify-content-center w-100"},x={class:"col-md-8 col-lg-6 col-xxl-3"},j={class:"card mb-0"},S={__name:"AuthTemplateView",setup(B){const a=l(),n=["/assets/libs/jquery/dist/jquery.min.js","/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"],r=e=>new Promise((o,d)=>{const s=document.createElement("script");s.src=e,s.async=!0,s.onload=()=>o(e),s.onerror=()=>d(new Error(`Failed to load script: ${e}`)),document.body.appendChild(s)}),i=async()=>{try{for(const e of n)await r(e);console.log("All Auth scripts loaded successfully")}catch(e){console.error("Error loading scripts:",e)}},c=async()=>{await a.checkDB()||(console.log("initDB called"),await a.storeToDB("users",h),console.log("Seeder data berhasil"))};return p(()=>{console.log("Auth mounted"),i(),c()}),(e,o)=>(u(),m("div",w,[t("div",b,[t("div",y,[t("div",v,[t("div",x,[t("div",j,[_(f(g))])])])])])]))}};export{S as default};
