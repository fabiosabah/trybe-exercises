SELECT 
	m.title,
	b.rating 
FROM 
	Pixar.Movies m
INNER JOIN 
	Pixar.BoxOffice b ON m.id = b.movie_id
ORDER BY 
	b.rating DESC
