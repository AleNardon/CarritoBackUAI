
// Clases
Provider{
  name
  adress  
}

Product{
  name
  stock
  price
  provider
}

ProductDetail{
  Product
  productQuantity
  price
}

Cart{
  productDetail
  total
}

seleccion
--1ro-- 
si quiero agg un producto nos fijamos si tenemos stock

--2do--
Si existe el item ++ de la cant sino push

--Process--
actualizo el stock

--Delete--
eliminar 1 devolver al stock si es el unico eliminar de la lista de cart