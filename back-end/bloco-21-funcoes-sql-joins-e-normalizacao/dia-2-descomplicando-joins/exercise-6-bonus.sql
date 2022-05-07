SELECT 
	  m.id,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes,
    m.theater_id
FROM 
	  Pixar.Movies m
INNER JOIN 
	  Pixar.Theater t ON t.id = m.theater_id
INNER JOIN 
  	Pixar.BoxOffice b ON  m.id = b.movie_id
WHERE
  	b.rating > 8;


-- OR --

USE Pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;
