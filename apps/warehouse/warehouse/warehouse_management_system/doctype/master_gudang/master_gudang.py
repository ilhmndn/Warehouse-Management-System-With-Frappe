# -*- coding: utf-8 -*-
# Copyright (c) 2019, Kelompok 4 and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class MasterGudang(Document):
	pass

# def get_child_table(doc):
#     doc_a = frappe.get_doc("Request Line Barang",doc)
#     barang = []
#     for t in doc_a.get("request_line_barang"):
#         list1.append({
# 			'kode_barang'(b):t.kode_barang(a),
#         	'nama_barang'(b):t.nama_barang(a),
# 			'jenis_barang'(b):t.jenis_barang(a),
# 			'qty'(b):t.qty(a),
# 			'satuan'(b):t.satuan(a)
# 			})
# 			return list1


