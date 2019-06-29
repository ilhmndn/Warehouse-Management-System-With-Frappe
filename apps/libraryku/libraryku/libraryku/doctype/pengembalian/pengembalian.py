# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ilham Aminudin and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Pengembalian(Document):
	pass

	def on_submit(self):
		self.change_status_buku()

	def change_status_buku(self):
		if(self.data_pengembalian_buku):
			for i in self.data_pengembalian_buku:
				buku = frappe.get_doc("Master Buku", i.code_buku)
				buku.status = 'Available'
				buku.save()

			pinjaman = frappe.get_doc("Pinjaman", self.id_pinjaman)
			pinjaman.status = 'Close'
			pinjaman.save()
