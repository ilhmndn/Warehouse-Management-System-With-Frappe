// Copyright (c) 2019, Ilham Aminudin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Pengembalian', {
	refresh: function(frm) {

	},

	id_pinjaman: function (frm) {
		frm.doc.data_pengembalian_buku = []
		if (frm.doc.id_pinjaman) {
			frappe.call({
				method: "frappe.client.get",
				args: {
					doctype: "Pinjaman",
					name: frm.doc.id_pinjaman
				},
				callback: function (r) {
					if(r.message) {
						for (var row in r.message.data_pinjaman_buku){
							var child = frm.add_child("data_pengembalian_buku");
							frappe.model.set_value(child.doctype, child.name, "code_buku",
								r.message.data_pinjaman_buku[row].code_buku);
							frappe.model.set_value(child.doctype, child.name, "nama_buku",
								r.message.data_pinjaman_buku[row].nama_buku);
							frappe.model.set_value(child.doctype, child.name, "tipe_buku",
								r.message.data_pinjaman_buku[row].tipe_buku);
						}
					}
					frm.refresh_field('data_pengembalian_buku')
				}
			})
		}
	}
});

cur_frm.set_query('id_pinjaman', function(){
	return{
		filters: [
			['Pinjaman', 'status', '=', 'On Borrow']
		]
	}
});
