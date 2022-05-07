SELECT 
	m.title,
	(b.domestic_sales +	b.international_sales) as 'Total Sales'
FROM 
	Pixar.Movies m
INNER JOIN 
	Pixar.BoxOffice b ON m.id = b.movie_id
WHERE
	b.international_sales > b.domestic_sales;
