# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ilham Aminudin and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class RequestPinjaman(Document):
	pass

	def on_submit(self):
		self.on_approve()

	def on_approve(self):
		if(self.docstatus == 1):
			pinjaman = frappe.new_doc("Pinjaman")
			pinjaman.id_member = self.id_member
			pinjaman.nama_member = self.nama_member
			pinjaman.tanggal_pinjam = self.tanggal_pinjam
			pinjaman.estimasi_tanggal_kembali = self.estimasi_tanggal_kembali
			for i in self.request_line:
				pinjaman.append('data_pinjaman_buku',{
					'code_buku': i.code_buku,
					'nama_buku': i.nama_buku,
					'tipe_buku': i.tipe_buku
				})
			pinjaman.save()
			new_pinjaman = frappe.get_doc("Pinjaman", pinjaman.name)
			frappe.msgprint("succes to create Pinjaman with Doc No. {}".format(new_pinjaman.name))
			self.change_status_buku()

	def change_status_buku(self):
		if(self.request_line):
			for i in self.request_line:
				buku = frappe.get_doc("Master Buku", i.code_buku)
				buku.status = 'Borrowed'
				buku.save()
