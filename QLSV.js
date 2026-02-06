class sv{
    constructor(id, name, birth, lop, gpa) {
        this.id=id;
        this.name=name;
        this.birth=birth;
        this.lop=lop;
        this.gpa=gpa;
    }
    update(name, birth, lop, gpa){
        this.name=name;
        this.birth=birth;
        this.lop=lop;
        this.gpa=gpa;
    }
}
let dssv=[];
let mode=null;
//mode!=null cap nhat sv co id =mode; mode=null them sv moi

function addnupdate(){
    const id=document.getElementById('id').value.trim().toUpperCase();
    const name=document.getElementById('name').value;
    const birth=document.getElementById('birth').value;
    const lop=document.getElementById('lop').value.trim().toUpperCase();
    const gpa=document.getElementById('gpa').value;

    if(!id || !name) return alert("Họ tên và Mã sinh viên không được để trống");

    const diem = parseFloat(gpa);
    if (diem< 0 || diem > 4) {
        alert("Điểm GPA không hợp lệ! Vui lòng nhập trong khoảng từ 0 đến 4.0");
        document.getElementById('gpa').focus(); // Tự động trỏ chuột vào ô GPA
        return;
    }

    //update
    if(mode){
        let s=dssv.find(x=>x.id ===mode);
        s.update(name, birth, lop, gpa);
        mode=null;
    }
    //them moi
    else{
        if(dssv.some(x=>x.id===id)) return alert("Mã sinh viên này đã tồn tại");
        let s=new sv(id,name,birth,lop,gpa);
        dssv.push(s);
    }
    reset();
    rendertable();
}

function rendertable(){
    const body=document.getElementById('table');
    body.innerHTML='';
    dssv.forEach(s=>{
        body.innerHTML+=`
        <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.birth}</td>
        <td>${s.lop}</td>
        <td>${s.gpa}</td>
        <td>
        <button class="btn-edit" onclick="edit('${s.id}') ">Edit</button>
        </td>
        </tr>
        `;
    });
}

function edit(id){
    let s=dssv.find(s=>s.id===id);
    document.getElementById('id').value=s.id;
    document.getElementById('name').value=s.name;
    document.getElementById('birth').value=s.birth;
    document.getElementById('lop').value=s.lop
    document.getElementById('gpa').value=s.gpa;

    document.getElementById('id').disabled=true;
    mode=id;
}

function reset(){
    document.getElementById('id').value='';
    document.getElementById('name').value='';
    document.getElementById('birth').value='';
    document.getElementById('lop').value='';
    document.getElementById('gpa').value='';

    document.getElementById('id').disabled=false;
}
