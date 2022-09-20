from django.contrib import admin
from .models import *

class BookBaseCustom(admin.ModelAdmin):
    search_fields = ('title', 'author')
    list_display = ('isbn','title', 'author', 'translator', 'country', 'language','category_tags')
    list_filter = ('isbn',)

class BookCustom(admin.ModelAdmin):
    search_fields = ('publisher',)
    list_display = ('base','publisher', 'edition', 'covertype', 'printtype', 'popularity','noofpages','condition','publication_year','summary','bookshelf_row','bookshelf_column','sold','price','image')
    list_filter = ('publication_year','edition')

admin.site.register(BookBase,BookBaseCustom)
admin.site.register(Book,BookCustom)
admin.site.register(ShippingDetails)
admin.site.register(ShippingProducts)
admin.site.register(Customer)
admin.site.register(Wishlist)
admin.site.register(Review)
admin.site.register(Sender)
