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
LEFT JOIN
	Pixar.Movies m ON t.id = m.theater_id
ORDER BY 
  t.names;
