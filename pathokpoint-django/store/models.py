from django.db import models
from django.contrib.auth.models import User


class BookBase(models.Model):
    isbn = models.CharField(max_length=15, blank=True, null=True)
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=150)
    translator = models.CharField(max_length=150, blank=True, null=True)
    country = models.CharField(max_length=50)
    category_tags = models.CharField(max_length=500)
    language = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title} by {self.author}"


class Book(models.Model):
    base = models.ForeignKey(BookBase, on_delete=models.CASCADE)
    publisher = models.CharField(max_length=150)
    edition = models.CharField(max_length=25)
    covertype = models.CharField(max_length=25)
    printtype = models.CharField(max_length=25)
    popularity = models.CharField(max_length=25)
    noofpages = models.IntegerField()
    condition = models.CharField(max_length=25)
    publication_year = models.DateTimeField()
    summary = models.CharField(max_length=512)
    bookshelf_row = models.IntegerField()
    bookshelf_column = models.IntegerField()
    sold = models.BooleanField(default=False)
    price = models.IntegerField()
    image = models.ImageField(upload_to='bookcover')

    def __str__(self):
        return f"{self.base},{self.edition}"


class Customer(models.Model):
    base_user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=256)

    def __str__(self):
        return f"{self.base_user}"


class Wishlist(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    comment = models.CharField(max_length=256, blank=True, null=True)

    def __str__(self):
        return f"{self.book},{self.comment}"


class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)
    comment = models.CharField(max_length=256, blank=True, null=True)

    def __str__(self):
        return f"{self.book} {self.rating}"


class Sender(models.Model):
    base_user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.base_user}"


class ShippingDetails(models.Model):
    base_user = models.ForeignKey(User, on_delete=models.CASCADE)
    shipping_address = models.CharField(max_length=512)
    thana = models.CharField(max_length=25)
    district = models.CharField(max_length=25)
    payment_type = models.CharField(max_length=25)
    payment_gateway = models.CharField(max_length=25)
    datetime = models.DateTimeField()
    shipping_status = models.CharField(max_length=25)
    trxid = models.CharField(max_length=30, blank=True, null=True)
    confirmed = models.BooleanField(default=False)
    sender = models.ForeignKey(Sender, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    comment_customer = models.CharField(max_length=256)
    phone = models.CharField(max_length=25)

    def __str__(self):
        return f"{self.customer} {self.shipping_address}"


class ShippingProducts(models.Model):
    shipping = models.ForeignKey(ShippingDetails, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    available = models.BooleanField(default=True)
    availability_comment = models.CharField(max_length=256)

    def __str__(self):
        return f"{self.shipping} {self.book}"
