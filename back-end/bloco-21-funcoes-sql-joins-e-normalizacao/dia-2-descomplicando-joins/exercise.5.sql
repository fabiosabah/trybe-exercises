SELECT 
	t.id,
	t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM 
	Pixar.Theater t
RIGHT JOIN
	Pixar.Movies m ON m.theater_id = t.id
ORDER BY 
	t.name;