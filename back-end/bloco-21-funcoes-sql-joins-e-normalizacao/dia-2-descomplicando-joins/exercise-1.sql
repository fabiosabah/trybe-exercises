SELECT 
	m.title,
	b.domestic_sales,
	b.international_sales
FROM 
	Pixar.Movies m
INNER JOIN 
	Pixar.BoxOffice b ON m.id = b.movie_id;
