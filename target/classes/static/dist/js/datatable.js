//$(document).ready( function () {
//var table = $('#employeesTable').DataTable({
//"sAjaxSource": "/employees",
//"sAjaxDataProp": "",
//"order": [[ 0, "asc" ]],
//"aoColumns": [
//{ "mData": "id"},
//{ "mData": "name" },
//{ "mData": "lastName" },
//{ "mData": "email" },
//{ "mData": "phone" },
//{ "mData": "active" }
//]
//});
//});

$(document).ready( function ()
{
var table = $('#tabelcok').DataTable({
"sAjaxSource": "/pasienAll",
"scrollY":"200px",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_pasien"},
{ "mData": "nok" },
{ "mData": "nama" },
{ "mData": "alamat" },
{ "mData": "tgl_lhr" },
{ "mData": "umur"},
{ "mData": "telp" },
{ "mData": "kecamatan" },
{ "mData": "n_ortu" },
{ "mData": "alamat_ortu"},
{ "mData": "pekerjaan"},
{ "mData": "agama"},
{ "mData": "stat_nikah"},
{ "mData": "jekel" }
]
});
});


$(document).ready( function ()
{
var tablex = $('#tabelrj').DataTable({
"sAjaxSource": "/rawat_jalan_All",
"scrollY":"200px",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_rawat_jalan"},    
{ "mData": "id_pasien"},
{ "mData": "nok" },
{ "mData": "nama" },
{ "mData": "alamat" },
{ "mData": "tgl_lhr" },
{ "mData": "umur"},
{ "mData": "telp" },
{ "mData": "tgl_berobat" },
{ "mData": "klinik" },
{ "mData": "bayar"},
{ "mData": "dokter"},
{ "mData": "diagnosa"}
]
});
});



$(document).ready( function ()
{
var table = $('#tabelmod').DataTable({
"sAjaxSource": "/pasienAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_pasien"},
{ "mData": "nok" },
{ "mData": "nama" },
{ "mData": "alamat" },
{ "mData": "tgl_lhr" },
{ "mData": "umur"},
{ "mData": "telp" },
{ "mData": "kecamatan" },
{ "mData": "n_ortu" },
{ "mData": "alamat_ortu"},
{ "mData": "pekerjaan"},
{ "mData": "agama"},
{ "mData": "stat_nikah"},
{ "mData": "jekel" }
]
});
});


$(document).ready( function ()
{
var table = $('#tabeldok').DataTable({
"sAjaxSource": "/dokterAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_dokter"},
{ "mData": "kode" },
{ "mData": "nama" },
{ "mData": "bidang" }
]
});
});

//modal dokter
$(document).ready( function ()
{
var table = $('#tabelmodok').DataTable({
"sAjaxSource": "/dokterAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_dokter"},
{ "mData": "kode" },
{ "mData": "nama" },
{ "mData": "bidang" }
]
});
});