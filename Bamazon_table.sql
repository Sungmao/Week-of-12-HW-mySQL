CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(

ItemID INTEGER(11) AUTO_INCREMENT NOT NULL,
ProductName VARCHAR(100) NOT NULL,
DepartmentName VARCHAR(30) NOT NULL,
Price DECIMAL(10,2) NOT NULL,
StockQuantity INTEGER(11),
PRIMARY KEY (ItemID)
);

INSERT INTO Products 
	(ProductName,DepartmentName,Price,StockQuantity)
VALUES
	("Apple iPod Touch","Electronics",199.99,6),
	("Apple iPod nano","Electronics",149.99,13),
	("Apple TV","Electronics",149.99,15),
	("Apple Watch","Electronics",269.99,20),
	("LEGO City Airport Air Show","Toy",89.99,5),
	("LEGO Star Wars Eclipse Fighter","Toy",29.99,8),
	("LEGO City Volcano Crawler","Toy",39.99,5),
	("Allison Sofa","Furniture",399.00,3),
	("Sierra Reclining Sofa","Furniture",542.00,6),
	("Carter Reclining Sofa","Furniture",1077.00,5);

SELECT * FROM Products;