import{e as L,g as f,f as V,c as h,a as t,F as H,s as U,t as i,b as N,w as F,o as p,j as v,v as _,u as x,d as O,p as $,h as q,S as A}from"./index-mEN3WSPV.js";import{_ as J}from"./ModalItem-DDPXXT4-.js";import{T as o}from"./ToastAlert-CgWuGj4e.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r=b=>($("data-v-f4f9a5c9"),b=b(),q(),b),G={class:"card"},K={class:"card-body"},R=r(()=>t("h4",{class:"card-title mb-4"},"List SPPD",-1)),Y=["disabled"],Q={class:"table-responsive"},W={class:"table table-striped table-bordered"},X=r(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"No"),t("th",{scope:"col"},"Tanggal SPPD"),t("th",{scope:"col"},"Tujuan"),t("th",{scope:"col"},"Tgl Berangkat"),t("th",{scope:"col"},"Tgl Pulang"),t("th",{scope:"col"},"Lama Penugasan"),t("th",{scope:"col",class:"text-center"},"Action")])],-1)),Z={key:0},tt=["textContent"],at=["textContent"],et=["textContent"],nt=["textContent"],lt=["textContent"],ot=["textContent"],st={class:"text-center"},it=["onClick"],rt=["onClick"],ut={key:1},ct={colspan:"7",class:"text-center"},dt={class:"mb-3"},gt=r(()=>t("label",{for:"tgl",class:"form-label"},"Tanggal SPPD",-1)),mt=["min"],ft={class:"mb-3"},ht=r(()=>t("label",{for:"uraian",class:"form-label"},"Tujuan",-1)),pt={class:"mb-3"},vt=r(()=>t("label",{for:"tglBerangkat",class:"form-label"},"Tanggal Keberangkatan",-1)),_t=["min"],bt={class:"mb-3"},Pt=r(()=>t("label",{for:"tglPulang",class:"form-label"},"Tanggal Pulang",-1)),Dt=["min","disabled"],kt={class:"mb-3"},Tt=r(()=>t("label",{for:"lamaPenugasan",class:"form-label"},"Lama Penugasan (Hari)",-1)),g="sppd",Bt={__name:"MainSPPDView",setup(b){const u=L(),a=f({tgl:"",tujuan:"",tglBerangkat:"",tglPulang:"",lamaPenugasan:""}),T=()=>{a.value={tgl:"",tujuan:"",tglBerangkat:"",tglPulang:"",lamaPenugasan:""}},w=()=>{T(),c.value={title:"Tambah Data SPPD",confirmButtonText:"Simpan",actionType:"add",data:a.value}},C=l=>{a.value={...l},c.value={title:"Edit Data SPPD",confirmButtonText:"Update",actionType:"edit",data:a.value}},c=f({title:"Tambah Data SPPD",confirmButtonText:"Simpan",actionType:"add",data:{}}),m=f([]),P=f(!0);V(async()=>{m.value=await u.fetchData(g),P.value=!P.value,y()});const I=()=>a.value.tgl?a.value.tujuan.trim()?a.value.tglBerangkat?a.value.tglPulang?new Date(a.value.tglPulang)<=new Date(a.value.tglBerangkat)?(o.fire({icon:"error",title:"Tanggal pulang harus lebih besar dari tanggal keberangkatan"}),!1):a.value.lamaPenugasan?!0:(o.fire({icon:"error",title:"Lama penugasan harus diisi"}),!1):(o.fire({icon:"error",title:"Tanggal pulang harus diisi"}),!1):(o.fire({icon:"error",title:"Tanggal keberangkatan harus diisi"}),!1):(o.fire({icon:"error",title:"Tujuan harus diisi"}),!1):(o.fire({icon:"error",title:"Tanggal SPPD harus diisi"}),!1),B=async({actionType:l})=>{if(I())try{const n=JSON.parse(JSON.stringify(a.value));l==="add"?(await u.addItem(g,n),o.fire({icon:"success",title:"Data SPPD berhasil ditambahkan"})):l==="edit"&&(await u.updateData(g,"id",n.id,n),o.fire({icon:"success",title:"Data SPPD berhasil diubah"})),m.value=await u.fetchData(g),T();const e=document.getElementById("staticBackdrop"),s=window.bootstrap.Modal.getInstance(e);s&&s.hide();const D=document.querySelector(".modal-backdrop");D&&D.remove()}catch(n){console.error("Error:",n),o.fire({icon:"error",title:"Terjadi kesalahan"})}},j=async l=>{if((await A.fire({title:"Hapus Data SPPD?",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",cancelButtonColor:"red"})).isConfirmed)try{await u.deleteItemById(g,l)?(o.fire({icon:"success",title:"Data SPPD berhasil dihapus"}),m.value=await u.fetchData(g)):o.fire({icon:"error",title:"Gagal menghapus data"})}catch(e){console.error("Error deleting item:",e),o.fire({icon:"error",title:"Terjadi kesalahan saat menghapus data"})}},y=()=>{const l=document.getElementById("uraian");l&&(l.style.height="auto",l.style.height=`${l.scrollHeight}px`)},M=()=>{a.value.tglBerangkat?(d.value=new Date(a.value.tglBerangkat),d.value.setDate(d.value.getDate()+1),d.value=d.value.toISOString().split("T")[0],a.value.tglPulang&&new Date(a.value.tglPulang)<=new Date(a.value.tglBerangkat)&&(a.value.tglPulang="",a.value.lamaPenugasan="")):(a.value.tglPulang="",a.value.lamaPenugasan="")},E=()=>{if(a.value.tglBerangkat&&a.value.tglPulang){const l=new Date(a.value.tglBerangkat),n=new Date(a.value.tglPulang),e=Math.abs(n-l),s=Math.ceil(e/(1e3*60*60*24));a.value.lamaPenugasan=s}else a.value.lamaPenugasan=""},k=l=>{if(!l)return"";const n={day:"numeric",month:"long",year:"numeric"};return new Date(l).toLocaleDateString("id-ID",n)},S=new Date().toISOString().split("T")[0],d=f("");return(l,n)=>(p(),h("div",G,[t("div",K,[R,t("button",{type:"button",class:"btn btn-primary mb-4",onClick:w,disabled:P.value,"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}," Tambah Data ",8,Y),t("div",Q,[t("table",W,[X,m.value.length>0?(p(),h("tbody",Z,[(p(!0),h(H,null,U(m.value,(e,s)=>(p(),h("tr",{key:s},[t("td",{textContent:i(s+1)},null,8,tt),t("td",{textContent:i(k(e.tgl))},null,8,at),t("td",{textContent:i(e.tujuan)},null,8,et),t("td",{textContent:i(k(e.tglBerangkat))},null,8,nt),t("td",{textContent:i(k(e.tglPulang))},null,8,lt),t("td",{textContent:i(e.lamaPenugasan+" Hari")},null,8,ot),t("td",st,[t("button",{class:"btn-danger btn me-2 btn-sm",onClick:D=>j(e.id)}," Hapus ",8,it),t("button",{"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",class:"btn-sm btn-warning btn",onClick:D=>C(e)}," Edit ",8,rt)])]))),128))])):(p(),h("tbody",ut,[t("tr",null,[t("td",ct,i(P.value?"Loading Data...":"Data masih kosong"),1)])]))])])]),N(J,{title:c.value.title,confirmButtonText:c.value.confirmButtonText,actionType:c.value.actionType,data:c.value.data,onConfirm:B},{body:F(()=>[t("form",{onSubmit:O(B,["prevent"])},[t("div",dt,[gt,v(t("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.value.tgl=e),type:"date",min:x(S),class:"form-control",id:"tgl"},null,8,mt),[[_,a.value.tgl]])]),t("div",ft,[ht,v(t("textarea",{id:"uraian","onUpdate:modelValue":n[1]||(n[1]=e=>a.value.tujuan=e),class:"form-control",rows:"1",ref:"autoResizeTextarea",onInput:y},null,544),[[_,a.value.tujuan]])]),t("div",pt,[vt,v(t("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>a.value.tglBerangkat=e),type:"date",min:x(S),class:"form-control",id:"tglBerangkat",onChange:M},null,40,_t),[[_,a.value.tglBerangkat]])]),t("div",bt,[Pt,v(t("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>a.value.tglPulang=e),type:"date",min:d.value,class:"form-control",id:"tglPulang",disabled:!a.value.tglBerangkat,onChange:E},null,40,Dt),[[_,a.value.tglPulang]])]),t("div",kt,[Tt,v(t("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>a.value.lamaPenugasan=e),type:"text",class:"form-control",id:"lamaPenugasan",readonly:""},null,512),[[_,a.value.lamaPenugasan]])])],32)]),_:1},8,["title","confirmButtonText","actionType","data"])]))}},Ct=z(Bt,[["__scopeId","data-v-f4f9a5c9"]]);export{Ct as default};
